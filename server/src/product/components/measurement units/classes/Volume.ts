import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { ObjectType, Field, InputType } from "type-graphql";
import { VolumeUnits } from "../types/volume-units";

// Type-Class for Volume attribute of ProductProperties
@Entity()
@ObjectType()
export class Volume {
    @PrimaryKey()
    @Field()
    amount: number;
    @Property()
    @Field(() => VolumeUnits)
    unit: VolumeUnits;
}
@InputType()
export class VolumeInput {
    @Field()
    amount: number;
    @Field(() => VolumeUnits)
    unit: VolumeUnits;
}
