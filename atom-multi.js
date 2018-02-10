#!/usr/bin/env node

// atom-multi ~/work/projects/ react-*

const [projectDir, globPattern] = process.argv.slice(2); // remove "node" and "atom-multi.js"

const { lstatSync, readdirSync } = require("fs");
const minimatch = require("minimatch");
const path = require("path");
const child_process = require("child_process");

const isDirectory = source => lstatSync(source).isDirectory();
const getDirectories = source =>
  readdirSync(source)
    .map(name => path.join(source, name))
    .filter(isDirectory);

if (!isDirectory(projectDir)) throw new Error(`${projectDir} is not a directory!`);

const toOpen = [];

getDirectories(projectDir).forEach(dirPath => {
  const dirName = path.basename(dirPath);

  if (minimatch(dirName, globPattern)) {
    toOpen.push(dirPath);
  }
});

child_process.execSync(`atom ${toOpen.join(" ")}`);
