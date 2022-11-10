import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
  } from 'typeorm';

@Entity()
export class Note {
    @PrimaryGeneratedColumn()
    public id?: number;

    @Column()
    public title?: string;

    @Column()
    public text?: string;

    @Column()
    public auteur?: string;

    @Column()
    public category?: string;

    @Column()
    public createdAt: Date = new Date();
  
    @Column()
    public updatedAt: Date = new Date();
}
