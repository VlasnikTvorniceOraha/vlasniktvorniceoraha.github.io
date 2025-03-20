const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(syntaxHighlight);

    eleventyConfig.addFilter("uppercase", function (value) {
        return value.toUpperCase();
    });

    eleventyConfig.addPassthroughCopy("source/css");
    eleventyConfig.addPassthroughCopy("source/js");
    eleventyConfig.addPassthroughCopy("source/images");
    eleventyConfig.addPassthroughCopy("source/projectMedia");
    eleventyConfig.addPassthroughCopy("node_modules/flickity/dist");
    eleventyConfig.addPassthroughCopy("node_modules/leaflet/dist");

    eleventyConfig.addCollection("sortedProjects", function (collection) {
        return collection.getFilteredByTag("project").sort((a, b) => {
            return a.data.priority - b.data.priority; // Low to high
        });
    });

    return {
        dir: {
          input: "source",    // Source files
          output: "_site",  // Output folder
          includes: "_includes",  // Template includes folder
          data: "_data",   // Global data folder
        },
    };
};

