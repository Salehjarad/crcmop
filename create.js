const path = require("path");
const fs = require("fs");
const mkdir = require("mkdirp");
const color = require("chalk");
const { withStyle, withoutStyle, createImport, createPropsTs } = require("./content");
const msg = require("./messages");
const checkIfReact = require("./checker");

const withProps = (src, name) => {
  fs.writeFile(src, createPropsTs(name), (err) => {
    if (err) return console.log(err);
  })
};

const createWithStyle = (name, style, type, props) => {
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
                `${newSrc}/${newName}.${type === "jsx" || type === "tsx" ? type : "js" || "js"}`,
                withStyle(newName, props),
                err => {
                  if (err) return console.log("Error", err);
                  fs.writeFile(
                    `${newSrc}/${newName}.css`,
                    `.${newName}{}`,
                    err => {
                      if (err) return console.log("Error", err);
                      fs.appendFile(`${src}/index.js`, createImport(newName), (err) => {
                        if(err) return console.log(err);
                        if(props) {
                          withProps(`${newSrc}/${newName}.d.ts`, newName)
                        }
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

const createWithoutStyle = (name, style, type, props) => {
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
                `${newSrc}/${newName}.${type === "jsx" || type === "tsx" ? type : "js" || "js"}`,
                withoutStyle(newName, props),
                err => {
                  if (err) return console.log("Error", err);
                  fs.appendFile(`${src}/index.js`, createImport(newName), (err) => {
                    if(err) return console.log(err);
                    if(props) {
                      withProps(`${newSrc}/${newName}.d.ts`, newName)
                    }
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

const createMultiWithStyle = (name, style, type, props) => {
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
            msg.exists(newName);
          }

          if (style === true) {
            if (!fs.existsSync(newSrc)) {
              try {
                mkdir(newSrc, err => {
                  if (err) return console.log("Error", err);
                  fs.writeFile(
                    `${newSrc}/${newName}.${
                      type === "jsx" || type === "tsx" ? type : "js" || "js"
                    }`,
                    withStyle(newName, props),
                    err => {
                      if (err) return console.log("Error", err);
                      fs.writeFile(
                        `${newSrc}/${newName}.css`,
                        `.${newName}{}`,
                        err => {
                          if (err) return console.log("Error", err);
                          fs.appendFile(`${src}/index.js`, createImport(newName), (err) => {
                            if(err) return console.log(err);
                            if(props) {
                              withProps(`${newSrc}/${newName}.d.ts`, newName)
                            }
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

const createMultiWithoutStyle = (name, style, type, props) => {
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
            msg.exists(newName);
          }

          if (style !== true) {
            if (!fs.existsSync(newSrc)) {
              try {
                mkdir(newSrc, err => {
                  if (err) return console.log("Error", err);
                  fs.writeFile(
                    `${newSrc}/${newName}.${
                      type === "jsx" || type === "tsx" ? type : "js" || "js"
                    }`,
                    withoutStyle(newName, props),
                    err => {
                      if (err) return console.log("Error", err);
                      fs.appendFile(`${src}/index.js`, createImport(newName), (err) => {
                        if(err) return console.log(err);
                        if(props) {
                          withProps(`${newSrc}/${newName}.d.ts`, newName)
                        }
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
