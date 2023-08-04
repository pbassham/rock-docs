import axios from "axios";
import fs, { createWriteStream } from "fs";
import { URL } from "url";


// returns the name of the file from the url path
function nameFileFromUrl(url) {
  var path = new URL(url).pathname;

  // trim leading slash if it exists
  if (path.startsWith("/")) path = path.slice(1);

  // replace all slashes with underscores for file name
  return path.replace(/\//g, "_");
}

// downloads pages and saves them locally from an array of links
export const downloadPages = async (links) => {
  for (const link of links) {
    try {
      const response = await axios.get(link, { responseType: "stream" });

      const fileName = nameFileFromUrl(link);
      // save to ./html folder
      response.data.pipe(createWriteStream(`./html/${fileName}.html`));

      console.log(`Downloaded page at URL: ${link}`);
    } catch (error) {
      console.error(`Problem fetching URL: ${link}`);
    }
  }
};

