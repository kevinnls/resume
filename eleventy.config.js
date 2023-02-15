const { inspect } = require('node:util');
const yaml = require('js-yaml');

module.exports = function(eleventyConfig) {

  eleventyConfig.addFilter(
	  "debug", (content) => `<pre>${inspect(content)}</pre>`);

  eleventyConfig.addDataExtension(
	  "yml, yaml", c => yaml.load(c));

  return {
    dir: {
      input: 'src'
    }
  }
}
