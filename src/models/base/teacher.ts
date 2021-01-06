import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm"

@Entity("teachers")
export default class Teacher {
    @PrimaryGeneratedColumn('increment')
    id: number
    
    @Column({length: 50, nullable:false })
    name:string
    
    @Column({length: 50, nullable:true })
    author?:string
    
    createAt:Date
    
    @Column({length: 50, nullable:true })
    status?:string
    
    @Column({length: 50, nullable:true })
    phoneNumber?:string

    @Column({nullable:true })
    address?:string

    @Column({length: 50, nullable:true })
    city?:string

    @Column({length: 50, nullable:true })
    province?:string

    @Column({length: 50, nullable:true })
    district?:string
}   