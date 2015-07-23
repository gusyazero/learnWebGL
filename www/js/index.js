/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "www/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var AppMain = __webpack_require__(1);
	var appMain = new AppMain();
	//# sourceMappingURL=index.js.map

/***/ },
/* 1 */
/***/ function(module, exports) {

	var AppMain = (function () {
	    function AppMain(id, width, height) {
	        if (id === void 0) { id = 'canvas'; }
	        if (width === void 0) { width = 500; }
	        if (height === void 0) { height = 300; }
	        this.canvasId = id;
	        this.canvasWidth = width;
	        this.canvasHeight = height;
	        this.init();
	    }
	    AppMain.prototype.init = function () {
	        this.canvas = this.getCanvas(this.canvasId);
	        this.canvas.width = this.canvasWidth;
	        this.canvas.height = this.canvasHeight;
	        this.glContext = this.getWebGLContext(this.canvas);
	        this.glContext.clearColor(0.0, 0.0, 0.0, 1.0);
	        this.glContext.clearDepth(1.0);
	        this.glContext.clear(this.glContext.COLOR_BUFFER_BIT | this.glContext.DEPTH_BUFFER_BIT);
	    };
	    AppMain.prototype.getCanvas = function (id) {
	        var canvas = document.getElementById(id);
	        return canvas;
	    };
	    AppMain.prototype.getWebGLContext = function (canvas) {
	        var glContext = canvas.getContext('webgl')
	            || canvas.getContext('experimental-webgl');
	        return glContext;
	    };
	    return AppMain;
	})();
	module.exports = AppMain;
	//# sourceMappingURL=appMain.js.map

/***/ }
/******/ ]);
//# sourceMappingURL=index.js.map