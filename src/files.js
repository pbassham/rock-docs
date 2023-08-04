import { log } from "console";
import { promises as fsPromises } from "fs";
import path from "path";
import { getLinksFrom } from "./parse.js";

// processes all pages in the ./html folder and returns an array of links
// export async function getLocalLinks(dirPath) {
//   let uniqueLinks = [];
//   try {
//     const files = await fsPromises.readdir(dirPath);
//     const processFiles = files.map(async (file) => {
//       const filePath = path.join(dirPath, file);
//       const stat = await fsPromises.stat(filePath);
//       if (stat.isFile() && path.extname(filePath) === ".html") {
//         const contents = await fsPromises.readFile(filePath, "utf8");

//         const links = getLinksFrom(contents);

//         log(`Found ${links.length} links on ${file}`);
//         uniqueLinks = [...new Set([...uniqueLinks, ...links])];
//       }
//     });
//     await Promise.all(processFiles);
//     log(`Found ${uniqueLinks.length} unique links`);
//     log(uniqueLinks.sort());
//     return uniqueLinks.sort();
//   } catch (err) {
//     console.error("There was an error", err);
//   }
// }

export async function getFiles(dirPath) {
  let filesToReturn = [];
  try {
    const fileNames = await fsPromises.readdir(dirPath);
    // console.log(fileNames);
    const processFiles = fileNames.map(async (fileName) => {
      const filePath = path.join(dirPath, fileName);
      const stat = await fsPromises.stat(filePath);
      if (stat.isFile() && path.extname(filePath) === ".html") {
        const contents = await fsPromises.readFile(filePath, "utf8");
        
        // let rockPath = fileName.replace("-", "/");

        // replace all instances of _ with /
        let rockPath = fileName.replace(/_/g, "/");
        // trim html extension
        rockPath = rockPath.replace(".html", "");
        // console.log(rockPath);

        filesToReturn.push({
          fileName: fileName,
          contents: contents,
          originalUrl: `https://community.rockrms.com/${rockPath}`,
        });
      }
    });
    await Promise.all(processFiles);
    return filesToReturn;
  } catch (err) {
    console.error("There was an error", err);
  }
}

// const fileContents = await getFiles('./html')
// console.log(fileContents.length + ' files')
