import * as fs from "node:fs";
import * as path from "node:path";
import * as core from "@actions/core";
import { database } from "../scripts/soundDB.js";

function flatten(obj, parentKey = "") {
  let result = {};

  for (const key in obj) {
    if (key.startsWith("_")) continue;
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const newKey = parentKey ? `${parentKey}.${key}` : key;
      const value = obj[key];

      if (
        typeof value === "object" &&
        value !== null &&
        !Array.isArray(value)
      ) {
        result = { ...result, ...flatten(value, newKey) };
      } else {
        result[newKey] = value;
      }
    }
  }

  return result;
}

const flattened = flatten(database);
const dbEntries = Object.values(flattened)
  .map((x) => x.replace("modules/ggg/", ""))
  .map((x) => core.toPosixPath(x));

const errors = [];

function getAllOggFiles(directory) {
  let oggFiles = [];

  // Read the directory contents
  const files = fs.readdirSync(directory);

  // Loop through each file in the directory
  for (const file of files) {
    const fullPath = path.join(directory, file);

    // Check if the path is a directory, if so, recursively call this function
    if (fs.statSync(fullPath).isDirectory()) {
      oggFiles = oggFiles.concat(getAllOggFiles(fullPath));
    } else {
      const extension = path.extname(file).toLowerCase();
      // If it's a file, check if it has a .ogg extension
      if (extension === ".md" || extension === ".txt") continue;
      if (extension === ".ogg") {
        oggFiles.push(core.toPosixPath(fullPath));
      }
    }
  }

  return oggFiles;
}

// Get all ogg files from the assets directory
const existingFiles = getAllOggFiles("./assets/sounds");

// Check each database entry against the filesystem
for (const dbEntry of dbEntries) {
  if (!existingFiles.includes(dbEntry)) {
    errors.push(dbEntry);
  }
}

if (errors.length) {
  core.setFailed(
    "The following database entries do not have corresponding files in the assets directory!",
  );
  core.startGroup(" \x1B[33;40m==== Missing Files ====\x1B[0m ");
  errors
    .map((e) => e.replaceAll("assets/sounds", "${p}"))
    .forEach((m) => core.info(`\`${m}\``));
  core.endGroup();
  core.info(
    `\x1B[4;1mTotal of \x1B[31m${errors.length}\x1B[39m missing files.\x1B[0m`,
  );
} else {
  core.info("✅ All database entries have corresponding files!");
}
