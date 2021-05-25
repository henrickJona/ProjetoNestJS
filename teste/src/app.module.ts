import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import {UsersModule} from './users/users.module'
import {User} from './models/user';
@Module({
  imports: [SequelizeModule.forRoot({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'Jonathan!1',
    database: 'teste',
    define: {
    
      timestamps: true,
      underscored: true,
      
    },
    models: [User],
  }),UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
