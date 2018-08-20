#! /usr/bin/env node
const cmd = require("commander");
const color = require('chalk');

const { 
  createWithStyle, 
  createWithoutStyle,
  createMultiWithStyle,
  createMultiWithoutStyle
 } = require("./create");
const pkg = require("./package.json")
cmd.version(pkg.version).description("[ Create React Components ]")

function helpAdd() {
  return `

    ${color.yellow('$ crcmop add home ')} : will create Home component.
        OR
    ${color.yellow('$ crcmop add home,header,list,item')} : will create all component you pass.

    ${color.green('option: [--type]')} [js | jsx] [default: js] exp: [ --type jsx ]
    ${color.green('option: [--style]')} will create <component.name>.css file.
    ${color.green('option: [--ptops]')} will create <component.name>.d.ts file.
  `
}

cmd
  .command('add [name]')
  .usage(helpAdd())
  .option('-s, --style', "Create style with component")
  .option('-t, --type <type>', "File type [ js | jsx | tdx ]")
  .option("-p, --props", "This will create [<Component.nam>.d.ts] File To help component props autocomplete")
  .action(function( name, options ) {
      const { style, type, props } = options;
      if(name == undefined || name === null) return console.log(helpAdd())

      let withStyle = style !== undefined ? true : false;
      let wihProps = props !== undefined ? true : false;

      let regx = /(,)/g;

      let oneOrMulti = name.match(regx) ? 'multi' : 'one';

      if(oneOrMulti === 'one') {
        if(withStyle !== false) {
          createWithStyle(name, withStyle, type, props);
        } else {
          createWithoutStyle(name, withStyle, type, props);
        }
      } else if(oneOrMulti === 'multi') {
        if(withStyle !== false) {
          createMultiWithStyle(name, style, type, props);
        } else {
          createMultiWithoutStyle(name, style, type, props);
        }
      } else {
        console.log(helpAdd())
      }
  });

  cmd.on('command:*', function () {
    console.error('Invalid command: %s\nSee --help for a list of available commands.', cmd.args.join(' '));
    process.exit(1);
  });
  

cmd.parse(process.argv);