export enum SquareUnits {
    // Metric
    "mm2", // Millimeter
    "cm2", // Centimeter
    "dm2", // Decimeter
    "m2", // Meter
    "km2", // Kilometer

    // USCS
    "in2", // Inch
    "ft2", // Foot
    "yd2", // Yard
    "mi2", // Miles
}
import { registerEnumType } from "type-graphql";

registerEnumType(SquareUnits, {
    name: "SquareUnits", // this one is mandatory
    description:
        "The basic units for square values as metric and USCS standards", // this one is optional
});
