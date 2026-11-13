import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const image = new URL("./image.jpg", import.meta.url);
const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const imageBytes = readFileSync(image);
const maxImageBytes = 1024 * 1024;

if (imageBytes.length > maxImageBytes) {
  throw new Error("The image exceeds the 1 MiB contest limit.");
}

if (
  imageBytes.length < 4 ||
  imageBytes.readUInt16BE(0) !== 0xffd8 ||
  imageBytes.readUInt16BE(imageBytes.length - 2) !== 0xffd9
) {
  throw new Error("The image is missing its JPEG start or end marker.");
}

mkdirSync(outputDirectory, { recursive: true });
writeFileSync(join(outputDirectory, "entry.png"), imageBytes);
