# real-tools

### JavaScript Toolset for productivity running on NodeJS

[![Node.js](https://img.shields.io/badge/node.js-20.11.0-0?logo=node.js&labelColor=233056&color=65b849)](https://nodejs.org/)

## Installation

Once you've obtained the repository (either by cloning or unzipping it), navigate to the designated "app" folder within the extracted directory. To install the required dependencies for these scripts to function, execute the `npm install` command from the command line (Requires Node.js.):

```
cd app
npm install
```

The root directory contains batch files that you can use as Windows shortcuts.

It's possible incorporate the main folder's path into your system's PATH environment variable. This enables direct execution of the shortcuts from the command line.

For other operating systems or if you prefer a more streamlined approach, you can leverage the provided npm commands directly within the application folder using the `npm run` syntax.

## Tools for clipboard

_Take as input the contents of the clipboard, and output the result of the processing again to the clipboard._

- **real-clipboard-uglifyjs**: Allows you to minify a JavaScript clipboard content ([UglifyJS](https://github.com/mishoo/UglifyJS) with v8 and webkit options enabled).

## Tools with File dialog

_Open a system dialog window requesting an input file for processing._

- **real-file-uglifyjs**: Open a JavaScript file then write a minified version of it as `filename.min.js` ([UglifyJS](https://github.com/mishoo/UglifyJS) with v8 and webkit options enabled).
