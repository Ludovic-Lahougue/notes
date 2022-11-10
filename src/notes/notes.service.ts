import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { Note } from './entities/note.entity';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note)
    private noteRepository: Repository<Note>
  ) {}

  async create(createNoteDto: CreateNoteDto): Promise<Note> {
    const titleNote = await this.findAll();
    if (titleNote.length > 0)
      throw new ConflictException('Existing title');

    return this.noteRepository.save({
      ...createNoteDto,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
  }

  findAll(): Promise<Note[]> {
    return this.noteRepository.find();
  }

  async findOne(id: number): Promise<Note> {
    const note = await this.noteRepository.findOneBy({id: id});
    if (note === null) {
      throw new NotFoundException('Note not found');
    }
    return note;
  }

  async update(id: number, updateNoteDto: UpdateNoteDto): Promise<void> {
    const result = await this.noteRepository.update(id, {
      ...updateNoteDto,
      updatedAt: new Date(),
    });
    if (result.affected === 0)
      throw new NotFoundException('Note not found');
  }

  async remove(id: number): Promise<void> {
    const result = await this.noteRepository.delete(id);
    if (result.affected === 0)
      throw new NotFoundException('Note not found');
  }
}
