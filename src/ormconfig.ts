import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

const connectionOptions: MysqlConnectionOptions = {
  type: 'mysql',
  username: 'admin',
  password: 'agathe',
  database: 'nestjs',
  entities: [
    'dist/**/*.entity.js'
  ],
  migrations: [
    'dist/migrations/*{.ts,.js}'
  ],
  cli: {
    migrationsDir: 'src/migrations'
  }
}

export default connectionOptions;