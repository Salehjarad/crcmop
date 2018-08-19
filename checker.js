const spown = require("child_process").spawn;
const color = require("chalk");

let cmd = spown('pwd');
let lscmd = process.platform === 'win32' ? 'dir' : 'ls';
const checkIfReactApp = () => {
    return new Promise((resolve, reject) => {
        cmd.stdout.on('data', (data) => {
            let ls = spown(lscmd, {}, data.toString());
            let lsArray = [];
            ls.stdout.on('data', (f) => {
                lsArray = f.toString().split('\n');
                let newF = lsArray.filter(Boolean);
                let isReact = newF.indexOf('src');
                if(isReact === -1 || isReact === undefined) {
                    return reject(`\n${color.red('[ This commands works in react or react-native app folder ]')}\n`)
                } else {
                    resolve({
                        react: true,
                        path: data.toString().replace(/\n/g, '')
                    })
                }
            })
        });
    })
}



module.exports = checkIfReactApp