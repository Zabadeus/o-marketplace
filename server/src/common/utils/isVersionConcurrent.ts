import { VersionConcurrencyError } from "../errors/version-concurrency-error";
import { AnyObject } from "../types/AnyObject";
import { hasChanged } from "./hasChanged";

export function versionConcurrencyCheck(
    entity: AnyObject,
    input: AnyObject
): Error | AnyObject {
    // if the valid version number of input and to be changed entity are NOT equal send error
    if (entity.version !== input.version && entity.version !== "undefined") {
        throw new VersionConcurrencyError(
            `Sorry, but someone else has already changed this ${input.constructor.name.slice(
                0,
                -5
            )}.
            Please apply the changes again!`
        );
    } else {
        //  check if the version numbers are equal - concurrent
        if (entity.version === input.version) {
            // check if any key value pair of entity has changed compared to input
            if (hasChanged(entity, input)) {
                input.version++;
            }
        }
        return input;
    }
}
