import { RGBColorType } from "./types";

export const toRGB = ({red, green, blue}: RGBColorType) => {
    return `rgb(${red}, ${green}, ${blue})`;
}