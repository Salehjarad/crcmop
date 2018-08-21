## React Component CLI [![NPM version](http://img.shields.io/npm/v/crcmop.svg?colorB=red&longCache=true&style=flat-square)](https://www.npmjs.com/package/crcmop)
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


### Installation: :rocket:  

#### If you on mac or linux sys be sure to use `sudo` before `npm` or `yarn`
> * `$ npm install -g crcmop`
> * `$ yarn global add crcmop`


### Usage: :monkey: &#9728;  

> * Create component with style &rarr; ` $ crcmop add home --style --type jsx`
>   * This will create in "src/components"
>       * :open_file_folder: Home
>           * Home.jsx
>           * Home.css

> * Create component without style &rarr; ` $ crcmop add home --type jsx`
>   * This will create in "src/components"
>       * :open_file_folder: Home
>           * Home.jsx

> * Create multi components with styles &rarr; ` $ crcmop add home,list,item --style --type jsx`
>   * This will create in "src/components"
>       * :open_file_folder: Home
>           * Home.css
>           * Home.jsx
>       * :open_file_folder: List
>           * List.css
>           * List.jsx
>       * :open_file_folder: Item
>           * Item.css
>           * Item.jsx

> * Create multi components without styles &rarr; ` $ crcmop add home,list,item --type jsx`
>   * This will create in "src/components"
>       * :open_file_folder: Home
>           * Home.jsx
>       * :open_file_folder: List
>           * List.jsx
>       * :open_file_folder: Item
>           * Item.jsx

> * Create component with autocomplete for props when you call it from another component: &darr;  
>  `$ crcmop add home --style --type jsx --props`
>   * This will create in "src/components"
>       * :open_file_folder: Home
>           * Home.css
>           * Home.d.ts
>           * Home.jsx

> * Options Defaults: &darr;

| Option  | Default |
| ------------- | ------------- |
| `--type` | **js** |
| `--style` | **false** |
| `--props` | **false** |

> * type: `$ crcmop add --help` for more help


### Options: &#9783;  

```js
    -s, --style        Create style with component [default: false]
    -t, --type <type>  File type [ js | jsx | tdx ] [default: js]
    -p, --props        To Create <component.name>.d.ts file for autocomplete props from the component.
    -h, --help         Output usage information
```

---------------

#### Auther:    
&copy; Salehjarad


---

#### Working on more fast way to work with react.