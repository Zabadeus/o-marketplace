import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { ObjectType, Field, InputType } from "type-graphql";
import { SquareUnits } from "../types/square-units";

// Type-Class for square attribute of Dimensions
@Entity()
@ObjectType()
export abstract class Square {
    @PrimaryKey()
    @Field()
    amount: number;
    @Property()
    @Field(() => SquareUnits)
    units: SquareUnits;
}
@InputType()
export abstract class SquareInput {
    @Field()
    amount: number;
    @Field(() => SquareUnits)
    units: SquareUnits;
}
