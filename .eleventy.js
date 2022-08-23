const yaml = require('js-yaml')

module.exports = function(eleventyConfig){
	eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents))
	eleventyConfig.addDataExtension("yml", contents => yaml.load(contents))
	return {
		dir: {
			layouts: '_layouts'
		}
	}
}
