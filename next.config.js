const path = require("path");

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["imdb-api.com", "m.media-amazon.com"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
