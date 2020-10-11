import { ObjectType, Field, InputType } from "type-graphql";
import { DimensionUnits } from "../types/dimension-units";
import { Square, SquareInput } from "./Square_Dimensions";

// Type-Class for electrical attribute of ProductProperties
@ObjectType()
export class Dimensions {
    @Field()
    length: number;
    @Field({ nullable: true })
    width?: number;
    @Field({ nullable: true })
    hight?: number;
    @Field(() => DimensionUnits)
    unit?: DimensionUnits;
    @Field({ nullable: true })
    square?: Square;
}
@InputType()
export class DimensionsInput {
    @Field()
    length: number;
    @Field({ nullable: true })
    width?: number;
    @Field({ nullable: true })
    hight?: number;
    @Field(() => DimensionUnits)
    unit?: DimensionUnits;
    @Field({ nullable: true })
    square?: SquareInput;
}
