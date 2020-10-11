import {
    Entity,
    PrimaryKey,
    Property,
    SerializedPrimaryKey,
} from "@mikro-orm/core";
import { ObjectId } from "@mikro-orm/mongodb";
import { ObjectType, Field, InputType, ID } from "type-graphql";
import { WeightUnits } from "../types/weight-units";

// Type-Class for weight attribute of ProductProperties
@Entity()
@ObjectType()
export class Weight {
    @PrimaryKey()
    _id: ObjectId;

    @Field(() => ID)
    @SerializedPrimaryKey()
    id!: string;
    @Property()
    @Field({ nullable: true })
    amount: number;

    @Property()
    @Field(() => WeightUnits, { nullable: true })
    unit: WeightUnits;
}

@InputType()
export class WeightInput {
    @Field({ nullable: true })
    amount: number;

    @Field(() => WeightUnits, { nullable: true })
    unit: WeightUnits;
}
