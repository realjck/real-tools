# real-tools

## Utility tools for Windows with file dialog in NodeJS

The provided batch files act as convenient shortcuts executable from any location within your Windows interface.

### Installation

Once you've obtained the repository (either by cloning or unzipping it), navigate to the designated "app" folder within the extracted directory. To install the required dependencies for these scripts to function, execute the `npm install` command from the command line.

~~~~
cd app
npm install
~~~~


### Usage

The repository's root directory contains batch files that you can use as Windows shortcuts. You can incorporate the main folder's path into your system's PATH environment variable. This enables direct execution of these shortcuts from the command line.

For other operating systems or if you prefer a more streamlined approach, you can leverage the provided npm commands directly within the application folder using the `npm run` syntax.

### Tools

- **real-uglifyjs**: Allows you to minify a JavaScript file ([UglifyJS](https://github.com/mishoo/UglifyJS) with v8 and webkit options enabled).
