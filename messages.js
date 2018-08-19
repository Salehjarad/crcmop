const color = require("chalk");

module.exports = {
    err: err => console.log(color.red(`\n${err}\n`)),
    success: name => console.log(`\n${color.green('create')} ${color.gray(name)}\n`),
    exists: name => console.log(`\n${color.cyan(name)} ${color.gray('component already exists')}\n`)
}