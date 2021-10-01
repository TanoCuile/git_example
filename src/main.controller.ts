import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
  UseInterceptors,
} from '@nestjs/common';


@Controller('users')
export class MainController {
  @Get('')
  async create() {
    return "OK";
  }
}
