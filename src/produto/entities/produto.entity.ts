import { IsNotEmpty } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, } from 'typeorm';
import { Categoria } from '../../categoria/entities/categoria.entity';

@Entity({ name: 'tb_produtos' })
export class Produto {
  @PrimaryGeneratedColumn()
  id!: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  nome!: string;

  @IsNotEmpty()
  @Column({ length: 1000, nullable: false })
  descricao!: string;

  @IsNotEmpty()
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  preco!: number;

  @IsNotEmpty()
  @Column({ type: 'int', nullable: false })
  quantidade!: number;

  @IsNotEmpty()
  @Column({ type: 'date', nullable: false })
  dataValidade!: Date;

  @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
    onDelete: 'CASCADE',
  })
  categoria!: Categoria;
}