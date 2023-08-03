import axios from "axios";
// import { load } from "cheerio";
// import { log } from "console";
import fs, { createWriteStream } from "fs";
import { URL } from "url";
// import { getFiles,getLocalLinks } from "./parseHtml";
// import { getFiles } from "../files.js";
// import exp from "constants";
// TODO: need to split this into multiple files
// file for downloading pages
// file for parsing pages
// TODO: Publish as github repo of MD files
// TODO: Transcribe videos




// returns the name of the file from the url path
function nameFileFromUrl(url) {
  var parsedUrl = new URL(url);
  var path = parsedUrl.pathname; //+ parsedUrl.search + parsedUrl.hash;
  var replacedPath = path.replace(/\//g, "-");
  return replacedPath.startsWith("-") ? replacedPath.slice(1) : replacedPath;
}


// fetches a page and returns an array of links from the page (does not download the page)
// const fetchPage = async (url) => {
//   try {
//     const response = await axios.get(url);
//     const html = response.data;
//     // log(html);
//     const $ = load(html);
//     const links = [];

//     $("a").each((i, el) => {
//       const link = $(el).attr("href");
//       // log(link)
//       if (link && urlContainsSlug(link)) {
//         const absoluteLink = new URL(link, baseUrl).href;
//         links.push(absoluteLink.toLowerCase());
//         // links.push(link);
//       }
//     });
//     let uniqueArray = [...new Set(links)];
//     // console.log(links)
//     // console.log(uniqueArray)
//     return uniqueArray;
//   } catch (error) {
//     console.error(error);
//   }
// };


// main function that gets all links from rootUrls and downloads them and the pages they link to
// const processPages = async () => {
//   let uniqueLinks = [];
//   log("Processing pages...");
//   for (let url of rootUrls) {
//     console.log(url);

//     log(`Processing ${url}`);
//     // const links = await fetchPage(url);
//     // log(`Found ${links.length} links on ${url}`)

//     // uniqueLinks = [...new Set([...uniqueLinks, ...links])];
//   }
//   log("Done!");

//   log(`Found ${uniqueLinks.length} links`);
//   console.log(uniqueLinks.sort());

//   downloadPages(rootUrls);
//   // downloadPages(links);
// };

// downloads pages and saves them locally from an array of links
export const downloadPages = async (links) => {
  for (const link of links) {
    try {
      const response = await axios.get(link, { responseType: "stream" });
      // response.data.pipe(createWriteStream(`./html/${link.replace(/\//g, '')}.html`)); // download page and save to ./html folder
      response.data.pipe(
        createWriteStream(`./html/${nameFileFromUrl(link)}.html`)
      ); // download page and save to ./html folder
      console.log(`Downloaded page at URL: ${link}`);
      
    } catch (error) {
      console.error(`Problem fetching URL: ${link}`);
    }
  }
};


// const allPages = await getLocalLinks("./html");
// getFiles("./html");
// const fileContents = await getFiles('./html')
// console.log(fileContents.length + ' filess')
// downloadPages(allPages);
// processPages();
// export const refreshRootPages = async (urls) => {
//   await downloadPages(urls);

// }

// write contents to file in ./md folder
const writeToFile = (fileName, contents) => {
  fs.writeFile(`./md/${fileName}.md`, contents, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    //file written successfully
  });
};
