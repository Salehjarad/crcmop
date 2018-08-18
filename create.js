const path = require("path");
const fs = require("fs");
const mkdir = require("mkdirp");
const color = require("chalk");
const { withStyle, withoutStyle } = require("./content");
const checkIfReact = require('./checker');

const createWithStyle = (name, style, type) => {
checkIfReact().then((res) => {
  if(!res.react) return console.log('Error Promise');

    var src = "src/components";
    let newName = name.replace(/^\w/, n => n.toUpperCase());
    let newSrc = path.join(src, newName);

    if (fs.existsSync(newSrc)) {
      return console.log(
        `\n${color.red(
          `[ ${color.yellow(newName)} Component already exist in => ]\n"${newSrc}"`
        )}\n`
      );
    }

    if (style === true) {
      if (!fs.existsSync(newSrc)) {
        try {
          mkdir(newSrc, err => {
            if (err) return console.log("Error", err);
            fs.writeFile(
              `${newSrc}/${newName}.${type === "jsx" ? "jsx" : "js"}`,
              withStyle(newName),
              err => {
                if (err) return console.log("Error", err);
                fs.writeFile(`${newSrc}/${newName}.css`, `.${newName}{}`, err => {
                  if (err) return console.log("Error", err);
                  console.log(
                    `\n${color.green(
                      `[ ${color.cyan(newName)} Component Created ]`
                    )}\n`
                  );
                  console.log(color.yellow(`[ src: ${newSrc} ]\n`))
                });
              }
            );
          });
        } catch (e) {
          console.log(e);
        }
      }
    }
  }).catch((e) => {
    console.log(color.red(`\n[ Error: Allowd in react app folder only. ]\n`))
  })
};


const createWithoutStyle = (name, style, type) => {
  checkIfReact().then((res) => {
    if(!res.react) return console.log('Error Promise')

    var src = "src/components";
    let newName = name.replace(/^\w/, n => n.toUpperCase());
    let newSrc = path.join(src, newName);

    if (fs.existsSync(newSrc)) {
      return console.log(
        `\n${color.red(
          `[ ${color.yellow(newName)} Component already exist in => ]\n"${newSrc}"`
        )}\n`
      );
    }

    if (style !== true) {
      if (!fs.existsSync(newSrc)) {
        try {
          mkdir(newSrc, err => {
            if (err) return console.log("Error", err);
            fs.writeFile(
              `${newSrc}/${newName}.${type === "jsx" ? "jsx" : "js"}`,
              withoutStyle(newName),
              err => {
                if (err) return console.log("Error", err);

                console.log(
                  `\n${color.green(
                    `[ ${color.cyan(newName)} Component Created ]`
                  )}\n`
                );
                console.log(color.yellow(`[ src: ${newSrc} ]\n`))
              }
            );
          });
        } catch (e) {
          console.log(e);
        }
      }
    }
  }).catch((e) => {
    console.log(color.red(`\n[ Error: Allowd in react app folder only. ]\n`))
  })
};

module.exports = {
  createWithStyle,
  createWithoutStyle
};
