const yaml = require('js-yaml');

module.exports = function(eleventyConfig) {

  eleventyConfig.addDataExtension("yml, yaml", c => yaml.load(c));

  return {
    dir: {
      input: 'src'
    }
  }
}
