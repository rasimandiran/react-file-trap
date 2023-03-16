(()=>{"use strict";var e={n:n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},d:(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},o:(e,n)=>Object.prototype.hasOwnProperty.call(e,n),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},n={};e.r(n),e.d(n,{default:()=>a});const t=require("react");var r=e.n(t);function o(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||i(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,n){if(e){if("string"==typeof e)return l(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?l(e,n):void 0}}function l(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}const a=r().forwardRef((function(e,n){var l,a,u=e.allowedExtensions,f=e.handleChange,c=e.handleDrag,s=e.handleDrop,d=e.onValidationError,p=e.fileCount,y=e.maxFileSize,g=e.minFileSize,m=e.browseOnClick,v=e.children,h=(l=(0,t.useState)([]),a=2,function(e){if(Array.isArray(e))return e}(l)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i,l,a=[],u=!0,f=!1;try{if(i=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;u=!1}else for(;!(u=(r=i.call(t)).done)&&(a.push(r.value),a.length!==n);u=!0);}catch(e){f=!0,o=e}finally{try{if(!u&&null!=t.return&&(l=t.return(),Object(l)!==l))return}finally{if(f)throw o}}return a}}(l,a)||i(l,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),b=h[0],S=h[1],w=(0,t.useRef)(null);(0,t.useImperativeHandle)(n,(function(){return{browseFiles:function(){A(null,!0)},resetWrapper:function(){S([])}}})),(0,t.useEffect)((function(){f(b)}),[b,f]);var j=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];"function"==typeof e&&e.apply(void 0,o(n))},O=function(e){if(e=(e=o(e)).filter((function(e){return!b.map((function(e){return e.name})).includes(e.name)})),u){u=u.map((function(e){return e.toLowerCase()}));var n=e.filter((function(e){return!u.includes(e.name.split(".").pop().toLowerCase())}));n.length>0&&j(d,[n,"InvalidFileType"]),e=e.filter((function(e){return!n.includes(e)}))}if(y){y*=1e6;var t=e.filter((function(e){return e.size>y}));t.length>0&&j(d,[t,"FileSizeTooLarge"]),e=e.filter((function(e){return!t.includes(e)}))}if(g){g*=1e6;var r=e.filter((function(e){return e.size<g}));r.length>0&&j(d,[r,"FileSizeTooSmall"]),e=e.filter((function(e){return!r.includes(e)}))}if(p&&p<e.length+b.length){var i=e.slice(p-b.length);i.length>0&&j(d,[i,"FileCountExeeds"]),e=e.filter((function(e){return!i.includes(e)}))}e.length>0&&S([].concat(o(b),o(e)))},C=function(e){p<=b.length||(e.preventDefault(),e.stopPropagation(),j(c,[e.type]))},A=function(e){(m||arguments.length>1&&void 0!==arguments[1]&&arguments[1])&&p>b.length&&w.current.click()};return r().createElement("div",{onClick:A,onDragEnter:C,onDragLeave:C,onDragOver:C,onDrop:function(e){p<=b.length||(e.preventDefault(),e.stopPropagation(),j(s),O(e.dataTransfer.files))}},r().createElement("input",{type:"file",ref:w,style:{display:"none"},onChange:function(e){e.preventDefault(),O(e.target.files)},multiple:p-b.length>1,accept:u.map((function(e){return"."+e.toLowerCase()})).join(",")}),v)}));module.exports=n})();