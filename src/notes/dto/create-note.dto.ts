import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateNoteDto {
    @ApiProperty()
    @IsNotEmpty()
    title: string;

    @ApiProperty()
    @IsNotEmpty()
    text: string;

    constructor(
        title: string,
        text: string,
    ) {
        this.title = title;
        this.text = text;
    }
}
