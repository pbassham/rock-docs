# Searchable Rock RMS Documentation

I was frustrated with how many places I had to search to find answers to my Rock RMS questions, so I decided to create a single place to search for answers. This is a searchable version of the Rock RMS documentation. I plan to automate it to where it is updated daily.

## How to search these as Docs on Github

1. Go to the [md folder](./md)
1. Enter your search term in the search box above.

## To make a local copy (if you want to search using your computer's search)

1. Clone this repo to your computer using `git clone
2. Open the md folder
3. Search using your computer's search

## To help with development

1. Clone this repo to your computer using `git clone
2. Open the folder in VS Code
3. Make sure node.js is installed. Check by running `node -v` in the terminal.
4. Install dependencies using `npm install`
5. Run the main script using `node main.js`

## To Do

- [ ] Automate the process of updating the documentation.
- [ ] Fix link back to the official Rock RMS documentation at the top of each page.
- [ ] Add RockU video transcriptions
- [ ] find and replace "[](#link)section header" with "[section header](#link)" (have to do this rather than regular md links to not break all section links in docs)
- [ ] fix internal links by appending the filename before the [section heading](#link)
