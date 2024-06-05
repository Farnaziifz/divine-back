import { Controller, Post, Body, ConflictException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from './register-user.dto';
import { LoginUserDto } from './login-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() registerUserDto: RegisterUserDto) {
    try {
      return await this.authService.register(registerUserDto);
    } catch (error) {
      if (error instanceof ConflictException) {
        return {
          statusCode: 409,
          message: 'User with this email already exists',
        };
      }
      throw error;
    }
  }

  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }
}
