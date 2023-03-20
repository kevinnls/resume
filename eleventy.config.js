const { sortbydate } = require('./lib/sortbydate.cjs');
const { human_date, machine_date } = require('./lib/dateformats.cjs');
const { inspect } = require('node:util');
const yaml = require('js-yaml');

module.exports = function(eleventyConfig) {

  eleventyConfig.addFilter(
	  "debug", (content) => `<pre>DEBUG&NewLine;${inspect(content)}</pre>`);
  eleventyConfig.addFilter(
	  "sortbydate", sortbydate);
  eleventyConfig.addFilter(
	  "machine_date", machine_date);
  eleventyConfig.addFilter(
	  "human_date", human_date);

  eleventyConfig.addDataExtension(
	  "yml, yaml", c => yaml.load(c));

  return {
    dir: {
      input: 'src'
    }
  }
}
