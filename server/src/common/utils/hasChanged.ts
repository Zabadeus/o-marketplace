import { AnyObject } from "../types/AnyObject";

export function hasChanged(entity: AnyObject, input: AnyObject): Boolean {
    const changedKeys = Object.keys(input);
    if (changedKeys.some(key => entity[key] != input[key])) {
        return true;
    } else {
        return false;
    }
}
