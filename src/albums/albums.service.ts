import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Album } from './album.model';

@Injectable()
export class AlbumsService {
  constructor(@InjectModel(Album) private AlbumModel : typeof Album){}

  async create(createAlbumDto: CreateAlbumDto) {

    return await this.AlbumModel.create(createAlbumDto);
  }

  async findAll() {
    return await this.AlbumModel.findAll();
  }

  async findOne(id: number) {
    return await this.AlbumModel.findOne({where:{id}});
  }

  async update(id: number, updateAlbumDto: UpdateAlbumDto) {
    const data = await this.findOne(id)
    if(!data){
      throw new NotFoundException('Album not found (')
    }
    return await this.AlbumModel.update(updateAlbumDto,{where:{id}});
  }

  async remove(id: number) {
    const data = await this.findOne(id)
    if(!data){
      throw new NotFoundException('Album not found (')
    }
    return this.AlbumModel.destroy({where:{id}});
  }
}
