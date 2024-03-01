var _file;

var prompt = require("prompt");
var colors = require("colors/safe");

prompt.delimiter = colors.green("-->");

prompt.start();

prompt.get({
	properties : {
		file : {
			description : colors.magenta("CSS/JS file to minify (DRAG DROP HERE)")
		}
	}
}, function (err, result) {
	var minifier = require('minifier');
	var input = result.file;
	minifier.minify(input, {uglify:true})
});
