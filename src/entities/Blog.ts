import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity("blogs")
export class Blog {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column("varchar") // Explicit column type
  title: string;

  @Column("text") // Explicit column type
  content: string;

  @Column("varchar") // Explicit column type
  name: string;

  @Column("varchar") // Explicit column type
  email: string;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  created_at: string;
}
