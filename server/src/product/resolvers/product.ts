import { Response } from "express";
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { AnyObject } from "../../common/types/AnyObject";
import { MyContext } from "../../common/types/MyContext";
import { checkAndUpdate } from "../../common/utils/checkAndUpdate";
import { Product } from "../entities/Product";
import { ProductInput } from "./Input-Types/prod-input";

@Resolver(_of => Product)
export class ProductResolver {
    @Query(_returns => Product, { nullable: false })
    async returnSingleProduct(@Arg("id") id: string, @Ctx() { em }: MyContext) {
        return await em.findOne(Product, { id });
    }

    @Query(() => [Product])
    async returnAllProducts(@Ctx() { em }: MyContext) {
        return await em.find(Product, {});
    }

    @Mutation(() => Product)
    async createProduct(
        @Arg("data") input: ProductInput,
        @Ctx() { em }: MyContext
    ): Promise<Product> {
        const product = await em.create(Product, { ...input });
        //populateEntity(product, input);
        await em.persistAndFlush(product);
        return product;
    }

    @Mutation(() => Product, { nullable: true })
    async updateProduct(
        @Arg("id") id: string,
        @Arg("data") input: ProductInput,
        @Ctx() { em, res }: MyContext
    ): Promise<AnyObject<Product> | Response> {
        const entity = await em.findOne(Product, { id });

        const result = checkAndUpdate(entity, input, em, res);

        return result;
    }
}
