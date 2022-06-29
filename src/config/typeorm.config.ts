import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

export enum dbTypes {
  mysql = 'mysql',
  postgres = 'postgres',
}

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (): Promise<TypeOrmModuleOptions> => {
    return {
      type: dbTypes[process.env.DB_TYPE],
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USER,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      entities: [__dirname + '/../**/*.entity.{js,ts}'],
      migrations: ['src/db/migrations/*{.ts,.js}'],
      synchronize: false,
      logging: false,
      extra: {
        charset: 'utf8mb4_unicode_ci',
      },
    };
  },
};


export const AppDataSource = new DataSource({
  type: 'mysql',
  host: "localhost",
  port: 3306,
  username: "temp",
  password: "temp",
  database: "test",
  synchronize: false,
  logging: true,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  migrations: ['src/db/migrations/*{.ts,.js}'],
  // entities: [User],
  // migrations: ['src/migration/*{.ts,.js}'],
  subscribers: [],
})

