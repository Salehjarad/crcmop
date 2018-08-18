
var withStyle = function(name){
    return `import React, { Component } from 'react';
import './${name}.css';

export default class ${name} extends Component {
    render(){
        return(
            <div className='${name}'>
                <h2>Welcome To ${name}</h2>
            </div>
        );
    };
};
    `
}

var withoutStyle = function(name) {
    return `import React, { Component } from 'react';

export default class ${name} extends Component {
    render(){
        return(
            <div className='${name}'>
                <h2>Welcome To ${name}</h2>
            </div>
        );
    };
};
    `
}

module.exports = {
    withStyle, withoutStyle
}