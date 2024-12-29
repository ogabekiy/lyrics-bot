import { Injectable } from '@nestjs/common';
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

  findOne(id: number) {
    return `This action returns a #${id} song`;
  }

  update(id: number, updateSongDto: UpdateSongDto) {
    return `This action updates a #${id} song`;
  }

  remove(id: number) {
    return `This action removes a #${id} song`;
  }
}
