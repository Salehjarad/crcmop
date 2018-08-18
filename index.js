#! /usr/bin/env node
const cmd = require("commander");
const { createWithStyle, createWithoutStyle } = require("./create");
const pkg = require("./package.json")
cmd.version(pkg.version).description("[ Create React Components ]")

cmd
  .command('add')
  .usage("crcmop add --name Home --style --type jsx")
  .option('-n, --name <name>', 'Component Name')
  .option('-s, --style', "Create style with component")
  .option('-t, --type <type>', "File type [ js | jsx ]")
  .action(function(options) {
      const { name, style, type } = options;
      let withStyle = style !== undefined ? true : false
      if(style !== undefined) {
        createWithStyle(name, withStyle, type);
      } else {
        createWithoutStyle(name, withStyle, type);
      }
  });

cmd.on('', () => {
  console.log('[Try: crcmop --help]')
})

cmd.parse(process.argv);