import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { NotesService } from './notes.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { ApiConflictResponse, ApiCreatedResponse, ApiNoContentResponse, ApiNotFoundResponse, ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { NoteDto } from './dto/notes.dto';

@Controller('notes')
@ApiTags('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: NoteDto,
  })
  @ApiConflictResponse({
    description: 'Existing title'
  })
  async create(@Body() createNoteDto: CreateNoteDto): Promise<NoteDto> {
    const note = await this.notesService.create(createNoteDto);
    return new NoteDto(note);
  }

  @Get()
  @ApiQuery({
    name: 'title',
    required: false,
  })
  @ApiQuery({
    name: 'auteur',
    required: false,
  })
  @ApiQuery({
    name: 'category',
    required: false,
  })
  @ApiOkResponse({
    description: 'list of notes',
    type: [NoteDto],
  })
  async findAll(
    @Query('title') title?: string,
    @Query('auteur') auteur?: string,
    @Query('category') category?: string,
  ): Promise<NoteDto[]> {
    const notes = await this.notesService.findAll({
      title,
      auteur,
      category,
    });
    return notes.map((note) => new NoteDto(note));
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'The note',
    type: NoteDto,
  })
  @ApiNotFoundResponse({
    description: 'Note not found',
  })
  async findOne(@Param('id') id: string) {
    const note = await this.notesService.findOne(+id);
    return new NoteDto(note); 
  }

  @Patch(':id')
  @ApiNoContentResponse({
    description: 'successful update'
  })
  update(@Param('id') id: string, @Body() updateNoteDto: UpdateNoteDto) {
    return this.notesService.update(+id, updateNoteDto);
  }

  @Delete(':id')
  @ApiNoContentResponse({
    description: 'Successful deletion',
  })
  remove(@Param('id') id: string) {
    return this.notesService.remove(+id);
  }
}
