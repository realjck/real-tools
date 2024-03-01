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

		console.log('>>> READING FILE...');
		const fileContent = await fs.open(filePath, 'r');
		const content = await fileContent.readFile('utf-8');

		console.log('>>> STARTING PROCESS...');
		const fileExtension = filePath.split('.').pop();
		const minifiedContent = UglifyJS.minify(content, {
			v8: true,
			webkit: true,
			warnings: "verbose"
		}).code;
		const minifiedFilePath = filePath.replace(new RegExp(`\\.${fileExtension}$`), `.min.${fileExtension}`);
		await fs.writeFile(minifiedFilePath, minifiedContent, 'utf-8');
		console.log(`>>> FILE UGLIFIED WITH SUCCESS: ${minifiedFilePath}`);
	} catch (error) {
		console.error('>>> THERE\'S AN ERROR DUDE:', error);
	}
}

minifyFile().then();
