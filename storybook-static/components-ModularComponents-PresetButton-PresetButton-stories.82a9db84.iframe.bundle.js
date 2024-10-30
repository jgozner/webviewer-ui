(self.webpackChunkwebviewer_ui=self.webpackChunkwebviewer_ui||[]).push([[4590],{"./src/components/ModularComponents/PresetButton/PresetButton.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ContentEditButton:()=>ContentEditButton,CreatePortfolioButton:()=>CreatePortfolioButton,DownloadButton:()=>DownloadButton,FilePickerButton:()=>FilePickerButton,FormFieldEditButton:()=>FormFieldEditButton,FullscreenButton:()=>FullscreenButton,NewDocumentButton:()=>NewDocumentButton,PrintButton:()=>PrintButton,RedoButton:()=>RedoButton,SaveAsButton:()=>SaveAsButton,SettingsButton:()=>SettingsButton,UndoButton:()=>UndoButton,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_redux__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-redux/es/index.js"),_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js"),src_redux_initialState__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/redux/initialState.js"),_PresetButton__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/ModularComponents/PresetButton/PresetButton.js"),src_constants_customizationVariables__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/constants/customizationVariables.js");const __WEBPACK_DEFAULT_EXPORT__={title:"ModularComponents/PresetButton",component:_PresetButton__WEBPACK_IMPORTED_MODULE_3__.A,parameters:{customizableUI:!0}};src_redux_initialState__WEBPACK_IMPORTED_MODULE_2__.A.viewer.activeDocumentViewerKey=1;var store=(0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__.U1)({reducer:function(){return src_redux_initialState__WEBPACK_IMPORTED_MODULE_2__.A}}),prepareButtonStory=function(buttonType){var props={buttonType};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__.Kq,{store},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PresetButton__WEBPACK_IMPORTED_MODULE_3__.A,props))};function UndoButton(){return prepareButtonStory(src_constants_customizationVariables__WEBPACK_IMPORTED_MODULE_4__.dQ.UNDO)}function RedoButton(){return prepareButtonStory(src_constants_customizationVariables__WEBPACK_IMPORTED_MODULE_4__.dQ.REDO)}function NewDocumentButton(){return prepareButtonStory(src_constants_customizationVariables__WEBPACK_IMPORTED_MODULE_4__.dQ.NEW_DOCUMENT)}function FilePickerButton(){return prepareButtonStory(src_constants_customizationVariables__WEBPACK_IMPORTED_MODULE_4__.dQ.FILE_PICKER)}function DownloadButton(){return prepareButtonStory(src_constants_customizationVariables__WEBPACK_IMPORTED_MODULE_4__.dQ.DOWNLOAD)}function FullscreenButton(){return prepareButtonStory(src_constants_customizationVariables__WEBPACK_IMPORTED_MODULE_4__.dQ.FULLSCREEN)}function SaveAsButton(){return prepareButtonStory(src_constants_customizationVariables__WEBPACK_IMPORTED_MODULE_4__.dQ.SAVE_AS)}function PrintButton(){return prepareButtonStory(src_constants_customizationVariables__WEBPACK_IMPORTED_MODULE_4__.dQ.PRINT)}function CreatePortfolioButton(){return prepareButtonStory(src_constants_customizationVariables__WEBPACK_IMPORTED_MODULE_4__.dQ.CREATE_PORTFOLIO)}function SettingsButton(){return prepareButtonStory(src_constants_customizationVariables__WEBPACK_IMPORTED_MODULE_4__.dQ.SETTINGS)}function FormFieldEditButton(){return prepareButtonStory(src_constants_customizationVariables__WEBPACK_IMPORTED_MODULE_4__.dQ.FORM_FIELD_EDIT)}function ContentEditButton(){return prepareButtonStory(src_constants_customizationVariables__WEBPACK_IMPORTED_MODULE_4__.dQ.CONTENT_EDIT)}UndoButton.parameters={...UndoButton.parameters,docs:{...UndoButton.parameters?.docs,source:{originalSource:"function UndoButton() {\n  return prepareButtonStory(PRESET_BUTTON_TYPES.UNDO);\n}",...UndoButton.parameters?.docs?.source}}},RedoButton.parameters={...RedoButton.parameters,docs:{...RedoButton.parameters?.docs,source:{originalSource:"function RedoButton() {\n  return prepareButtonStory(PRESET_BUTTON_TYPES.REDO);\n}",...RedoButton.parameters?.docs?.source}}},NewDocumentButton.parameters={...NewDocumentButton.parameters,docs:{...NewDocumentButton.parameters?.docs,source:{originalSource:"function NewDocumentButton() {\n  return prepareButtonStory(PRESET_BUTTON_TYPES.NEW_DOCUMENT);\n}",...NewDocumentButton.parameters?.docs?.source}}},FilePickerButton.parameters={...FilePickerButton.parameters,docs:{...FilePickerButton.parameters?.docs,source:{originalSource:"function FilePickerButton() {\n  return prepareButtonStory(PRESET_BUTTON_TYPES.FILE_PICKER);\n}",...FilePickerButton.parameters?.docs?.source}}},DownloadButton.parameters={...DownloadButton.parameters,docs:{...DownloadButton.parameters?.docs,source:{originalSource:"function DownloadButton() {\n  return prepareButtonStory(PRESET_BUTTON_TYPES.DOWNLOAD);\n}",...DownloadButton.parameters?.docs?.source}}},FullscreenButton.parameters={...FullscreenButton.parameters,docs:{...FullscreenButton.parameters?.docs,source:{originalSource:"function FullscreenButton() {\n  return prepareButtonStory(PRESET_BUTTON_TYPES.FULLSCREEN);\n}",...FullscreenButton.parameters?.docs?.source}}},SaveAsButton.parameters={...SaveAsButton.parameters,docs:{...SaveAsButton.parameters?.docs,source:{originalSource:"function SaveAsButton() {\n  return prepareButtonStory(PRESET_BUTTON_TYPES.SAVE_AS);\n}",...SaveAsButton.parameters?.docs?.source}}},PrintButton.parameters={...PrintButton.parameters,docs:{...PrintButton.parameters?.docs,source:{originalSource:"function PrintButton() {\n  return prepareButtonStory(PRESET_BUTTON_TYPES.PRINT);\n}",...PrintButton.parameters?.docs?.source}}},CreatePortfolioButton.parameters={...CreatePortfolioButton.parameters,docs:{...CreatePortfolioButton.parameters?.docs,source:{originalSource:"function CreatePortfolioButton() {\n  return prepareButtonStory(PRESET_BUTTON_TYPES.CREATE_PORTFOLIO);\n}",...CreatePortfolioButton.parameters?.docs?.source}}},SettingsButton.parameters={...SettingsButton.parameters,docs:{...SettingsButton.parameters?.docs,source:{originalSource:"function SettingsButton() {\n  return prepareButtonStory(PRESET_BUTTON_TYPES.SETTINGS);\n}",...SettingsButton.parameters?.docs?.source}}},FormFieldEditButton.parameters={...FormFieldEditButton.parameters,docs:{...FormFieldEditButton.parameters?.docs,source:{originalSource:"function FormFieldEditButton() {\n  return prepareButtonStory(PRESET_BUTTON_TYPES.FORM_FIELD_EDIT);\n}",...FormFieldEditButton.parameters?.docs?.source}}},ContentEditButton.parameters={...ContentEditButton.parameters,docs:{...ContentEditButton.parameters?.docs,source:{originalSource:"function ContentEditButton() {\n  return prepareButtonStory(PRESET_BUTTON_TYPES.CONTENT_EDIT);\n}",...ContentEditButton.parameters?.docs?.source}}};const __namedExportsOrder=["UndoButton","RedoButton","NewDocumentButton","FilePickerButton","DownloadButton","FullscreenButton","SaveAsButton","PrintButton","CreatePortfolioButton","SettingsButton","FormFieldEditButton","ContentEditButton"]},"./node_modules/blob-stream/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{var WritableStream=__webpack_require__("?c02f").Writable,util=__webpack_require__("./node_modules/util/util.js"),Blob=__webpack_require__("./node_modules/blob/index.js"),URL=__webpack_require__.g.URL||__webpack_require__.g.webkitURL||__webpack_require__.g.mozURL;function BlobStream(){if(!(this instanceof BlobStream))return new BlobStream;WritableStream.call(this),this._chunks=[],this._blob=null,this.length=0}util.inherits(BlobStream,WritableStream),BlobStream.prototype._write=function(chunk,encoding,callback){chunk instanceof Uint8Array||(chunk=new Uint8Array(chunk)),this.length+=chunk.length,this._chunks.push(chunk),callback()},BlobStream.prototype.toBlob=function(type){return type=type||"application/octet-stream",this._blob||(this._blob=new Blob(this._chunks,{type}),this._chunks=[]),this._blob.type!==type&&(this._blob=new Blob([this._blob],{type})),this._blob},BlobStream.prototype.toBlobURL=function(type){return URL.createObjectURL(this.toBlob(type))},module.exports=BlobStream},"./node_modules/blob/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{var BlobBuilder=__webpack_require__.g.BlobBuilder||__webpack_require__.g.WebKitBlobBuilder||__webpack_require__.g.MSBlobBuilder||__webpack_require__.g.MozBlobBuilder,blobSupported=function(){try{return 2===new Blob(["hi"]).size}catch(e){return!1}}(),blobSupportsArrayBufferView=blobSupported&&function(){try{return 2===new Blob([new Uint8Array([1,2])]).size}catch(e){return!1}}(),blobBuilderSupported=BlobBuilder&&BlobBuilder.prototype.append&&BlobBuilder.prototype.getBlob;function mapArrayBufferViews(ary){for(var i=0;i<ary.length;i++){var chunk=ary[i];if(chunk.buffer instanceof ArrayBuffer){var buf=chunk.buffer;if(chunk.byteLength!==buf.byteLength){var copy=new Uint8Array(chunk.byteLength);copy.set(new Uint8Array(buf,chunk.byteOffset,chunk.byteLength)),buf=copy.buffer}ary[i]=buf}}}function BlobBuilderConstructor(ary,options){options=options||{};var bb=new BlobBuilder;mapArrayBufferViews(ary);for(var i=0;i<ary.length;i++)bb.append(ary[i]);return options.type?bb.getBlob(options.type):bb.getBlob()}function BlobConstructor(ary,options){return mapArrayBufferViews(ary),new Blob(ary,options||{})}module.exports=blobSupported?blobSupportsArrayBufferView?__webpack_require__.g.Blob:BlobConstructor:blobBuilderSupported?BlobBuilderConstructor:void 0},"./node_modules/lodash/_baseRange.js":module=>{var nativeCeil=Math.ceil,nativeMax=Math.max;module.exports=function baseRange(start,end,step,fromRight){for(var index=-1,length=nativeMax(nativeCeil((end-start)/(step||1)),0),result=Array(length);length--;)result[fromRight?length:++index]=start,start+=step;return result}},"./node_modules/lodash/_createRange.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseRange=__webpack_require__("./node_modules/lodash/_baseRange.js"),isIterateeCall=__webpack_require__("./node_modules/lodash/_isIterateeCall.js"),toFinite=__webpack_require__("./node_modules/lodash/toFinite.js");module.exports=function createRange(fromRight){return function(start,end,step){return step&&"number"!=typeof step&&isIterateeCall(start,end,step)&&(end=step=void 0),start=toFinite(start),void 0===end?(end=start,start=0):end=toFinite(end),step=void 0===step?start<end?1:-1:toFinite(step),baseRange(start,end,step,fromRight)}}},"./node_modules/lodash/_isIterateeCall.js":(module,__unused_webpack_exports,__webpack_require__)=>{var eq=__webpack_require__("./node_modules/lodash/eq.js"),isArrayLike=__webpack_require__("./node_modules/lodash/isArrayLike.js"),isIndex=__webpack_require__("./node_modules/lodash/_isIndex.js"),isObject=__webpack_require__("./node_modules/lodash/isObject.js");module.exports=function isIterateeCall(value,index,object){if(!isObject(object))return!1;var type=typeof index;return!!("number"==type?isArrayLike(object)&&isIndex(index,object.length):"string"==type&&index in object)&&eq(object[index],value)}},"./node_modules/lodash/range.js":(module,__unused_webpack_exports,__webpack_require__)=>{var range=__webpack_require__("./node_modules/lodash/_createRange.js")();module.exports=range},"./node_modules/lodash/toFinite.js":(module,__unused_webpack_exports,__webpack_require__)=>{var toNumber=__webpack_require__("./node_modules/lodash/toNumber.js");module.exports=function toFinite(value){return value?Infinity===(value=toNumber(value))||-Infinity===value?17976931348623157e292*(value<0?-1:1):value==value?value:0:0===value?value:0}}}]);