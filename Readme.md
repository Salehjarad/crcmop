## Create React Component CLI [![NPM version](http://img.shields.io/npm/v/crcmop.svg?colorB=red&longCache=true&style=flat-square)](https://www.npmjs.com/package/crcmop)
---

<p align="center">
    <img alt="CRCMOP CLI APP" src="https://image.ibb.co/eFnM2e/crcmop_logo.png" width="300">
</p>

---

### Info: &darr;  
> #### This Will Allow You To Create React Components From CLI When You Use: &darr;  
> * `$ create-react-app` OR any React app folder.
> * crcmop cli will create `index.js` in components folder and export the component you created so you can just import any component you created from components folder: &darr;
> * `import {< here will be all your components >} from './components/';`


### Installation: &darr;  

> * `$ npm install -g crcmop`
> * Add This Command In React App Folder Only.


### Usage: &#9728;  

> * Create component with style &rarr; ` $ crcmop add home --style --type jsx`
> * Create component without style &rarr; ` $ crcmop add home --type jsx`
> * Create multi components with styles &rarr; ` $ crcmop add home,list,item --style --type jsx`
> * Create multi components without styles &rarr; ` $ crcmop add home,list,item --type jsx`
> * Defaults: &rarr; [--style: false] &rarr; [--type: js]


### Options: &#9783;  

```js
    -s, --style        Create style with component [default: false]
    -t, --type <type>  File type [ js | jsx ] [default: js]
    -h, --help         Output usage information
```

---------------

#### Auther:    
&copy; Salehjarad


---

#### Working on more fast way to work with react.