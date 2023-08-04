import fs from "fs";
import * as cheerio from "cheerio";
import TurndownService from "turndown";
import turndownPluginGfm from "turndown-plugin-gfm";
const turndownService = new TurndownService({
  // headingStyle: 'atx',
  preformattedCode: true,
});

// Enables Tables
turndownService.use(turndownPluginGfm.gfm);

// Makes code blocks use triple backticks
turndownService.addRule("code", {
  filter: ["pre"],
  replacement: function (content) {
    return "\n```\n" + content + "\n```\n";
  },
});

// parses html and returns an array of links
const baseUrl = "https://community.rockrms.com"; // Your webpage base URL

let slugs = [
  "lava",
  "documentation",
  "styling",
  "developer",
  // "recipes"
]; // Patterns to match in URL
let slugsToIgnore = [
  "#",
  "wordpress.org",
  "facebook.com",
  "google.com",
  ".pdf",
  "mozilla.org",
  "www.rockrms.com",
]; // Patterns to match in URL

export function getLinksFrom(html) {
  try {
    // const response = await axios.get(url);
    // const html = response.data;
    // log(html);
    const $ = cheerio.load(html);
    const links = [];

    $("a").each((i, el) => {
      const link = $(el).attr("href");
      // log(link)
      if (link && filterUrls(link)) {
        let absoluteLink = new URL(link, baseUrl).href;

        //trim trailing slash if it exists
        if (absoluteLink.endsWith("/")) {
          absoluteLink = absoluteLink.slice(0, -1);
        }
        links.push(absoluteLink.toLowerCase());
        // links.push(link);
      }
    });
    let uniqueArray = [...new Set(links)];
    // console.log(links)
    // console.log(uniqueArray)
    return uniqueArray;
  } catch (error) {
    console.error(error);
  }
}

// returns true if url contains a slug from the slugs array
function filterUrls(url) {
  url = url.toLowerCase(); // Convert url to lowercase

  // if url contains "/book/" it should also contain "/content"
  if (url.includes("/book/")) {
    if (!url.includes("/content")) {
      console.log(`Found /book/ but not /content in ${url}`);
      return false;
    }
  }

  // Exclude links that contain a slug to ignore
  for (let i = 0; i < slugsToIgnore.length; i++) {
    if (url.includes(slugsToIgnore[i].toLowerCase())) {
      // Convert slug to lowercase
      // console.log(`Found slug ${slugs[i]} in ${url}`);
      return false;
    }
  }
  // if url contains "/bookcontent/" only get urls with less than 4 parts
  if (url.includes("/bookcontent/")) {
    // trim trailing slash if it exists
    if (url.endsWith("/")) {
      url = url.slice(0, -1);
    }

    // regex match and ignore if has pattern of /#/#
    const regex = /\/\d+\/\d+/g;
    if (url.match(regex)) {
      // console.log(`Found /bookcontent/ with pattern of /#/ in ${url}`);
      return false;
    }
  }
  // Include only links that contain a slug
  for (let i = 0; i < slugs.length; i++) {
    if (url.includes(slugs[i].toLowerCase())) {
      // Convert slug to lowercase
      // console.log(`Found slug ${slugs[i]} in ${url}`);
      return true;
    }
  }
  return false;
}

export const getAllLinksFromPages = async (fileObjects) => {
  let uniqueLinks = [];
  try {
    for (const fileObj of fileObjects) {
      const links = getLinksFrom(fileObj.contents);
      // console.log(`Found ${links.length} links on ${file}`);
      uniqueLinks = [...new Set([...uniqueLinks, ...links])];
    }
    console.log(`Found ${uniqueLinks.length} unique links`);
    // console.log each link
    uniqueLinks.forEach((link) => {
      console.log(link);
    });
    // console.log(uniqueLinks.sort());
    return uniqueLinks.sort();
  } catch (error) {
    console.error(error);
  }
};
// const links = getLinksFrom(contents);

// log(`Found ${links.length} links on ${file}`);
// uniqueLinks = [...new Set([...uniqueLinks, ...links])];

export const htmlToMarkdown = (html) => {
  try {
    const $ = cheerio.load(html);
    // const text = $.text();

    let pageText = "";

    // with cheerio, get all content from body after removing scripts styles and start after the first h1

    // remove scripts and styles
    $("script").remove();
    $("style").remove();
    $("footer").remove();
    $("aside").remove();
    $("nav").remove();
    $(".header-row").remove();
    $(".topbar").remove();
    $('div[data-type="update-summary"]').remove();

    // remove class header-row

    let bodyHTML;
    //  if there is an article tag
    if ($("article").length) {
      // get the text from the article tag
      // pageText = $('article').text();
      bodyHTML = $("article").html();
    } else {
      // get the text from the body tag
      // pageText = $('body').text();
      bodyHTML = $("body").html();
    }

    // const bodyHTML = $('article').html();

    // Convert HTML to markdown
    const markdown = turndownService.turndown(bodyHTML);
    // console.log(`    Finished converting to MD`)
    // console.log(markdown);

    return markdown;
    // get article
    // const article = $('article').text();
    //remove footer

    // $('article').each((i, elem) => {
    //   pageText += $(elem).text();
    // });

    // return pageText;

    // return text;
  } catch (error) {
    console.error(error);
  }
};
