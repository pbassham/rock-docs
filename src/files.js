import { promises as fsPromises } from "fs";
import path from "path";
import { getLinksFrom } from "./parse.js";


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
