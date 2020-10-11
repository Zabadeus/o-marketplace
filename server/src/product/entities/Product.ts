import { Entity, Property } from "@mikro-orm/core";
import { Field, ObjectType } from "type-graphql";
import { CommonEntity } from "../../common/entities/CommonEntity";
import { ProductProperties } from "../components/ProductProperties";
@Entity()
@ObjectType()
export class Product extends CommonEntity {
    @Field({ nullable: true })
    @Property()
    title: String;

    @Field({ nullable: true })
    @Property()
    type!: String;

    @Field({ nullable: true })
    @Property()
    metaDescription!: String; // A short description used in meta data for search engines

    @Field({ nullable: true })
    @Property()
    description!: String;

    @Field({ nullable: true })
    @Property()
    article?: "ProductArticle"; // A product article is a detailed descriptions of a product

    @Field(_Type => ProductProperties, { nullable: true })
    @Property()
    properties?: ProductProperties;

    @Field({ nullable: true })
    @Property()
    variants?: "ProductVariant[]"; // Collection of product variations

    @Field({ nullable: true })
    @Property()
    elements?: "ProductElements[]"; // List of ingredients/components a product is comprised of

    @Field(_type => [String], { nullable: true })
    @Property()
    vendors!: String[]; // Shops that sell the product

    @Field({ nullable: true })
    @Property()
    producer?: String; // producer of the product

    @Field({ nullable: true })
    @Property()
    creatorId!: String; // creator of the product data object

    @Field({ nullable: true })
    @Property()
    createdAt!: Date;

    @Field({ nullable: true })
    @Property()
    updatedAt!: Date;
    _doc: any;
}
