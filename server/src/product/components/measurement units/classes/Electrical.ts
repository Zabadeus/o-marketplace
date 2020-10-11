import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { ObjectType, Field, InputType } from "type-graphql";
import { ElectricalUnitsTypes } from "../types/electrical-units";

// Type-Class for electrical attribute of ProductProperties
@Entity()
@ObjectType()
export class Electrical {
    @PrimaryKey()
    @Field()
    amount: number;
    @Property()
    @Field(() => String)
    unit: ElectricalUnitsTypes;
}

@InputType()
export class ElectricalInput {
    @Field()
    amount: number;
    @Field(() => String)
    unit: ElectricalUnitsTypes;
}
