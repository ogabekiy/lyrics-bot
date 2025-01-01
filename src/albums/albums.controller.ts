import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AlbumsService } from './albums.service';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { RoleGuard } from 'src/common/guards/roleGuard';
import { Roles } from 'src/common/guards/roles.decorator';

@Controller('albums')
export class AlbumsController {
  constructor(private readonly albumsService: AlbumsService) {}

  @UseGuards(RoleGuard)
  @Roles('admin')
  @Post('create')
  create(@Body() createAlbumDto: CreateAlbumDto) {
    return this.albumsService.create(createAlbumDto);
  }

  @Get('all')
  findAll() {
    return this.albumsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.albumsService.findOne(+id);
  }

  @UseGuards(RoleGuard)
  @Roles('admin')
  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateAlbumDto: UpdateAlbumDto) {
    return this.albumsService.update(+id, updateAlbumDto);
  }

  @UseGuards(RoleGuard)
  @Roles('admin')
  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.albumsService.remove(+id);
  }
}
