import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Album } from './album.model';
import { Artist } from 'src/artists/artist.model';
import { Song } from 'src/songs/song.model';

@Injectable()
export class AlbumsService {
  constructor(@InjectModel(Album) private AlbumModel : typeof Album,
  @InjectModel(Artist) private ArtistModel : typeof Artist
  ){}

  async create(createAlbumDto: CreateAlbumDto) {
    const artist = await this.ArtistModel.findOne({where: {id: createAlbumDto.artist_id}})
    if(!artist){
      throw new NotFoundException('Artist not found')
    }
    return await this.AlbumModel.create(createAlbumDto);
  }

  async findAll() {
    return await this.AlbumModel.findAll({include:[{model:Artist,attributes:['name']},{model:Song,attributes:['title']}]});
  }

  async findOne(id: number) {
    return await this.AlbumModel.findOne({where:{id},include:[{model:Artist,attributes:['name']},{model:Song,attributes:['title']}]});
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
