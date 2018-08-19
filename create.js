const path = require("path");
const fs = require("fs");
const mkdir = require("mkdirp");
const color = require("chalk");
const { withStyle, withoutStyle, createImport } = require("./content");
const msg = require("./messages");
const checkIfReact = require("./checker");

const createWithStyle = (name, style, type) => {
  checkIfReact()
    .then(res => {
      if (!res.react)
        return console.log(`${color.yellow("[ Type: crcmop add --help ]")}`);

      var src = "src/components";
      let newName = name.replace(/^\w/, n => n.toUpperCase());
      let newSrc = path.join(src, newName);

      if (fs.existsSync(newSrc)) {
        return msg.exists(newName);
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
                  fs.writeFile(
                    `${newSrc}/${newName}.css`,
                    `.${newName}{}`,
                    err => {
                      if (err) return console.log("Error", err);
                      fs.appendFile(`${src}/index.js`, createImport(newName), (err) => {
                        if(err) return console.log(err);
                        msg.success(newName);
                      });
                    }
                  );
                }
              );
            });
          } catch (e) {
            throw Error(e);
          }
        }
      }
    })
    .catch(e => {
      throw Error(e);
    });
};

const createWithoutStyle = (name, style, type) => {
  checkIfReact()
    .then(res => {
      if (!res.react)
        return console.log(`${color.yellow("[ Type: crcmop add --help ]")}`);

      var src = "src/components";
      let newName = name.replace(/^\w/, n => n.toUpperCase());
      let newSrc = path.join(src, newName);

      if (fs.existsSync(newSrc)) {
        return msg.exists(newName);
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
                  fs.appendFile(`${src}/index.js`, createImport(newName), (err) => {
                    if(err) return console.log(err);
                    msg.success(newName);
                  });
                }
              );
            });
          } catch (e) {
            throw Error(e);
          }
        }
      }
    })
    .catch(e => {
      throw Error(e);
    });
};

const createMultiWithStyle = (name, style, type) => {
  checkIfReact()
    .then(res => {
      if (!res.react)
        return console.log(`${color.yellow("[ Type: crcmop add --help ]")}`);
      let newArray = name.split(",");
      let src = "src/components";

      let filterd = newArray.filter(item => {
        return /\S/.test(item);
      });

      if (filterd.length > 1) {
        for (let i = 0; i < filterd.length; i++) {
          let newName = newArray[i].trim().replace(/^\w/, n => n.toUpperCase());
          let newSrc = path.join(src, newName);

          if (fs.existsSync(newSrc)) {
            return msg.exists(newName);
          }

          if (style === true) {
            if (!fs.existsSync(newSrc)) {
              try {
                mkdir(newSrc, err => {
                  if (err) return console.log("Error", err);
                  fs.writeFile(
                    `${newSrc}/${newName}.${
                      type === "jsx" ? "jsx" : "js" || "js"
                    }`,
                    withStyle(newName),
                    err => {
                      if (err) return console.log("Error", err);
                      fs.writeFile(
                        `${newSrc}/${newName}.css`,
                        `.${newName}{}`,
                        err => {
                          if (err) return console.log("Error", err);
                          fs.appendFile(`${src}/index.js`, createImport(newName), (err) => {
                            if(err) return console.log(err);
                            msg.success(newName);
                          });
                        }
                      );
                    }
                  );
                });
              } catch (e) {
                throw Error(e);
              }
            }
          }
        }
      } else {
        console.log(`${color.yellow("[ Type: crcmop add --help ]")}`);
      }
    })
    .catch(e => {
      throw Error(e);
    });
};

const createMultiWithoutStyle = (name, style, type) => {
  checkIfReact()
    .then(res => {
      if (!res.react)
        return console.log(`${color.yellow("[ Type: crcmop add --help ]")}`);

      let newArray = name.split(",");
      let src = "src/components";

      let filterd = newArray.filter(item => {
        return /\S/.test(item);
      });

      if (filterd.length > 1) {
        for (let i = 0; i < filterd.length; i++) {
          let newName = newArray[i].trim().replace(/^\w/, n => n.toUpperCase());
          let newSrc = path.join(src, newName);

          if (fs.existsSync(newSrc)) {
            return msg.exists(newName);
          }

          if (style !== true) {
            if (!fs.existsSync(newSrc)) {
              try {
                mkdir(newSrc, err => {
                  if (err) return console.log("Error", err);
                  fs.writeFile(
                    `${newSrc}/${newName}.${
                      type === "jsx" ? "jsx" : "js" || "js"
                    }`,
                    withoutStyle(newName),
                    err => {
                      if (err) return console.log("Error", err);
                      fs.appendFile(`${src}/index.js`, createImport(newName), (err) => {
                        if(err) return console.log(err);
                        msg.success(newName);
                      });
                    }
                  );
                });
              } catch (e) {
                throw Error(e);
              }
            }
          }
        }
      } else {
        console.log(`${color.yellow("[ Type: crcmop add --help ]")}`);
      }
    })
    .catch(e => {
      throw Error(e);
    });
};

module.exports = {
  createWithStyle,
  createWithoutStyle,
  createMultiWithStyle,
  createMultiWithoutStyle
};
