export type DimensionUnitsTypes =
    // Metric
    | "mm" // Millimeter
    | "cm" // Centimeter
    | "dm" // Decimeter
    | "m" // Meter
    | "km" // Kilometer

    // USCS
    | "in" // Inch
    | "ft" // Foot
    | "yd" // Yard
    | "mi"; // Miles

export enum DimensionUnits {
    // Metric
    mm = "mm", // Millimeter
    cm = "cm", // Centimeter
    dm = "dm", // Decimeter
    m = "m", // Meter
    km = "km", // Kilometer

    // USCS
    in = "in", // Inch
    ft = "ft", // Foot
    yd = "yd", // Yard
    mi = "mi", // Miles
}

import { registerEnumType } from "type-graphql";

registerEnumType(DimensionUnits, {
    name: "DimensionUnits", // this one is mandatory
    description: "The basic units for dimensions as metric and USCS standards", // this one is optional
});
