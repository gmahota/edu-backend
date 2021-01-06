import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import Admin from "./admin";

@Entity("observationgroups")
export default class ObservationGroup {
  @PrimaryColumn({ length: 50 })
  id?: string;
  @Column({ length: 20 })
  name?: string;
  observees?: Admin[];
  observers?: Admin[];
}
