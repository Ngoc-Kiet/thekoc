const report = require("multiple-cucumber-html-reporter");
report.generate({
  jsonDir: "cypress/jsonlogs/log.json", // ** Path of .json file **//
  reportPath: "./reports/cucumber-htmlreport.html",
  metadata: {
    browser: {
      name: "chrome",
      version: "125",
    },
    device: "Local test machine",
    platform: {
      name: "Windows",
      version: "11",
    },
  },
});
