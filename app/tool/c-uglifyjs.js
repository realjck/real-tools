import clipboard from "clipboardy";
import {colorLog} from "../util/color-log.js";
import Uglifyjs from "uglify-js";

/**
 * Get the clipboard, Uglify the content, then paste it back to the clipboard
 * options enabled :
 * - v8 — enable workarounds for Chrome & Node.js bugs.
 * - webkit — enable workarounds for Safari/WebKit bugs. PhantomJS users should set this option to true.
 * - warnings verbose
 * @returns {Promise<void>}
 */
async function minifyFile() {
    try {
        colorLog('>>> READING CLIPBOARD...', 'yellow');
        const content = await clipboard.read();

        colorLog('>>> STARTING PROCESS...', 'cyan');
        const minifiedContent = Uglifyjs.minify(content, {
            v8: true,
            webkit: true,
            warnings: "verbose"
        }).code;
        if (minifiedContent !== undefined){
            clipboard.write(minifiedContent);
            colorLog(`>>> CLIPBOARD UGLIFIED WITH SUCCESS.`, 'green');
        }  else {
            colorLog(`>>> ERROR: CLIPBOARD MUST CONTAINS JAVASCRIPT.`, 'red');
        }
    } catch (error) {
        colorLog('>>> THERE\'S AN ERROR DUDE.', 'red');
        console.error(error);
    }
}

minifyFile().then();
