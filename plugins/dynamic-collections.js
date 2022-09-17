module.exports = (eleventyConfig, pluginConfig = {}) => {
  // HACK: Return the original `TemplateCollection` object.
  eleventyConfig.addCollection("dynamic", (collectionApi) => collectionApi);

  // Ref: https://www.11ty.dev/docs/collections/#advanced-custom-filtering-and-sorting
  eleventyConfig.addFilter("getAll", function (collectionApi) {
    return [...collectionApi.getAll()];
  });
  eleventyConfig.addFilter("getAllSorted", function (collectionApi) {
    return [...collectionApi.getAllSorted()];
  });
  eleventyConfig.addFilter("getFilteredByTag", function (collectionApi, tagName) {
    return [...collectionApi.getFilteredByTag(tagName)];
  });
  eleventyConfig.addFilter("getFilteredByTags", function (collectionApi, ...tagNames) {
    return [...collectionApi.getFilteredByTags(...tagNames)];
  });
  eleventyConfig.addFilter("getFilteredByGlob", function (collectionApi, ...globs) {
    return [...collectionApi.getFilteredByGlob(globs)];
  });
};
