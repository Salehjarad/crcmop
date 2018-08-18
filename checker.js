const spown = require("child_process").spawn;

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
                    return reject('Allowd In React App')
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