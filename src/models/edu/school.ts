import { Entity, Column, PrimaryColumn, ManyToOne,OneToMany, JoinColumn } from "typeorm";
import Admin  from "./admin";
import ObservationGroup  from "./observationgroups";

@Entity("schools")
export default class School {
  @PrimaryColumn({ length: 50 })
  id?: string;
  @Column({ length: 50, nullable: true })
  name?: string;
  observationGroups?: ObservationGroup[];
  @OneToMany(()=> Admin, admin => admin.school,{
    cascade:['insert','update']
    })
  admins?: Admin[];

  assistantAdmins?: Admin[];
  nonInstructionalAdmins?: Admin[];
  
  @Column({ length: 50, nullable: true })
  abbreviation?: string;
  @Column({ nullable: true })
  address?: string;
  @Column({ length: 20, nullable: true })
  city?: string;
  @Column({ length: 20, nullable: true })
  cluster?: string;
  @Column({ length: 20, nullable: true })
  gradeSpan?: string;
  @Column({ length: 20, nullable: true })
  highGrade?: string;
  @Column({ length: 20, nullable: true })
  lowGrade?: string;
  @Column({ length: 20, nullable: true })
  phone?: string;
  @Column({ length: 20, nullable: true })
  principal?: string;
  @Column({ length: 20, nullable: true })
  region?: string;
  @Column({ length: 20, nullable: true })
  state?: string;
  ward?: string;
  @Column({ length: 20, nullable: true })
  zip?: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;
}