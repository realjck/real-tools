const { colorLog } = require('./../util/color-log');
const fs = require('fs').promises;
const dialog = require('node-file-dialog');
const UglifyJS = require("uglify-js");

/**
 * Open a file, Uglify the content, then Save it at filename.min.ext
 * options enabled :
 * - v8 — enable workarounds for Chrome & Node.js bugs.
 * - webkit — enable workarounds for Safari/WebKit bugs. PhantomJS users should set this option to true.
 * - warnings verbose
 * @returns {Promise<void>}
 */
async function minifyFile() {
	try {
		const filePathArray = await dialog({ type: 'open-file' });
		const filePath = filePathArray[0];

		colorLog('>>> READING FILE...', 'yellow');
		const fileContent = await fs.open(filePath, 'r');
		const content = await fileContent.readFile('utf-8');

		colorLog('>>> STARTING PROCESS...', 'cyan');
		const fileExtension = filePath.split('.').pop();
		const minifiedContent = UglifyJS.minify(content, {
			v8: true,
			webkit: true,
			warnings: "verbose"
		}).code;
		const minifiedFilePath = filePath.replace(new RegExp(`\\.${fileExtension}$`), `.min.${fileExtension}`);
		await fs.writeFile(minifiedFilePath, minifiedContent, 'utf-8');
		colorLog(`>>> FILE UGLIFIED WITH SUCCESS: ${minifiedFilePath}`, 'green');
	} catch (error) {
		colorLog('>>> THERE\'S AN ERROR DUDE.', 'red');
		console.error(error);
	}
}

minifyFile().then();
