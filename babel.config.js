module.exports = {
  presets: [
    "@babel/preset-env",
    [
      "@babel/preset-react",
      {
        runtime: "automatic", // use to dont import react in file
      },
    ],
  ],
};
