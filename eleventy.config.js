const { sortbydate } = require('./lib/sortbydate.cjs');
const { inspect } = require('node:util');
const yaml = require('js-yaml');

module.exports = function(eleventyConfig) {

  eleventyConfig.addFilter(
	  "debug", (content) => `<pre>DEBUG&NewLine;${inspect(content)}</pre>`);
  eleventyConfig.addFilter(
	  "sortbydate", sortbydate);
  eleventyConfig.addFilter(
	  "isoDate", (v) => (new Date(v.toString())).toISOString());
  eleventyConfig.addFilter(
	  "fmtDate", (v) => (new Date(v.toString())).toLocaleString('en-in'));

  eleventyConfig.addDataExtension(
	  "yml, yaml", c => yaml.load(c));

  return {
    dir: {
      input: 'src'
    }
  }
}
