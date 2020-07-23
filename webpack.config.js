const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = (env) => {
  const libraryTarget = env.libraryTarget;
  if (!libraryTarget) {
    throw new Error("--env.libraryTarget=<THING> is required");
  }
  return {
    mode: "production",
    stats: "errors-only",
    output: {
      library: "MyLibrary",
      libraryTarget: libraryTarget,
      filename: `${libraryTarget}.js`,
    },
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: "json",
        reportFilename: `${libraryTarget}_report.json`,
        logLevel: "silent",
        generateStatsFile: true,
        statsFilename: `${libraryTarget}_stats.json`,
      }),
      new BundleAnalyzerPlugin({
        analyzerMode: "static",
        reportFilename: `${libraryTarget}_report.html`,
        logLevel: "silent",
        openAnalyzer: false,
      }),
    ],
  };
};
