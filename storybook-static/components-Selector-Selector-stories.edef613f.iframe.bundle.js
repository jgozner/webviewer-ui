/*! For license information please see components-Selector-Selector-stories.edef613f.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkwebviewer_ui=self.webpackChunkwebviewer_ui||[]).push([[3823],{"./src/components/Selector/Selector.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Placeholder:()=>Placeholder,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Selector_stories});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),useOnClickOutside=__webpack_require__("./src/hooks/useOnClickOutside.js"),Icon=__webpack_require__("./src/components/Icon/index.js");__webpack_require__("./src/components/Selector/Selector.scss");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var propTypes={className:prop_types_default().string,items:prop_types_default().arrayOf(prop_types_default().string).isRequired,selectedItem:prop_types_default().string,onItemSelected:prop_types_default().func.isRequired,placeHolder:prop_types_default().string,selectedItemStyle:prop_types_default().object},Selector_Selector=function(param){var obj,key,value,className=param.className,_param_items=param.items,items=void 0===_param_items?[]:_param_items,_param_selectedItem=param.selectedItem,selectedItem=void 0===_param_selectedItem?"":_param_selectedItem,onItemSelected=param.onItemSelected,placeHolder=param.placeHolder,selectedItemStyle=param.selectedItemStyle,_useState=_sliced_to_array((0,react.useState)(!1),2),isOpen=_useState[0],setIsOpen=_useState[1],toggleDropdown=function(){setIsOpen((function(prevValue){return!prevValue}))},selectorRef=(0,react.useRef)(null);return(0,useOnClickOutside.A)(selectorRef,(function(){setIsOpen(!1)})),react.createElement("div",{ref:selectorRef,className:classnames_default()((obj={customSelector:!0},key=className,value=!!className,key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj))},react.createElement("button",{className:"customSelector__selectedItem",style:selectedItemStyle,onClick:toggleDropdown},!selectedItem&&placeHolder?placeHolder:selectedItem,react.createElement(Icon.A,{className:"down-arrow",glyph:"icon-chevron-down"})),react.createElement("ul",{className:classnames_default()({open:isOpen})},react.createElement("li",null,react.createElement("button",{className:"customSelector__selectedItem",onClick:toggleDropdown},react.createElement("div",{style:selectedItemStyle},!selectedItem&&placeHolder?placeHolder:selectedItem),react.createElement(Icon.A,{className:"up-arrow",glyph:"icon-chevron-up"}))),items.map((function(value,i){return react.createElement("li",{key:value+i},react.createElement("button",{className:classnames_default()({options:!0,optionSelected:selectedItem===value}),onClick:function(){setIsOpen(!1),onItemSelected(value)}},value))}))))};Selector_Selector.propTypes=propTypes;const components_Selector_Selector=Selector_Selector;function Selector_stories_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function Selector_stories_sliced_to_array(arr,i){return function Selector_stories_array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function Selector_stories_iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function Selector_stories_unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return Selector_stories_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Selector_stories_array_like_to_array(o,minLen)}(arr,i)||function Selector_stories_non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Selector_Selector.__docgenInfo={description:"",methods:[],displayName:"Selector",props:{items:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"string"}},required:!1},selectedItem:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},className:{description:"",type:{name:"string"},required:!1},onItemSelected:{description:"",type:{name:"func"},required:!0},placeHolder:{description:"",type:{name:"string"},required:!1},selectedItemStyle:{description:"",type:{name:"object"},required:!1}}};const Selector_stories={title:"Components/Selector",component:components_Selector_Selector};function Basic(){var items=["ITEM 1","ITEM 2"],_useState=Selector_stories_sliced_to_array((0,react.useState)(items[0]),2),selectedItem=_useState[0],setSelectedItem=_useState[1];return react.createElement("div",null,react.createElement(components_Selector_Selector,{items,selectedItem,onItemSelected:function(item){setSelectedItem(item)},placeHolder:"PLACEHOLDER"}))}function Placeholder(){var _useState=Selector_stories_sliced_to_array((0,react.useState)(),2),selectedItem=_useState[0],setSelectedItem=_useState[1];return react.createElement("div",null,react.createElement(components_Selector_Selector,{items:["ITEM 1","ITEM 2"],selectedItem,onItemSelected:function(item){setSelectedItem(item)},placeHolder:"PLACEHOLDER"}))}Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"function Basic() {\n  const items = ['ITEM 1', 'ITEM 2'];\n  const [selectedItem, setSelectedItem] = useState(items[0]);\n  const placeHolder = 'PLACEHOLDER';\n  const onItemSelected = item => {\n    setSelectedItem(item);\n  };\n  return <div>\n      <Selector items={items} selectedItem={selectedItem} onItemSelected={onItemSelected} placeHolder={placeHolder} />\n    </div>;\n}",...Basic.parameters?.docs?.source}}},Placeholder.parameters={...Placeholder.parameters,docs:{...Placeholder.parameters?.docs,source:{originalSource:"function Placeholder() {\n  const items = ['ITEM 1', 'ITEM 2'];\n  const [selectedItem, setSelectedItem] = useState();\n  const placeHolder = 'PLACEHOLDER';\n  const onItemSelected = item => {\n    setSelectedItem(item);\n  };\n  return <div>\n      <Selector items={items} selectedItem={selectedItem} onItemSelected={onItemSelected} placeHolder={placeHolder} />\n    </div>;\n}",...Placeholder.parameters?.docs?.source}}};const __namedExportsOrder=["Basic","Placeholder"]},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType)if(arg.toString===Object.prototype.toString)for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key);else classes.push(arg.toString())}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js??ruleSet[1].rules[14].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Selector/Selector.scss":(module,exports,__webpack_require__)=>{(exports=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.id,".customSelector{position:relative;height:32px}.customSelector .Icon{width:18px;height:18px}.customSelector .customSelector__selectedItem{width:100%;height:32px;position:relative;background-color:transparent;border:1px solid var(--border);border-radius:var(--border-radius);padding:0 4px 0 8px;color:var(--text-color);font-size:var(--font-size-default);display:flex;flex-direction:row;justify-content:space-between;align-items:center;cursor:pointer}.customSelector .customSelector__selectedItem:hover .Icon{color:var(--primary-button-hover);outline:solid 1px var(--primary-button-hover);border-radius:var(--border-radius)}.customSelector ul{margin:0;list-style-type:none;position:absolute;width:100%;left:0;top:0;text-align:left;letter-spacing:0;display:none;border-radius:var(--border-radius);pointer-events:all;z-index:1000;background-color:var(--component-background);box-shadow:0 0 3px 0 var(--box-shadow);padding-left:0;grid-row-gap:4px;row-gap:4px}.customSelector ul.open{display:flex;flex-direction:column}.customSelector li{display:block;height:32px;position:relative;font-family:var(--font-family);font-style:normal;font-weight:400;font-size:.8rem;padding-left:.5rem}.customSelector li :hover{cursor:pointer}.customSelector li:first-child{display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding:0 4px 0 8px}.customSelector li:first-child button{color:var(--faded-text);background-color:transparent;border:1px solid transparent;padding:0}.customSelector li:first-child:hover .Icon{color:var(--primary-button-hover);outline:solid 1px var(--primary-button-hover);border-radius:4px}.customSelector li .options{border:none;background-color:transparent;padding-right:.65rem;padding-left:.5rem;width:calc(100% + .5rem);text-align:left;display:flex;align-items:center;justify-content:space-between;height:100%;margin-left:-.5rem;z-index:1}.customSelector li:not(:first-child) .options:hover{background-color:var(--dropdown-item-hover);color:var(--dropdown-item-text-hover)}.customSelector li .optionSelected{background-color:var(--dropdown-item-active);color:var(--dropdown-item-text-hover)}",""]),module.exports=exports},"./src/components/Selector/Selector.scss":(module,__unused_webpack_exports,__webpack_require__)=>{var api=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js??ruleSet[1].rules[14].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Selector/Selector.scss");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.id,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./src/components/Icon/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _Icon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Icon/Icon.js");const __WEBPACK_DEFAULT_EXPORT__=_Icon__WEBPACK_IMPORTED_MODULE_0__.A;_Icon__WEBPACK_IMPORTED_MODULE_0__.A.__docgenInfo={description:"",methods:[{name:"updateSvg",docblock:null,modifiers:[],params:[],returns:null},{name:"isInlineSvg",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Icon",props:{className:{description:"",type:{name:"string"},required:!1},color:{description:"",type:{name:"string"},required:!1},glyph:{description:"",type:{name:"string"},required:!0},fillColor:{description:"",type:{name:"string"},required:!1},strokeColor:{description:"",type:{name:"string"},required:!1},disabled:{description:"",type:{name:"bool"},required:!1}}}},"./src/helpers/getRootNode.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _to_consumable_array(arr){return function _array_without_holes(arr){if(Array.isArray(arr))return _array_like_to_array(arr)}(arr)||function _iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr)||function _non_iterable_spread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var rootNode;function findNestedWebComponents(tagName){var root=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document,elements=[];return root.querySelectorAll(tagName).forEach((function(el){return elements.push(el)})),root.querySelectorAll("*").forEach((function(el){var _elements;el.shadowRoot&&(_elements=elements).push.apply(_elements,_to_consumable_array(findNestedWebComponents(tagName,el.shadowRoot)))})),elements}__webpack_require__.d(__webpack_exports__,{Ay:()=>__WEBPACK_DEFAULT_EXPORT__,Iv:()=>getInstanceNode,zd:()=>getInstanceID});var getRootNode=function(){if(!window.isApryseWebViewerWebComponent)return document;if(rootNode)return rootNode;var elementList;if(0===(elementList=document.getElementsByTagName("apryse-webviewer")).length&&(elementList=findNestedWebComponents("apryse-webviewer")),null==elementList?void 0:elementList.length){var _iteratorNormalCompletion=!0,_didIteratorError=!1,_iteratorError=void 0;try{for(var _step,_iterator=elementList[Symbol.iterator]();!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=!0){var foundNode=_step.value.shadowRoot;if(foundNode&&!foundNode.mounted)return foundNode.mounted=!0,rootNode=foundNode}}catch(err){_didIteratorError=!0,_iteratorError=err}finally{try{_iteratorNormalCompletion||null==_iterator.return||_iterator.return()}finally{if(_didIteratorError)throw _iteratorError}}}console.error("Cannot find root node")},getInstanceID=function(){var host=getRootNode().host;return host?host.getAttribute("id"):"default"},getInstanceNode=function(){return window.isApryseWebViewerWebComponent?rootNode?rootNode.host:getRootNode().host:window};const __WEBPACK_DEFAULT_EXPORT__=getRootNode},"./src/hooks/useOnClickOutside.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),helpers_getRootNode__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/helpers/getRootNode.js");function __WEBPACK_DEFAULT_EXPORT__(ref,handler){(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var listener=function(event){ref.current&&!ref.current.contains(event.target)&&handler(event)},browserDocument=document;return window.isApryseWebViewerWebComponent&&(browserDocument=(0,helpers_getRootNode__WEBPACK_IMPORTED_MODULE_1__.Ay)().getElementById("app")),browserDocument.addEventListener("mousedown",listener),browserDocument.addEventListener("touchstart",listener),function(){browserDocument.removeEventListener("mousedown",listener),browserDocument.removeEventListener("touchstart",listener)}}),[ref,handler])}}}]);