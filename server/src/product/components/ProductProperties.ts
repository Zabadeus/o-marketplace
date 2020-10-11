import { Property } from "@mikro-orm/core";
import { Field, InputType, ObjectType } from "type-graphql";
import {
    Dimensions,
    DimensionsInput,
} from "./measurement units/classes/Dimensions";
import {
    Electrical,
    ElectricalInput,
} from "./measurement units/classes/Electrical";
import { Volume, VolumeInput } from "./measurement units/classes/Volume";
import { Weight, WeightInput } from "./measurement units/classes/Weight";

@ObjectType()
export class ProductProperties {
    @Field(_type => Weight, { nullable: true })
    @Property()
    weight?: Weight;

    @Property()
    @Field(_type => Volume, { nullable: true })
    volume?: Volume;
    @Property()
    @Field(_type => Dimensions, { nullable: true })
    dimensions?: Dimensions;
    @Property()
    @Field({ nullable: true })
    size?: String;
    @Property()
    @Field(_type => Electrical, { nullable: true })
    electrical?: Electrical;
    @Property()
    @Field({ nullable: true })
    color?: String;
    @Property()
    @Field({ nullable: true })
    patterns?: String;
    @Property()
    @Field({ nullable: true })
    texture?: String;
    @Property()
    @Field({ nullable: true })
    style?: String;
}

@InputType()
export class ProductPropertiesInput {
    @Field(_type => WeightInput, { nullable: true })
    weight?: WeightInput;

    @Field(_type => VolumeInput, { nullable: true })
    volume?: VolumeInput;

    @Field(_type => DimensionsInput, { nullable: true })
    dimensions?: DimensionsInput;
    @Field({ nullable: true })
    size?: String;

    @Field(_type => ElectricalInput, { nullable: true })
    electrical?: ElectricalInput;
    @Field({ nullable: true })
    color?: String;
    @Field({ nullable: true })
    patterns?: String;
    @Field({ nullable: true })
    texture?: String;
    @Field({ nullable: true })
    style?: String;
}
