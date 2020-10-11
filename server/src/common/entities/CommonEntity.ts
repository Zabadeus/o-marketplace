import {
    Entity,
    PrimaryKey,
    SerializedPrimaryKey,
    Property,
} from "@mikro-orm/core";
import { ObjectId } from "@mikro-orm/mongodb";
import { Field, ID, Int, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class CommonEntity {
    @PrimaryKey()
    _id!: ObjectId;

    @Field(() => ID)
    @SerializedPrimaryKey()
    id!: string;

    @Field(() => String)
    @Property({ type: "date" })
    createdAt = new Date();

    @Field(() => String)
    @Property({ type: "date", onUpdate: () => new Date() })
    updatedAt = new Date();

    @Field(() => Int)
    @Property()
    version: number = 1;
}
