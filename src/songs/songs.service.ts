import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Song } from './song.model';
import { Artist } from 'src/artists/artist.model';

@Injectable()
export class SongsService {
  constructor(@InjectModel(Song) private SongModel: typeof Song){}

  async create(createSongDto: CreateSongDto) {
    return await this.SongModel.create(createSongDto);
  }

  async findAll() {
    const data = await this.SongModel.findAll({
      include: [
        {model: Artist}
      ]
    })
    return `This action returns all songs`;
  }

  async findOne(id: number) {
    return await this.SongModel.findOne({where:{id}});
  }

  async update(id: number, updateSongDto: UpdateSongDto) {
    const data = await this.findOne(id)
    if(!data){
      throw new NotFoundException('Song not found')
    }
    return await this.SongModel.update(updateSongDto,{where:{id}});
  }

  async remove(id: number) {
    const data = await this.findOne(id)
    if(!data){
      throw new NotFoundException('Song not found')
    }
    return await this.SongModel.destroy({where:{id}});
  }
}
