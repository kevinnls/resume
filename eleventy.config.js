const { sortbydate } = require('./lib/sortbydate.cjs');
const { inspect } = require('node:util');
const yaml = require('js-yaml');

module.exports = function(eleventyConfig) {

  eleventyConfig.addFilter(
	  "debug", (content) => `<pre>${inspect(content)}</pre>`);
  eleventyConfig.addFilter(
	  "sortbydate", sortbydate);

  eleventyConfig.addDataExtension(
	  "yml, yaml", c => yaml.load(c));

  return {
    dir: {
      input: 'src'
    }
  }
}
