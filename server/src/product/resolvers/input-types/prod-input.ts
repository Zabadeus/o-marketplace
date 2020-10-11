import { InputType, Field, Int } from "type-graphql";
import { ProductPropertiesInput } from "../../components/ProductProperties";

@InputType()
export class ProductInput {
    @Field({ nullable: true })
    title: String;

    @Field({ nullable: true })
    type!: String;

    @Field({ nullable: true })
    metaDescription!: String; // A short description used in meta data for search engines

    @Field({ nullable: true })
    description!: String;

    @Field({ nullable: true })
    article?: "ProductArticle"; // A product article is a detailed descriptions of a product

    @Field({ nullable: true })
    properties?: ProductPropertiesInput;

    @Field({ nullable: true })
    variants?: "ProductVariant[]"; // Collection of product variations

    @Field({ nullable: true })
    elements?: "ProductElements[]"; // List of ingredients/components a product is comprised of

    @Field(_type => [String], { nullable: true })
    vendors!: String[]; // Shops that sell the product

    @Field({ nullable: true })
    producer?: String; // producer of the product

    @Field({ nullable: true })
    creatorId!: String; // creator of the product data object

    @Field({ nullable: true })
    createdAt!: Date;

    @Field({ nullable: true })
    updatedAt!: Date;
    _doc: any;

    @Field(() => Int)
    version!: number;
}
