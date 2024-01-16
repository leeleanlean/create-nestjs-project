import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { LoginUserDto } from './login-user.dto';
export class CreateUserDto extends PartialType(LoginUserDto) {
  @ApiPropertyOptional({ description: '用户ID', example: '' })
  sassID?: string;

  @ApiPropertyOptional({ description: '昵称', example: '' })
  nickname?: string;

  @ApiPropertyOptional({ description: '头像', example: '' })
  image?: string;
}
