import {
    Connection,
    EntityManager,
    IDatabaseDriver,
    wrap,
} from "@mikro-orm/core";
import { Response } from "express";
import { AnyObject } from "../types/AnyObject";
// import { hasChanged } from "./hasChanged";
import { versionConcurrencyCheck } from "./isVersionConcurrent";

export async function checkAndUpdate(
    entity: AnyObject | null,
    input: AnyObject,
    em: EntityManager<any> & EntityManager<IDatabaseDriver<Connection>>,
    res: Response<any>
): Promise<AnyObject<any> | Response<any>> {
    try {
        if (!entity) {
            return res.status(404).json({
                message: `${input.constructor.name.slice(0, -5)} not found`,
            });
        } else {
            const checkedInput = versionConcurrencyCheck(entity, input);

            wrap(entity).assign(checkedInput);

            await em.persist(entity).flush();
            return entity;
        }
    } catch (e) {
        return res.status(e.statusCode).json({ message: e.message });
    }
}

// async function errorHandler(
//     input: FilterValue2<AnyEntity<any>>
// ): Promise<AnyEntity<any> | null> {
//     try {
//         const result = await input;
//         return result;
//     } catch (err) {
//         console.log("Error has accured");
//         return null;
//     }
// }
