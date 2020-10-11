import { AnyEntity } from "@mikro-orm/core";
import { hasChanged } from "./hasChanged";

export function entityVersionController(
    entity: AnyEntity,
    input: AnyEntity
): AnyEntity {
    //  check if the version numbers are equal - concurrent
    if (entity.version === input.version) {
        // check if any key value pair of entity has changed compared to input
        if (hasChanged(entity, input)) {
            input.version++;
        }
    }
    return input;
}
