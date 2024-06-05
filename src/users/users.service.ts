// users.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  async findOneByEmail(email: string): Promise<User | undefined> {
    return this.usersRepository.findOne({ where: { email } });
  }
  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(id: number | string): Promise<User | undefined> {
    return this.usersRepository.findOne({ where: { id } });
  }

  async create(user: Partial<User>): Promise<User> {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(user.password, salt);
    const newUser = this.usersRepository.create({
      ...user,
      password: hashedPassword,
      isActive: true,
    });
    return this.usersRepository.save(newUser);
  }
}
