import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    HttpCode,
    HttpStatus
  } from '@nestjs/common';
  import { CreateUserDTO, EditUserDTO } from './user.dto';
  import { User } from './user.interface';
  import { UserService } from './user.service';
  import { ApiTags,ApiOperation,ApiResponse } from '@nestjs/swagger';
  interface UserResponse<T = unknown> {
    code: number;
    data?: T;
    message: string;
  }
  
  @Controller('user')
  @ApiTags('user')  
  export class UserController {
    constructor(private readonly userService: UserService) {}
  
    // GET /user/users
    @Get('users')
    @ApiOperation({summary:"查询所有数据",description:"人员"})
    @ApiResponse({status:200,description:"get"})
    // @HttpCode(HttpStatus.OK)
    async findAll(): Promise<UserResponse<User[]>> {
      return {
        code: 200,
        data: await this.userService.findAll(),
        message: 'Success.'
      };
    }
  
    // GET /user/:_id
    @Get(':_id')
    async findOne(@Param('_id') _id: string): Promise<UserResponse<User>> {
      return {
        code: 200,
        data: await this.userService.findOne(_id),
        message: 'Success.'
      };
    }
  
    // POST /user
    @Post()
    async addOne(@Body() body: CreateUserDTO): Promise<UserResponse> {
      await this.userService.addOne(body);
      return {
        code: 200,
        message: 'Success.'
      };
    }
  
    // PUT /user/:_id
    @Put(':_id')
    async editOne(
      @Param('_id') _id: string,
      @Body() body: EditUserDTO
    ): Promise<UserResponse> {
    //   await this.userService.editOne(_id, body);
      return {
        code: 200,
        data:"yes",
        message: 'Success.'
      };
    }
  
    // DELETE /user/:_id
    @Delete(':_id')
    async deleteOne(@Param('_id') _id: string): Promise<UserResponse> {
      await this.userService.deleteOne(_id);
      return {
        code: 200,
        message: 'Success.'
      };
    }
  }