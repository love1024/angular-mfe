const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  output: {
    uniqueName: "angular-mfe-remote", // unique name for the remote app
    publicPath: "auto", // From which path or URL to serve dist files, find automatically
  },
  optimization: {
    runtimeChunk: false, // Whether to create a separate file for the webpack runtime
  },
  experiments: {
    outputModule: true, // We want to export files as ES Modules
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "angular-mfe-remote", // Unique name for this remote app
      filename: "remoteEntry.js", // What would be the name for the remote entry file
      exposes: {
        // What to expose
        "./Customer": "./src/app/customer/customer.component.ts",
      },
      remotes: [],
      shared: {
        "@angular/core": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "^17.1.0",
        },
        "@angular/common": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "^17.1.0",
        },
        "@angular/router": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "^17.1.0",
        },
      },
      library: {
        type: "module", // Expose as ES Modules
      },
    }),
  ],
};
