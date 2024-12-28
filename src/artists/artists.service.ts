import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Artist } from './artist.model';

@Injectable()
export class ArtistsService {
  constructor(@InjectModel(Artist) private ArtistModel: typeof Artist){}

  async create(createArtistDto: CreateArtistDto) {
    return await this.ArtistModel.create(createArtistDto)
  }

  async findAll() {
    return await this.ArtistModel.findAll()
  }

  async findOne(id: number) {
    return await this.ArtistModel.findOne({where:{id:id}});
  }

  async update(id: number, updateArtistDto: UpdateArtistDto) {
    const data = await this.findOne(id)
    if(!data){
      throw new NotFoundException('Artist not found ')
    }
    
    return await this.ArtistModel.update(updateArtistDto,{where :{where :{id:id}}})
  }

  async remove(id: number) {
    const data = await this.findOne(id)
    if(!data){
      throw new NotFoundException('Artist not found ')
    }
    return await this.ArtistModel.destroy({where:{id:id}});
  }
}