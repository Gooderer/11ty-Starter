module.exports = function(eleventyConfig) {
    eleventyConfig.setNunjucksEnvironmentOptions({
		throwOnUndefined: true,
		autoescape: false, // warning: don’t do this!
	});

    eleventyConfig.addPassthroughCopy('./src/style.css');
    eleventyConfig.addPassthroughCopy('./src/assets');

    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}
