const yaml = require('js-yaml')

module.exports = function(eleventyConfig){
	eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents))
	eleventyConfig.addDataExtension("yml", contents => yaml.load(contents))
	if (process.env.ENVIRONMENT == 'production') {
		eleventyConfig.ignores.add('test.md')
	}
	return {
		dir: {
			layouts: '_layouts'
		}
	}
}
