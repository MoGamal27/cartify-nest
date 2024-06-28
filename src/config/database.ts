import { TypeOrmModule } from '@nestjs/typeorm';

export const databaseProviders = [
  TypeOrmModule.forRoot({
    type: 'postgres', 
    host: 'localhost',
    port: 5432,
    username: 'root',
    password: '1234',
    database: 'Cartify',
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: true,
  }),
];
