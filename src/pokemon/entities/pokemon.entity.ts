import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {Document} from 'mongoose'

@Schema() //Schema es un decorador para que se interprete como esquema de base de datos
export class Pokemon extends Document{
    @Prop({
        unique: true,
        index:true,
    })
    name: string;

    @Prop({
        unique: true,
        index:true,
    })
    no: number;
}


export const PokemonSchema = SchemaFactory.createForClass(Pokemon);