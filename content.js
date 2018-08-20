
const withStyle = function(name, props){
    return `import React, { Component } from 'react';
import './${name}.css';

export default class ${name} extends Component {
    render(){
        return(
            <div className='${name}'>
                <h2>Welcome To ${props === true ? `{this.props.title}` : name }</h2>
            </div>
        );
    };
};
    `
}

const withoutStyle = function(name, props) {
    return `import React, { Component } from 'react';

export default class ${name} extends Component {
    render(){
        return(
            <div className='${name}'>
                <h2>Welcome To ${props === true ? `{this.props.title}` : name }</h2>
            </div>
        );
    };
};
    `
}

const createPropsTs = (name) => {
    return `import React, { Component } from 'react';

    interface ${name}Props {
        title: String
    }

    declare class ${name} extends Component<${name}Props> {};

    export default ${name};
    `;
};

const createImport = name => `\t\nexport const ${name} = require('./${name}/${name}').default;`;

module.exports = {
    withStyle, withoutStyle, createImport, createPropsTs
}