module.exports=function(e){var t={};function s(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,s),r.l=!0,r.exports}return s.m=e,s.c=t,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=0)}([function(e,t,s){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s])};return function(t,s){function n(){this.constructor=t}e(t,s),t.prototype=null===s?Object.create(s):(n.prototype=s.prototype,new n)}}(),r=this&&this.__assign||Object.assign||function(e){for(var t,s=1,n=arguments.length;s<n;s++)for(var r in t=arguments[s])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},o=this&&this.__awaiter||function(e,t,s,n){return new(s||(s=Promise))(function(r,o){function i(e){try{u(n.next(e))}catch(e){o(e)}}function a(e){try{u(n.throw(e))}catch(e){o(e)}}function u(e){e.done?r(e.value):new s(function(t){t(e.value)}).then(i,a)}u((n=n.apply(e,t||[])).next())})},i=this&&this.__generator||function(e,t){var s,n,r,o,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(s)throw new TypeError("Generator is already executing.");for(;i;)try{if(s=1,n&&(r=2&o[0]?n.return:o[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,o[1])).done)return r;switch(n=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,n=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(r=(r=i.trys).length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){i.label=o[1];break}if(6===o[0]&&i.label<r[1]){i.label=r[1],r=o;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(o);break}r[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],n=0}finally{s=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}};Object.defineProperty(t,"__esModule",{value:!0});var a=s(1),u=s(2),c=s(3),l=s(4),p=s(6),d=function(e){function t(t){var s=e.call(this,t)||this;return s.onAutoCompleteSelect=function(e){return o(s,void 0,void 0,function(){var t,s,n,r,o,a,u,c,l,p,d,f,g;return i(this,function(i){switch(i.label){case 0:if(t=this.props,s=t.useMoreAccuratePostalCode,n=void 0!==s&&s,r=t.onError,o=void 0===r?function(){return null}:r,a=t.onConfirm,u=void 0===a?function(){return null}:a,c=this.formattedPredictionsMap[e],void 0===(l=this.predictions.find(function(e){return e.place_id===c})))return[3,6];i.label=1;case 1:return i.trys.push([1,5,,6]),[4,this.getPlaceDetails(l)];case 2:return p=i.sent(),this.hasPartialPostalCode(p.address_components)&&n?[4,this.getReverseGeocodeData(p)]:[3,4];case 3:d=i.sent(),p.address_components=p.address_components.filter(function(e){return!e.types.includes("postal_code")}),p.address_components=p.address_components.concat(d.address_components.filter(function(e){return e.types.includes("postal_code")})),i.label=4;case 4:return["fl","rm"].includes(this.unitDesignator)&&""!==this.unitNumber?(f={fl:"floor",rm:"room"},p.address_components.push({long_name:this.unitNumber,short_name:this.unitNumber,types:[f[this.unitDesignator]]})):(""!==this.unitNumber&&p.address_components.push({long_name:this.unitNumber,short_name:this.unitNumber,types:["unit_number"]}),""!==this.unitDesignator&&p.address_components.push({long_name:this.unitDesignator,short_name:this.unitDesignator,types:["unit_designator"]})),this.hasPlaceSelected=!0,this.placesSessionToken=new google.maps.places.AutocompleteSessionToken,u(p),[3,6];case 5:return g=i.sent(),o(g),[3,6];case 6:return[2]}})})},s.state={apiLoaded:!1},s.formattedPredictionsMap={},s.predictions=[],s.unitDesignator="",s.unitNumber="",s.currentStatusMessage="",s.onApiLoad=s.onApiLoad.bind(s),s.getSuggestions=s.getSuggestions.bind(s),s.getNoResultsMessage=s.getNoResultsMessage.bind(s),s.getStatusResultsMessage=s.getStatusResultsMessage.bind(s),s.getStatusSelectedOptionMessage=s.getStatusSelectedOptionMessage.bind(s),s.getStatusNoResultsMessage=s.getStatusNoResultsMessage.bind(s),s}return n(t,e),t.prototype.onApiLoad=function(){this.setState(function(){return{apiLoaded:!0}}),this.autocompleteService=new google.maps.places.AutocompleteService,this.geocoderService=new google.maps.Geocoder,this.placesService=new google.maps.places.PlacesService(document.createElement("div")),this.placesSessionToken=new google.maps.places.AutocompleteSessionToken},t.prototype.getNoResultsMessage=function(){var e=this.props.t;return(void 0===e?l.translate:e)("addressAutoComplete.noResults")},t.prototype.getStatusSelectedOptionMessage=function(e){var t=this.props.t;return(void 0===t?l.translate:t)("addressAutoComplete.statusSelectedOption",{option:e})},t.prototype.getStatusNoResultsMessage=function(){var e=this.props.t,t=(void 0===e?l.translate:e)("addressAutoComplete.statusNoResults");return this.currentStatusMessage===t?"":(this.currentStatusMessage=t,t)},t.prototype.getStatusResultsMessage=function(e,t){var s=this.props.t,n=void 0===s?l.translate:s;if(t)return"";var r=n("addressAutoComplete.statusResults",{smart_count:e});return this.currentStatusMessage===r?"":(this.currentStatusMessage=r,r)},t.prototype.getSuggestions=function(e,t){var s=this,n=this.props,o=n.googlePlacesOptions,i=void 0===o?{}:o,a=n.minLength,u=void 0===a?4:a,c=n.onClear,l=void 0===c?function(){return null}:c,d=n.unitDesignators,f=p.parseUnitNumber(e,d),g=f.civicAddress,m=f.unitDesignator,v=f.unitNumber;if(g.length<u)t([]);else{var h=r({},i,{input:g,sessionToken:this.placesSessionToken});this.autocompleteService&&this.autocompleteService.getPlacePredictions(h,function(e,n){if(n===google.maps.places.PlacesServiceStatus.OK){s.predictions=e,s.unitNumber=v,s.unitDesignator=m,s.formattedPredictionsMap=e.reduce(function(e,t){var n,o=s.formatPrediction(t.description,m,v);return r({},e,((n={})[o]=t.place_id,n))},{});var o=Object.keys(s.formattedPredictionsMap);t(o)}else t([])}),this.hasPlaceSelected&&(this.hasPlaceSelected=!1,l())}},t.prototype.render=function(){var e=this.props,t=e.autoselect,s=void 0!==t&&t,n=e.googlePlacesApiKey,r=e.id,o=e.minLength,i=void 0===o?4:o,l=e.required,p=void 0!==l&&l,d=this.state.apiLoaded,f="https://maps.googleapis.com/maps/api/js?key="+encodeURIComponent(n)+"&libraries=places";return a.createElement("div",{"aria-live":"polite",style:{visibility:d?"visible":"hidden"}},a.createElement(u,{url:f,onLoad:this.onApiLoad}),a.createElement(c.default,{autoselect:s,id:r,source:this.getSuggestions,minLength:i,required:p,displayMenu:"overlay",tNoResults:this.getNoResultsMessage,tStatusSelectedOption:this.getStatusSelectedOptionMessage,tStatusNoResults:this.getStatusNoResultsMessage,tStatusResults:this.getStatusResultsMessage,onConfirm:this.onAutoCompleteSelect}))},t.prototype.formatPrediction=function(e,t,s){if(""!==t){var n=t+" "+s;return e.replace(/,/," "+n+",")}return""!==s?s+"-"+e:e},t.prototype.hasPartialPostalCode=function(e){return void 0!==e.find(function(e){return e.types.includes("postal_code_prefix")})},t.prototype.getPlaceDetails=function(e){var t=this;return void 0===this.placesService?Promise.reject("Google places service is not available."):new Promise(function(s,n){t.placesService.getDetails({placeId:e.place_id,sessionToken:t.placesSessionToken},function(e,t){t===google.maps.places.PlacesServiceStatus.OK?s(e):n(t)})})},t.prototype.getReverseGeocodeData=function(e){var t=this;return void 0===this.geocoderService?Promise.reject("Google geocoding service is not available."):new Promise(function(s,n){t.geocoderService.geocode({location:e.geometry.location},function(t,r){if(r===google.maps.GeocoderStatus.OK){var o=t.find(function(t){return["street_number","route","locality"].map(function(s){return e.address_components[s]===t.address_components[s]}).reduce(function(e,t){return e&&t},!0)});s(void 0===o?t[0]:o)}else n(r)})})},t}(a.Component);t.AccessibleGooglePlacesAutocomplete=d,t.DEFAULT_UNIT_DESIGNATORS=p.DEFAULT_DESIGNATORS},function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-load-script")},function(e,t){e.exports=require("accessible-autocomplete/react")},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(5);t.translate=function(e,t){var s=n({addressAutoComplete:{noResults:"Address not found",statusNoResults:"No matching addresses",statusResults:"%{smart_count} matching address is available |||| %{smart_count} matching addresses are available",statusSelectedOption:"You’ve selected %{option}"}},e);return t?s?(void 0!==t.smart_count&&(s=s.split("||||")[1===t.smart_count?0:1].trim()),s.replace(/%\{(.*?)\}/g,function(e,s){return void 0===t[s]?e:"string"==typeof t[s]?t[s].replace(/\$/g,"$$"):t[s]})):e:s}},function(e,t){e.exports=require("get-value")},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DEFAULT_DESIGNATORS={"#":"",apartment:"apt",building:"bldg",department:"dept",floor:"fl",hanger:"hngr",key:"key",lot:"lot",pier:"pier",room:"rm",slip:"slip",space:"spc",stop:"stop",suite:"ste",trailer:"trlr",unit:"unit"};var n="[0-9]+(?:[\\s-]?[a-z])?|[a-z]";function r(e){return e.replace(/[ -]/g,"").toUpperCase()}function o(e,t){var s=t.replace(/\./,"").toLocaleLowerCase();return void 0!==e[s]?e[s]:s}t.parseUnitNumber=function(e,s){void 0===s&&(s=t.DEFAULT_DESIGNATORS);var i=function(e){return Object.keys(e).reduce(function(t,s){var n=e[s];return""!==n&&n!==s?t.concat([s,n+"\\.?"]):t.concat([s])},[]).join("|")}(s),a=/^[\s#]*([0-9]+(?:[\s-]?[a-z])?|[a-z])[\s-–\/]+([0-9]+\s.*)\s*$/i.exec(e);if(null!==a)return{civicAddress:a[2],unitDesignator:"",unitNumber:a[1].toUpperCase()};var u=/^\s*([0-9]+)[\s-–\/]*([a-z])\s(.*)\s*$/i.exec(e);if(null!==u)return{civicAddress:u[1]+" "+u[3],unitDesignator:"",unitNumber:u[2].toUpperCase()};var c=new RegExp("^\\s*([0-9]+)\\s+("+i+")\\s*("+n+")([\\s,].*)$","i").exec(e);if(null!==c){var l=o(s,c[2]),p=r(c[3]);return{civicAddress:c[1].replace(/[\s,]*$/,"")+" "+c[4].replace(/^[\s,]*/,""),unitDesignator:l,unitNumber:p}}var d=new RegExp("^\\s*([0-9]+.+)\\s("+i+")\\s*("+n+")([\\s,].*|$)$","i").exec(e);if(null!==d){l=o(s,d[2]),p=r(d[3]);var f=d[1].replace(/[\s,]*$/,""),g=d[4].replace(/^[\s,]*/,"");return{civicAddress:g?f+", "+g:f,unitDesignator:l,unitNumber:p}}var m=new RegExp("^\\s*("+i+")\\s*("+n+")[-\\s,]+(.*)$","i").exec(e);if(null!==m)return l=o(s,m[1]),p=r(m[2]),{civicAddress:m[3].replace(/^\s*/,""),unitDesignator:l,unitNumber:p};return{civicAddress:e,unitDesignator:"",unitNumber:""}}}]);
//# sourceMappingURL=AccessibleGooglePlacesAutocomplete.es5.js.map