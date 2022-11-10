import { ApiProperty } from '@nestjs/swagger';
import { Note } from '../entities/note.entity';

export class NoteDto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    title: string;

    @ApiProperty()
    text: string;

    @ApiProperty()
    auteur: string;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;

    constructor(value: Note) {
        this.id = value.id ?? 0;
        this.title = value.title ?? '';
        this.text = value.text ?? '';
        this.auteur = value.auteur ?? '';
        this.createdAt = value.createdAt ?? new Date();
        this.updatedAt = value.updatedAt ?? new Date();
    }
}