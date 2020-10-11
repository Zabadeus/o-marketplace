export enum WeightUnits {
    // Metric
    "mg", // Milligram
    "g", // Gram
    "kg", // Kilogram
    "t", // Tonne

    // USCS
    "gr", // Grain
    "dr", // Dram
    "oz", // Ounce
    "lb", // Pound
    "ton", // Ton
}

import { registerEnumType } from "type-graphql";

registerEnumType(WeightUnits, {
    name: "WeightUnits", // this one is mandatory
    description: "The basic units for weight as metric and USCS standards", // this one is optional
});
