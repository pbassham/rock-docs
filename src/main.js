import axios from "axios";
import { load } from "cheerio";
import { log } from "console";
import fs, { createWriteStream } from "fs";
import { URL } from "url";
import { getAllLinksFromPages, getTextFrom } from "./parse.js";
import { getFiles } from "./files.js";
import { downloadPages } from "./fetching.js";
// TODO: need to split this into multiple files
// file for downloading pages
// file for parsing pages
// TODO: Publish as github repo of MD files
// TODO: Transcribe videos


const rootUrls = [
  "https://community.rockrms.com/Lava",
  "https://community.rockrms.com/documentation",
  "https://community.rockrms.com/styling",
  "https://community.rockrms.com/developer",
]; // URLs to get links from

// await downloadPages(rootUrls);

const fileContents = await getFiles('./html')

console.log(fileContents.length + ' files')

// const links = await getAllLinksFromPages(fileContents)
// console.log(links.length + ' links')
// await downloadPages([...new Set([...rootUrls, ...links])])

// for each html file, get text and write to a markdown file
for (let file of fileContents) {
  const content = getTextFrom(file.contents)

  // with cheerio, get title from html and trim whitespace
  const $ = load(file);
  // const title = $('title').text().trim()
  // remove " | Rock Community"
  const title = $('title').text().replace(' | Rock Community', '').trim()

  // const $ = load(file);
  // const title = $('title').text()
  // const content = $('body').text()
  const fileName = file.fileName.replace('.html', '')
  const md = `# ${title}\nfrom:${file.fileName}\n\n${content}`
  // const fileName = file.fileName
  // remove .html from fileName
  fs.writeFile(`./md/${fileName}.md`, md, function (err) {
    if (err) return console.log(err);
    console.log(`${fileName} > ${title} > ${content.length} characters`);
  });
}
