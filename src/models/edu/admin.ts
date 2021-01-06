import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import School from "./school";

@Entity("admins")
export default class Admin {
  @PrimaryColumn({ length: 50 })
  id?: string;
  @Column({ length: 50, nullable: true })
  name?: string;
  @ManyToOne(() => School, (school) => school.admins)
  @JoinColumn({ name: "school_id" })
  school: School;
}
