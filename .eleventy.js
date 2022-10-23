module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/assets/mainstyle.css")
  eleventyConfig.addPassthroughCopy("./src/assets/script.js")
  return {
    dir: {
      input: 'src/*',
      includes: '_includes',
      output: 'dist',
    },
    templateFormats: ['md', 'njk', 'html'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
  };
}