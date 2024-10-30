(self.webpackChunkwebviewer_ui=self.webpackChunkwebviewer_ui||[]).push([[1109],{"./node_modules/@pdftron/webviewer-react-toolkit/dist/esm/components/Choice/Choice.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{G:()=>Choice});var tslib_es6=__webpack_require__("./node_modules/@pdftron/webviewer-react-toolkit/node_modules/tslib/tslib.es6.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),react=__webpack_require__("./node_modules/react/index.js");var tabObservable=new(function(){function AccessibleFocusObservable(){var _this=this;this._handleFirstTab=function(event){"Tab"===event.key&&(_this._setIsUserTabbing(!0),_this._tabToMouseListener())},this._handleFirstMouse=function(){_this._setIsUserTabbing(!1),_this._mouseToTabListener()},this._subscribers=[],this._isUserTabbing=!1}return Object.defineProperty(AccessibleFocusObservable.prototype,"value",{get:function(){return this._isUserTabbing},enumerable:!1,configurable:!0}),AccessibleFocusObservable.prototype.subscribe=function(subscriber){return 0===this._subscribers.length&&(this._isUserTabbing?this._tabToMouseListener():this._mouseToTabListener()),this._subscribers.includes(subscriber)||this._subscribers.push(subscriber),this._unsubscribe(subscriber)},AccessibleFocusObservable.prototype._unsubscribe=function(subscriber){var _this=this;return function(){_this._subscribers=_this._subscribers.filter((function(s){return s!==subscriber})),0===_this._subscribers.length&&_this._removeAllListeners()}},AccessibleFocusObservable.prototype._setIsUserTabbing=function(isUserTabbing){this._isUserTabbing=isUserTabbing,this._subscribers.forEach((function(subscriber){return subscriber()}))},AccessibleFocusObservable.prototype._tabToMouseListener=function(){window.removeEventListener("keydown",this._handleFirstTab),window.addEventListener("mousedown",this._handleFirstMouse)},AccessibleFocusObservable.prototype._mouseToTabListener=function(){window.removeEventListener("mousedown",this._handleFirstMouse),window.addEventListener("keydown",this._handleFirstTab)},AccessibleFocusObservable.prototype._removeAllListeners=function(){window.removeEventListener("mousedown",this._handleFirstMouse),window.removeEventListener("keydown",this._handleFirstTab)},AccessibleFocusObservable}()),useFocus=__webpack_require__("./node_modules/@pdftron/webviewer-react-toolkit/dist/esm/hooks/useFocus.js"),useID=__webpack_require__("./node_modules/@pdftron/webviewer-react-toolkit/dist/esm/hooks/useID.js"),Icon=__webpack_require__("./node_modules/@pdftron/webviewer-react-toolkit/dist/esm/components/Icon/Icon.js"),Choice=(0,react.forwardRef)((function(_a,ref){var label=_a.label,leftLabel=_a.leftLabel,className=_a.className,children=_a.children,id=_a.id,radio=_a.radio,isSwitch=_a.isSwitch,center=_a.center,disabledLabelChange=_a.disabledLabelChange,onChange=_a.onChange,onFocus=_a.onFocus,onBlur=_a.onBlur,props=(0,tslib_es6.Tt)(_a,["label","leftLabel","className","children","id","radio","isSwitch","center","disabledLabelChange","onChange","onFocus","onBlur"]),inputRef=(0,react.useRef)(null);(0,react.useImperativeHandle)(ref,(function(){return inputRef.current}));var isUserTabbing=function useAccessibleFocus(observable){void 0===observable&&(observable=tabObservable);var _a=(0,react.useState)(observable.value),isUserTabbing=_a[0],setIsUserTabbing=_a[1];return(0,react.useEffect)((function(){return observable.subscribe((function(){return setIsUserTabbing(observable.value)}))}),[observable]),isUserTabbing}(),_b=(0,useFocus.i)(onFocus,onBlur),focused=_b.focused,handleOnFocus=_b.handleOnFocus,handleOnBlur=_b.handleOnBlur,choiceID=(0,useID.B)(id),_c=(0,react.useState)((function(){var _a,_b,_c;return null!==(_c=null!==(_a=props.checked)&&void 0!==_a?_a:null===(_b=inputRef.current)||void 0===_b?void 0:_b.checked)&&void 0!==_c&&_c})),checked=_c[0],setChecked=_c[1];(0,react.useEffect)((function(){void 0!==props.checked&&setChecked(props.checked)}),[props.checked]);(0,react.useEffect)((function(){if(props.name&&radio)return observable.subscribe(props.name,(function(){inputRef.current&&inputRef.current.checked!==checked&&setChecked(inputRef.current.checked)}))}),[checked,props.name,radio]);var choiceClass=classnames_default()("ui__base ui__choice",{"ui__choice--radio":radio,"ui__choice--leftLabel":leftLabel,"ui__choice--checked":checked,"ui__choice--center":center,"ui__choice--disabled":props.disabled},className),inputClass=classnames_default()("ui__choice__input",{"ui__choice__input--switch":isSwitch}),checkClass=isSwitch?classnames_default()("ui__choice__input__switch",{"ui__choice__input__switch--checked":checked,"ui__choice__input__switch--disabled":props.disabled,"ui__choice__input__switch--focus":isUserTabbing&&focused}):classnames_default()("ui__choice__input__check",{"ui__choice__input__check--checked":checked,"ui__choice__input__check--disabled":props.disabled,"ui__choice__input__check--focus":isUserTabbing&&focused}),labelClass=classnames_default()("ui__choice__label",{"ui__choice__label--disabled":props.disabled&&disabledLabelChange}),labelElement=(0,react.useMemo)((function(){if(label)return react.createElement("label",{className:labelClass,htmlFor:choiceID},label)}),[choiceID,label,labelClass]);return react.createElement("span",{className:choiceClass},leftLabel?labelElement:void 0,react.createElement("span",{className:inputClass},isSwitch?react.createElement("div",{className:checkClass},react.createElement("div",{className:"ui__choice__input__toggle"})):react.createElement("div",{className:checkClass},checked&&!radio?react.createElement(Icon.I,{icon:"Check",className:"ui__choice__input__icon"}):void 0),react.createElement("input",(0,tslib_es6.Cl)({},props,{id:choiceID,type:radio?"radio":"checkbox",onChange:function(event){void 0===props.checked&&setChecked(event.target.checked),null==onChange||onChange(event)},ref:inputRef,onFocus:handleOnFocus,onBlur:handleOnBlur}),children)),leftLabel?void 0:labelElement)})),observable=new(function(){function RadioObservable(){this._subscribers=[]}return RadioObservable.prototype.subscribe=function(name,subscriber){return this._trigger(name),this._subscribers.push({name,subscriber}),this._unsubscribe(subscriber)},RadioObservable.prototype._trigger=function(name){this._subscribers.forEach((function(s){name===s.name&&s.subscriber()}))},RadioObservable.prototype._unsubscribe=function(subscriber){var _this=this;return function(){_this._subscribers=_this._subscribers.filter((function(s){return s.subscriber!==subscriber}))}},RadioObservable}())},"./node_modules/@pdftron/webviewer-react-toolkit/dist/esm/hooks/useID.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{B:()=>useID});var react=__webpack_require__("./node_modules/react/index.js"),currentId=0;function getStringId(prefix){return void 0===prefix&&(prefix="id"),prefix+"_"+(currentId++).toString(16)}function useID(id){return(0,react.useMemo)((function(){return id||getStringId("label")}),[id])}},"./src/components/InsertPageModal/InsertUploadedPagePanel/InsertUploadedPagePanel.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{FileLoaded:()=>FileLoaded,FileLoading:()=>FileLoading,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_InsertUploadedPagePanel__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/InsertPageModal/InsertUploadedPagePanel/InsertUploadedPagePanel.js"),_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js"),react_redux__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-redux/es/index.js");__webpack_require__("./src/constants/modal.scss"),__webpack_require__("./src/components/InsertPageModal/InsertPageModal.scss");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}const __WEBPACK_DEFAULT_EXPORT__={title:"Components/InsertPageModal/InsertUploadedPagePanel",component:_InsertUploadedPagePanel__WEBPACK_IMPORTED_MODULE_1__.A,parameters:{customizableUI:!0}};function noop(){}var initialState={viewer:{disabledElements:{},customElementOverrides:{}},featureFlags:{customizableUI:!0}},store=(0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__.U1)({reducer:function(){return initialState}}),fileLoadingProps={sourceDocument:{getPageCount:function(){return 10},getFilename:function(){return"helloDarknessMyOldFriend.pdf"},loadThumbnail:function(pageNumber,callback){},cancelLoadThumbnail:noop,closeModalWarning:noop},clearLoadedFile:noop},FileLoading=function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__.Kq,{store},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"Modal InsertPageModal open"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_InsertUploadedPagePanel__WEBPACK_IMPORTED_MODULE_1__.A,fileLoadingProps)))},mockDocument={getPageCount:function(){return 20},getFilename:function(){return"helloDarknessMyOldFriend.pdf"},loadThumbnail:function(pageNumber,callback){return Promise.resolve(callback({pageNumber,currentSrc:"/assets/images/192_200x300.jpeg"}))},cancelLoadThumbnail:noop},FileLoaded=function(){var _useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),2),selectedThumbnails=_useState[0],setSelectedThumbnails=_useState[1],fileLoadedProps={sourceDocument:mockDocument,selectedThumbnails,onThumbnailSelected:function(pageNumber){void 0===selectedThumbnails[pageNumber]?selectedThumbnails[pageNumber]=!0:selectedThumbnails[pageNumber]=!selectedThumbnails[pageNumber],setSelectedThumbnails(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},selectedThumbnails))},clearLoadedFile:noop,onfileLoadedHandler:noop,loadedDocumentPageCount:10,insertPages:noop,closeModalWarning:noop};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__.Kq,{store},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"Modal InsertPageModal open"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_InsertUploadedPagePanel__WEBPACK_IMPORTED_MODULE_1__.A,fileLoadedProps)))};FileLoading.parameters={...FileLoading.parameters,docs:{...FileLoading.parameters?.docs,source:{originalSource:'() => <Provider store={store}>\n    <div className="Modal InsertPageModal open">\n      <InsertUploadedPagePanel {...fileLoadingProps} />\n    </div>\n  </Provider>',...FileLoading.parameters?.docs?.source}}},FileLoaded.parameters={...FileLoaded.parameters,docs:{...FileLoaded.parameters?.docs,source:{originalSource:'() => {\n  const [selectedThumbnails, setSelectedThumbnails] = useState({});\n  const onThumbnailSelected = pageNumber => {\n    if (selectedThumbnails[pageNumber] === undefined) {\n      selectedThumbnails[pageNumber] = true;\n    } else {\n      selectedThumbnails[pageNumber] = !selectedThumbnails[pageNumber];\n    }\n    setSelectedThumbnails({\n      ...selectedThumbnails\n    });\n  };\n  const fileLoadedProps = {\n    sourceDocument: mockDocument,\n    selectedThumbnails,\n    onThumbnailSelected,\n    clearLoadedFile: noop,\n    onfileLoadedHandler: noop,\n    loadedDocumentPageCount: 10,\n    insertPages: noop,\n    closeModalWarning: noop\n  };\n  return <Provider store={store}>\n      <div className="Modal InsertPageModal open">\n        <InsertUploadedPagePanel {...fileLoadedProps} />\n      </div>\n    </Provider>;\n}',...FileLoaded.parameters?.docs?.source}}};const __namedExportsOrder=["FileLoading","FileLoaded"]},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js??ruleSet[1].rules[14].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Choice/Choice.scss":(module,exports,__webpack_require__)=>{(exports=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.id,".ui__choice__input__icon{top:-6px!important}.ui__icon{align-items:baseline!important}.ui__choice{align-items:center}.ui__choice__input--switch .ui__choice__input__switch{height:14px!important;border-radius:24px!important;background-color:var(--input-switch-default-color)!important;border:none!important}.ui__choice__input--switch .ui__choice__input__switch.ui__choice__input__switch--disabled{opacity:.6;cursor:not-allowed}.ui__choice__input--switch .ui__choice__input__switch.ui__choice__input__switch--checked{background-color:var(--checked-option)!important}.ui__choice__input--switch .ui__choice__input__switch.ui__choice__input__switch--checked .ui__choice__input__toggle{left:12px!important}.ui__choice__input--switch .ui__choice__input__switch--focus{outline:var(--focus-visible-outline)}.ui__choice__input--switch .ui__choice__input__switch .ui__choice__input__toggle{height:10px!important;width:10px!important;background-color:var(--gray-0)!important;left:2px!important}.ui__choice__input--switch input:disabled{cursor:not-allowed!important}",""]),module.exports=exports},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js??ruleSet[1].rules[14].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/PageReplacementModal/PageNumberInput/PageNumberInput.scss":(module,exports,__webpack_require__)=>{(exports=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.id,".PageNumberInput{cursor:default}.PageNumberInput .input-wrapper{position:relative;display:flex;align-items:center}.PageNumberInput .input-wrapper .Icon{position:absolute;right:8px;color:var(--error-border-color)}.PageNumberInput .page-number-input{padding:6px!important;width:108px;height:32px}.PageNumberInput .page-number-input.page-number-input--error{padding-right:30px;border-color:var(--error-border-color)!important}.PageNumberInput .page-number-input::-moz-placeholder{color:var(--gray-6)}.PageNumberInput .page-number-input::placeholder{color:var(--gray-6)}.PageNumberInput .page-number-input::-moz-placeholder.error{border-color:var(--error-text-color)}.PageNumberInput .page-number-input::placeholder.error{border-color:var(--error-text-color)}.PageNumberInput .page-number-error{color:var(--error-text-color);margin-top:8px;position:absolute;width:100%}",""]),module.exports=exports},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js??ruleSet[1].rules[14].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/constants/modal.scss":(module,exports,__webpack_require__)=>{(exports=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.id,":host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}",""]),exports.locals={LEFT_HEADER_WIDTH:"41px",RIGHT_HEADER_WIDTH:"41px"},module.exports=exports},"./src/components/Choice/Choice.scss":(module,__unused_webpack_exports,__webpack_require__)=>{var api=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js??ruleSet[1].rules[14].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/Choice/Choice.scss");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.id,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./src/components/PageReplacementModal/PageNumberInput/PageNumberInput.scss":(module,__unused_webpack_exports,__webpack_require__)=>{var api=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js??ruleSet[1].rules[14].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/components/PageReplacementModal/PageNumberInput/PageNumberInput.scss");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.id,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./src/constants/modal.scss":(module,__unused_webpack_exports,__webpack_require__)=>{var api=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js??ruleSet[1].rules[14].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/constants/modal.scss");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.id,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./src/components/Choice/Choice.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _pdftron_webviewer_react_toolkit__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@pdftron/webviewer-react-toolkit/dist/esm/components/Choice/Choice.js"),prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_redux__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-redux/es/index.js"),selectors__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/redux/selectors/index.js");__webpack_require__("./src/components/Choice/Choice.scss");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var propTypes={dataElement:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string},Choice=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_param,ref){var dataElement=_param.dataElement,props=_object_without_properties(_param,["dataElement"]);return(0,react_redux__WEBPACK_IMPORTED_MODULE_1__.d4)((function(state){return!!dataElement&&selectors__WEBPACK_IMPORTED_MODULE_2__.A.isElementDisabled(state,dataElement)}))?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pdftron_webviewer_react_toolkit__WEBPACK_IMPORTED_MODULE_5__.G,_object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},props),{ref,center:!0}))}));Choice.displayName="Choice",Choice.propTypes=propTypes;const __WEBPACK_DEFAULT_EXPORT__=Choice;Choice.__docgenInfo={description:"",methods:[],displayName:"Choice",props:{dataElement:{description:"",type:{name:"string"},required:!1}}}},"./src/components/PageReplacementModal/PageNumberInput/PageNumberInput.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),helpers_getPageArrayFromString__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/helpers/getPageArrayFromString.js"),components_Icon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Icon/index.js");__webpack_require__("./src/components/PageReplacementModal/PageNumberInput/PageNumberInput.scss");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var propTypes={id:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,selectedPageNumbers:prop_types__WEBPACK_IMPORTED_MODULE_5___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_5___default().number),pageCount:prop_types__WEBPACK_IMPORTED_MODULE_5___default().number,placeholder:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,pageNumberError:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,onBlurHandler:prop_types__WEBPACK_IMPORTED_MODULE_5___default().func,onError:prop_types__WEBPACK_IMPORTED_MODULE_5___default().func,onSelectedPageNumbersChange:prop_types__WEBPACK_IMPORTED_MODULE_5___default().func,customPageLabels:prop_types__WEBPACK_IMPORTED_MODULE_5___default().array,enablePageLabels:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool},noop=function(){};function PageNumberInput(param){var id=param.id,selectedPageNumbers=param.selectedPageNumbers,pageCount=param.pageCount,_param_enablePageLabels=param.enablePageLabels,enablePageLabels=void 0!==_param_enablePageLabels&&_param_enablePageLabels,_param_customPageLabels=param.customPageLabels,customPageLabels=void 0===_param_customPageLabels?null:_param_customPageLabels,placeholder=param.placeholder,pageNumberError=param.pageNumberError,onSelectedPageNumbersChange=param.onSelectedPageNumbersChange,_param_onError=param.onError,onError=void 0===_param_onError?noop:_param_onError,_param_onBlurHandler=param.onBlurHandler,onBlurHandler=void 0===_param_onBlurHandler?noop:_param_onBlurHandler,pageLabels=Array.from({length:pageCount},(function(_,i){return(i+1).toString()})),_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),2),pageString=_useState[0],setPageString=_useState[1],_useState1=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),2),hasError=_useState1[0],setHasError=_useState1[1];(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){selectedPageNumbers&&setPageString(getPageString(selectedPageNumbers))}),[selectedPageNumbers]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){setHasError(!!pageNumberError)}),[pageNumberError]);var getPageString=function(selectedPageArray){for(var pagesToPrint="",sortedPages=selectedPageArray.sort((function(a,b){return a-b})),prevIndex=null,i=0;sortedPages.length>i;i++)sortedPages[i+1]===sortedPages[i]+1?prevIndex=null!==prevIndex?prevIndex:sortedPages[i]:null!==prevIndex?(pagesToPrint="".concat(pagesToPrint).concat(prevIndex,"-").concat(sortedPages[i],", "),prevIndex=null):pagesToPrint="".concat(pagesToPrint).concat(sortedPages[i],", ");return pagesToPrint.slice(0,-2)};return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"PageNumberInput"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"input-wrapper"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()({"page-number-input":!0,"page-number-input--error":hasError}),id,type:"text",onChange:function(e){var inputValue=e.target.value,lastChar=inputValue[inputValue.length-1];if(","!==lastChar&&"-"!==lastChar){setPageString(inputValue),enablePageLabels&&customPageLabels&&(pageLabels=customPageLabels);var selectedPagesString=e.target.value.replace(/ /g,""),pageNumbersArray=selectedPagesString?(0,helpers_getPageArrayFromString__WEBPACK_IMPORTED_MODULE_2__.A)(selectedPagesString,pageLabels,pageCount,onError):[];onSelectedPageNumbersChange&&onSelectedPageNumbersChange(pageNumbersArray)}else setPageString(inputValue)},onBlur:function(e){enablePageLabels&&customPageLabels&&(pageLabels=customPageLabels);var selectedPagesString=e.target.value.replace(/ /g,""),pageNumbersArray=selectedPagesString?(0,helpers_getPageArrayFromString__WEBPACK_IMPORTED_MODULE_2__.A)(selectedPagesString,pageLabels,pageCount,onError):[],pageNumbersString=getPageString(pageNumbersArray);setPageString(pageNumbersString),onBlurHandler&&onBlurHandler(pageNumbersArray)},value:pageString,placeholder,"aria-describedby":hasError?"PageNumberInputError":void 0}),hasError&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_Icon__WEBPACK_IMPORTED_MODULE_3__.A,{glyph:"icon-alert"})),hasError&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{id:"PageNumberInputError",className:"page-number-error"},pageNumberError))}PageNumberInput.propTypes=propTypes;const __WEBPACK_DEFAULT_EXPORT__=PageNumberInput;PageNumberInput.__docgenInfo={description:"",methods:[],displayName:"PageNumberInput",props:{enablePageLabels:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},customPageLabels:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"array"},required:!1},onError:{defaultValue:{value:"() => { }",computed:!1},description:"",type:{name:"func"},required:!1},onBlurHandler:{defaultValue:{value:"() => { }",computed:!1},description:"",type:{name:"func"},required:!1},id:{description:"",type:{name:"string"},required:!1},selectedPageNumbers:{description:"",type:{name:"arrayOf",value:{name:"number"}},required:!1},pageCount:{description:"",type:{name:"number"},required:!1},placeholder:{description:"",type:{name:"string"},required:!1},pageNumberError:{description:"",type:{name:"string"},required:!1},onSelectedPageNumbersChange:{description:"",type:{name:"func"},required:!1}}}},"./src/components/PageReplacementModal/PageNumberInput/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _PageNumberInput__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/PageReplacementModal/PageNumberInput/PageNumberInput.js");const __WEBPACK_DEFAULT_EXPORT__=_PageNumberInput__WEBPACK_IMPORTED_MODULE_0__.A;_PageNumberInput__WEBPACK_IMPORTED_MODULE_0__.A.__docgenInfo={description:"",methods:[],displayName:"PageNumberInput",props:{enablePageLabels:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},customPageLabels:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"array"},required:!1},onError:{defaultValue:{value:"() => { }",computed:!1},description:"",type:{name:"func"},required:!1},onBlurHandler:{defaultValue:{value:"() => { }",computed:!1},description:"",type:{name:"func"},required:!1},id:{description:"",type:{name:"string"},required:!1},selectedPageNumbers:{description:"",type:{name:"arrayOf",value:{name:"number"}},required:!1},pageCount:{description:"",type:{name:"number"},required:!1},placeholder:{description:"",type:{name:"string"},required:!1},pageNumberError:{description:"",type:{name:"string"},required:!1},onSelectedPageNumbersChange:{description:"",type:{name:"func"},required:!1}}}},"./src/helpers/getPageArrayFromString.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/core/index.js");function __WEBPACK_DEFAULT_EXPORT__(customInput,pageLabels){var totalPages=arguments.length>2&&void 0!==arguments[2]?arguments[2]:core__WEBPACK_IMPORTED_MODULE_0__.A.getTotalPages(),onError=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){},pagesToPrint=[];if(!customInput){for(var i=1;i<=totalPages;i++)pagesToPrint.push(i);return pagesToPrint}return customInput.split(",").forEach((function(pageGroup){var range=pageGroup.split("-"),isSinglePage=1===range.length,isRangeOfPages=2===range.length;if(isSinglePage){var page=getPageNumber(range[0],pageLabels,totalPages,onError);pagesToPrint.push(page)}else isRangeOfPages&&addRangeOfPagesTo(pagesToPrint,range,pageLabels,totalPages,onError)})),pagesToPrint.filter((function(pageNumber,index,pagesToPrint){return pagesToPrint.indexOf(pageNumber)===index&&(pageNumber>0&&pageNumber<=totalPages)})).sort((function(a,b){return a-b}))}var addRangeOfPagesTo=function(pagesToPrint,range,pageLabels,totalPages,onError){var end,start=getPageNumber(range[0],pageLabels,totalPages,onError);end=""===range[1]?core__WEBPACK_IMPORTED_MODULE_0__.A.getTotalPages():getPageNumber(range[1],pageLabels,totalPages,onError);for(var i=start;i<=end;i++)pagesToPrint.push(i)},getPageNumber=function(character,pageLabels,totalPages,onError){var pageNumber,pageIndex=null==pageLabels?void 0:pageLabels.indexOf(character);return-1===pageIndex&&!isNaN(character)&&+character>0&&+character<=totalPages?+character:(-1===pageIndex?(onError&&onError(character),console.warn("".concat(character," is not a valid page label"))):pageNumber=pageIndex+1,pageNumber)}}}]);