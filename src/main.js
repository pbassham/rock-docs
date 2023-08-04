import axios from "axios";
import { load } from "cheerio";
import { log } from "console";
import fs, { createWriteStream } from "fs";
import { URL } from "url";
import { getAllLinksFromPages, htmlToMarkdown } from "./parse.js";
import { getFiles } from "./files.js";
import { downloadPages } from "./fetching.js";
import path from "path";
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

// await refreshSourcePages();
await makeMdFiles();

async function makeMdFiles() {
  const fileContents = await getFiles("./html");

  console.log(fileContents.length + " files");

  // const links = await getAllLinksFromPages(fileContents)
  // console.log(links.length + ' links')
  // await downloadPages([...new Set([...rootUrls, ...links])])
  // for each html file, get text and write to a markdown file
  for (let file of fileContents) {
    // console.log(`Starting ${file.fileName}`);
    const mdContent = htmlToMarkdown(file.contents) || "";

    // with cheerio, get title from html and trim whitespace
    const $ = load(file.contents);
    let title = $("title").text().replace(" | Rock Community", "").trim();

    // if filename contains "_" split filename by _ and get first part as category
    let category = getCategory(file.fileName);
    
    // make filename safe for mac and windows
    title = title.replace("/", "-");
    title = title.replace(":", "-");
    title = title.replace("?", "-");

    const newFileName = path.normalize(`${category} - ${title}.md`)
    // const fileName = file.fileName.replace(".html", "");
    const md = `# ${title}\n[View Original Source](${file.originalUrl})\n\n${mdContent}`;
    
    fs.writeFile(`./md/${newFileName}`, md, function (err) {
      if (err) return console.log(err);
      console.log(
        `${file.fileName} > ${newFileName} > ${mdContent.length} characters`
      );
    });
  }
}


// refresh all source pages
async function refreshSourcePages() {
  // await downloadPages(rootUrls);
  const fileObjects = await getFiles("./html");
  const links = await getAllLinksFromPages(fileObjects);
  await downloadPages([...new Set([...rootUrls, ...links])]);
}


// parse category name from filename
function getCategory(fileName) {
  // if filename starts with "developer_book" return "Developer"
  if (fileName.startsWith("developer_videos")) {
    return "Dev Videos";
  } else if (fileName.startsWith("developer_")) {
    return "Dev Docs";
  } else if (fileName.startsWith("lava_commands")) {
    return "Lava Commands";
  } else if (fileName.startsWith("lava_filters")) {
    return "Lava Filters";
  } else if (fileName.startsWith("lava_tags")) {
    return "Lava Tags";
  } else if (fileName.startsWith("lava")) {
    return "Lava";
  } else if (fileName.startsWith("styling")) {
    return "Styling";
  } else if (fileName.startsWith("documentation")) {
    return "Manual";
  } else if (fileName.startsWith("recipes")) {
    return "Recipe";
  } else
  return "Docs";
}