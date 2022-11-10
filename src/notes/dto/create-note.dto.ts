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

    constructor(
        title: string,
        text: string,
        auteur: string,
    ) {
        this.title = title;
        this.text = text;
        this.auteur = auteur;
    }
}
