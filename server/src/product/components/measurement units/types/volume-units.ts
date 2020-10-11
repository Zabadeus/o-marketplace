export enum VolumeUnits {
    // Metric
    "cl", // Centiliter
    "ml", // Milliliter
    "dl", // Deciliter
    "l", // Liter
    "hl", // Hectoliter
    "m3", // Cubic Meter

    // USCS
    "tbsp", //Tablespoon
    "tsp", // Teaspoon
    "fl_oz", // Fluid Ounce
    "cup", // Cup
    "gill", // Gill
    "pt", // Pint
    "qt", // Quart
    "gal", // Gallon
    "in3", // Cubic Inch
    "ft3", // Cubic Foot
    "yd3", // Cubic Foot
}

import { registerEnumType } from "type-graphql";

registerEnumType(VolumeUnits, {
    name: "VolumeUnits", // this one is mandatory
    description: "The basic units for volume as metric and USCS standards", // this one is optional
});
