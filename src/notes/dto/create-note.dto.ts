import { ApiProperty } from '@nestjs/swagger';
import { isNotEmpty, IsNotEmpty } from 'class-validator';

export class CreateNoteDto {
    @ApiProperty()
    @IsNotEmpty()
    title: string;

    @ApiProperty()
    @IsNotEmpty()
    text: string;

    @ApiProperty()
    @IsNotEmpty()
    auteur: string;

    @ApiProperty()
    @IsNotEmpty()
    category: string;

    constructor(
        title: string,
        text: string,
        auteur: string,
        category: string,
    ) {
        this.title = title;
        this.text = text;
        this.auteur = auteur;
        this.category = category;
    }
}
