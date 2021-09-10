(self.webpackChunk_bbon_formatter_example=self.webpackChunk_bbon_formatter_example||[]).push([[804],{804:(e,t,n)=>{"use strict";n.r(t),n.d(t,{Home:()=>c});var r=n(294),i=n(405),l=function(e){this.name="ValueTooHugeError",this.message=null!=e?e:"The value is too huge to handle"},u=function(e){this.name="ValueInvalidError",this.message=null!=e?e:"The value is invalid."},o=function(){function e(){}return e.prototype.numberWithDelimiter=function(e,t){void 0===t&&(t=",");var n="",r="";if("number"==typeof e&&(n=e.toString()),"string"==typeof e&&(n=e),n.indexOf(".")>=0){var i=n.split(".");i.length>1&&(n=i[0],r=i[1])}return(n=n.replace(/\B(?=(\d{3})+(?!\d))/g,t))+(r?"."+r:"")},e.prototype.NumberWithDelimiter=function(e,t){return void 0===t&&(t=","),this.numberWithDelimiter(e,t)},e.prototype.fileSize=function(e,t,n){var r=this.ensureNumberValue(e);if(Number.MAX_VALUE<r)throw new l;var i=null!=n?n:["Bytes","KB","MB","GB","TB","PB"],u=1024,o=0,a=r;if(a<u)return this.toFomattedFileSize(Math.floor(a).toString(),i[this.min(o,i.length-1)],t);do{a/=u,o++}while(a>u&&o<i.length-1);return this.toFomattedFileSize(Math.ceil(a)>a?a.toFixed(2):a.toFixed(0),i[this.min(o,i.length-1)],t)},e.prototype.toFomattedFileSize=function(e,t,n){return("function"==typeof n?n(e):e)+" "+t},e.prototype.ensureNumberValue=function(e){if(void 0===e)return 0;if("string"==typeof e){var t=parseFloat(e);if(Number.isNaN(t))throw new u;return t}return e},e.prototype.min=function(e,t){return e>t?t:e},e}();function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const m=function(){var e,t,n=new o,i=(e=(0,r.useState)(""),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,l=[],u=!0,o=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);u=!0);}catch(e){o=!0,i=e}finally{try{u||null==n.return||n.return()}finally{if(o)throw i}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=i[0],u=i[1],m=(0,r.useMemo)((function(){var e=parseInt(l,10);if(!Number.isNaN(e))return e}),[l]);return r.createElement("div",null,r.createElement("div",null,r.createElement("input",{type:"number",onChange:function(e){var t=e.currentTarget.value,n=parseInt(t,10);t.length<14&&(t||u((function(e){return""})),Number.isNaN(n)||u((function(e){return t})))},value:l,maxLength:13})),r.createElement("div",null,r.createElement("dl",null,r.createElement("dt",null,"Format:"),r.createElement("dd",null,void 0===m?"Value is not number":n.numberWithDelimiter(m)),r.createElement("dt",null,"File size:"),r.createElement("dd",null,void 0===m?"Value is not number":n.fileSize(m,n.numberWithDelimiter)))))};var c=function(){return r.createElement(r.Fragment,null,r.createElement(i.q,null,r.createElement("title",null,"Home")),r.createElement("div",null,r.createElement("h1",null,"Formatter"),r.createElement(m,null)))}}}]);