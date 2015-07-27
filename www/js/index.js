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
	appMain.main();
	//# sourceMappingURL=index.js.map

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var util = __webpack_require__(2);
	var minMatrix = __webpack_require__(3);
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
	        var elem = document.getElementById(id);
	        return elem;
	    };
	    AppMain.prototype.getWebGLContext = function (canvas) {
	        var context = canvas.getContext('webgl')
	            || canvas.getContext('experimental-webgl');
	        return context;
	    };
	    AppMain.prototype.main = function () {
	        var v_shader = util.create_shader('vs', this.glContext);
	        var f_shader = util.create_shader('fs', this.glContext);
	        var prg = util.create_program(v_shader, f_shader, this.glContext);
	        var attLocation = this.glContext.getAttribLocation(prg, 'position');
	        var attStride = 3;
	        var vertex_position = [
	            0.0, 1.0, 0.0,
	            1.0, 0.0, 0.0,
	            -1.0, 0.0, 0.0
	        ];
	        var vbo = util.create_vbo(vertex_position, this.glContext);
	        this.glContext.bindBuffer(this.glContext.ARRAY_BUFFER, vbo);
	        this.glContext.enableVertexAttribArray(attLocation);
	        this.glContext.vertexAttribPointer(attLocation, attStride, this.glContext.FLOAT, false, 0, 0);
	        var matIV = new minMatrix.MatIV();
	        var mMatrix = matIV.identity(matIV.create());
	        var vMatrix = matIV.identity(matIV.create());
	        var pMatrix = matIV.identity(matIV.create());
	        var mvpMatrix = matIV.identity(matIV.create());
	        matIV.lookAt([0.0, 1.0, 3.0], [0, 0, 0], [0, 1, 0], vMatrix);
	        matIV.perspective(90, this.canvas.width / this.canvas.height, 0.1, 100, pMatrix);
	        matIV.multiply(pMatrix, vMatrix, mvpMatrix);
	        matIV.multiply(mvpMatrix, mMatrix, mvpMatrix);
	        var uniLocation = this.glContext.getUniformLocation(prg, 'mvpMatrix');
	        this.glContext.uniformMatrix4fv(uniLocation, false, mvpMatrix);
	        this.glContext.drawArrays(this.glContext.TRIANGLES, 0, 3);
	        this.glContext.flush();
	    };
	    return AppMain;
	})();
	module.exports = AppMain;
	//# sourceMappingURL=appMain.js.map

/***/ },
/* 2 */
/***/ function(module, exports) {

	var util;
	(function (util) {
	    function create_shader(id, gl) {
	        var shader;
	        var scriptElement = document.getElementById(id);
	        if (!scriptElement) {
	            return null;
	        }
	        switch (scriptElement.type) {
	            case 'x-shader/x-vertex':
	                shader = gl.createShader(gl.VERTEX_SHADER);
	                break;
	            case 'x-shader/x-fragment':
	                shader = gl.createShader(gl.FRAGMENT_SHADER);
	                break;
	            default:
	                return null;
	        }
	        gl.shaderSource(shader, scriptElement.text);
	        gl.compileShader(shader);
	        if (gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
	            return shader;
	        }
	        else {
	            console.log(gl.getShaderInfoLog(shader));
	        }
	    }
	    util.create_shader = create_shader;
	    function create_program(vs, fs, gl) {
	        var program = gl.createProgram();
	        gl.attachShader(program, vs);
	        gl.attachShader(program, fs);
	        gl.linkProgram(program);
	        if (gl.getProgramParameter(program, gl.LINK_STATUS)) {
	            gl.useProgram(program);
	            return program;
	        }
	        else {
	            console.log(gl.getProgramInfoLog(program));
	        }
	    }
	    util.create_program = create_program;
	    function create_vbo(data, gl) {
	        var vbo = gl.createBuffer();
	        gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);
	        gl.bindBuffer(gl.ARRAY_BUFFER, null);
	        return vbo;
	    }
	    util.create_vbo = create_vbo;
	})(util || (util = {}));
	module.exports = util;
	//# sourceMappingURL=util.js.map

/***/ },
/* 3 */
/***/ function(module, exports) {

	var MatIV = (function () {
	    function MatIV() {
	    }
	    MatIV.prototype.create = function () {
	        return new Float32Array(16);
	    };
	    MatIV.prototype.identity = function (dest) {
	        dest[0] = 1;
	        dest[1] = 0;
	        dest[2] = 0;
	        dest[3] = 0;
	        dest[4] = 0;
	        dest[5] = 1;
	        dest[6] = 0;
	        dest[7] = 0;
	        dest[8] = 0;
	        dest[9] = 0;
	        dest[10] = 1;
	        dest[11] = 0;
	        dest[12] = 0;
	        dest[13] = 0;
	        dest[14] = 0;
	        dest[15] = 1;
	        return dest;
	    };
	    MatIV.prototype.multiply = function (mat1, mat2, dest) {
	        var a = mat1[0], b = mat1[1], c = mat1[2], d = mat1[3], e = mat1[4], f = mat1[5], g = mat1[6], h = mat1[7], i = mat1[8], j = mat1[9], k = mat1[10], l = mat1[11], m = mat1[12], n = mat1[13], o = mat1[14], p = mat1[15], A = mat2[0], B = mat2[1], C = mat2[2], D = mat2[3], E = mat2[4], F = mat2[5], G = mat2[6], H = mat2[7], I = mat2[8], J = mat2[9], K = mat2[10], L = mat2[11], M = mat2[12], N = mat2[13], O = mat2[14], P = mat2[15];
	        dest[0] = A * a + B * e + C * i + D * m;
	        dest[1] = A * b + B * f + C * j + D * n;
	        dest[2] = A * c + B * g + C * k + D * o;
	        dest[3] = A * d + B * h + C * l + D * p;
	        dest[4] = E * a + F * e + G * i + H * m;
	        dest[5] = E * b + F * f + G * j + H * n;
	        dest[6] = E * c + F * g + G * k + H * o;
	        dest[7] = E * d + F * h + G * l + H * p;
	        dest[8] = I * a + J * e + K * i + L * m;
	        dest[9] = I * b + J * f + K * j + L * n;
	        dest[10] = I * c + J * g + K * k + L * o;
	        dest[11] = I * d + J * h + K * l + L * p;
	        dest[12] = M * a + N * e + O * i + P * m;
	        dest[13] = M * b + N * f + O * j + P * n;
	        dest[14] = M * c + N * g + O * k + P * o;
	        dest[15] = M * d + N * h + O * l + P * p;
	        return dest;
	    };
	    MatIV.prototype.scale = function (mat, vec, dest) {
	        dest[0] = mat[0] * vec[0];
	        dest[1] = mat[1] * vec[0];
	        dest[2] = mat[2] * vec[0];
	        dest[3] = mat[3] * vec[0];
	        dest[4] = mat[4] * vec[1];
	        dest[5] = mat[5] * vec[1];
	        dest[6] = mat[6] * vec[1];
	        dest[7] = mat[7] * vec[1];
	        dest[8] = mat[8] * vec[2];
	        dest[9] = mat[9] * vec[2];
	        dest[10] = mat[10] * vec[2];
	        dest[11] = mat[11] * vec[2];
	        dest[12] = mat[12];
	        dest[13] = mat[13];
	        dest[14] = mat[14];
	        dest[15] = mat[15];
	        return dest;
	    };
	    MatIV.prototype.translate = function (mat, vec, dest) {
	        dest[0] = mat[0];
	        dest[1] = mat[1];
	        dest[2] = mat[2];
	        dest[3] = mat[3];
	        dest[4] = mat[4];
	        dest[5] = mat[5];
	        dest[6] = mat[6];
	        dest[7] = mat[7];
	        dest[8] = mat[8];
	        dest[9] = mat[9];
	        dest[10] = mat[10];
	        dest[11] = mat[11];
	        dest[12] = mat[0] * vec[0] + mat[4] * vec[1] + mat[8] * vec[2] + mat[12];
	        dest[13] = mat[1] * vec[0] + mat[5] * vec[1] + mat[9] * vec[2] + mat[13];
	        dest[14] = mat[2] * vec[0] + mat[6] * vec[1] + mat[10] * vec[2] + mat[14];
	        dest[15] = mat[3] * vec[0] + mat[7] * vec[1] + mat[11] * vec[2] + mat[15];
	        return dest;
	    };
	    MatIV.prototype.rotate = function (mat, angle, axis, dest) {
	        var sq = Math.sqrt(axis[0] * axis[0] + axis[1] * axis[1] + axis[2] * axis[2]);
	        if (!sq) {
	            return null;
	        }
	        var a = axis[0], b = axis[1], c = axis[2];
	        if (sq !== 1) {
	            sq = 1 / sq;
	            a *= sq;
	            b *= sq;
	            c *= sq;
	        }
	        var d = Math.sin(angle), e = Math.cos(angle), f = 1 - e, g = mat[0], h = mat[1], i = mat[2], j = mat[3], k = mat[4], l = mat[5], m = mat[6], n = mat[7], o = mat[8], p = mat[9], q = mat[10], r = mat[11], s = a * a * f + e, t = b * a * f + c * d, u = c * a * f - b * d, v = a * b * f - c * d, w = b * b * f + e, x = c * b * f + a * d, y = a * c * f + b * d, z = b * c * f - a * d, A = c * c * f + e;
	        if (angle) {
	            if (mat !== dest) {
	                dest[12] = mat[12];
	                dest[13] = mat[13];
	                dest[14] = mat[14];
	                dest[15] = mat[15];
	            }
	        }
	        else {
	            dest = mat;
	        }
	        dest[0] = g * s + k * t + o * u;
	        dest[1] = h * s + l * t + p * u;
	        dest[2] = i * s + m * t + q * u;
	        dest[3] = j * s + n * t + r * u;
	        dest[4] = g * v + k * w + o * x;
	        dest[5] = h * v + l * w + p * x;
	        dest[6] = i * v + m * w + q * x;
	        dest[7] = j * v + n * w + r * x;
	        dest[8] = g * y + k * z + o * A;
	        dest[9] = h * y + l * z + p * A;
	        dest[10] = i * y + m * z + q * A;
	        dest[11] = j * y + n * z + r * A;
	        return dest;
	    };
	    MatIV.prototype.lookAt = function (eye, center, up, dest) {
	        var eyeX = eye[0], eyeY = eye[1], eyeZ = eye[2], upX = up[0], upY = up[1], upZ = up[2], centerX = center[0], centerY = center[1], centerZ = center[2];
	        if (eyeX === centerX && eyeY === centerY && eyeZ === centerZ) {
	            return this.identity(dest);
	        }
	        var x0, x1, x2, y0, y1, y2, z0, z1, z2, l;
	        z0 = eyeX - center[0];
	        z1 = eyeY - center[1];
	        z2 = eyeZ - center[2];
	        l = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
	        z0 *= l;
	        z1 *= l;
	        z2 *= l;
	        x0 = upY * z2 - upZ * z1;
	        x1 = upZ * z0 - upX * z2;
	        x2 = upX * z1 - upY * z0;
	        l = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
	        if (!l) {
	            x0 = 0;
	            x1 = 0;
	            x2 = 0;
	        }
	        else {
	            l = 1 / l;
	            x0 *= l;
	            x1 *= l;
	            x2 *= l;
	        }
	        y0 = z1 * x2 - z2 * x1;
	        y1 = z2 * x0 - z0 * x2;
	        y2 = z0 * x1 - z1 * x0;
	        l = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
	        if (!l) {
	            y0 = 0;
	            y1 = 0;
	            y2 = 0;
	        }
	        else {
	            l = 1 / l;
	            y0 *= l;
	            y1 *= l;
	            y2 *= l;
	        }
	        dest[0] = x0;
	        dest[1] = y0;
	        dest[2] = z0;
	        dest[3] = 0;
	        dest[4] = x1;
	        dest[5] = y1;
	        dest[6] = z1;
	        dest[7] = 0;
	        dest[8] = x2;
	        dest[9] = y2;
	        dest[10] = z2;
	        dest[11] = 0;
	        dest[12] = -(x0 * eyeX + x1 * eyeY + x2 * eyeZ);
	        dest[13] = -(y0 * eyeX + y1 * eyeY + y2 * eyeZ);
	        dest[14] = -(z0 * eyeX + z1 * eyeY + z2 * eyeZ);
	        dest[15] = 1;
	        return dest;
	    };
	    MatIV.prototype.perspective = function (fovy, aspect, near, far, dest) {
	        var t = near * Math.tan(fovy * Math.PI / 360);
	        var r = t * aspect;
	        var a = r * 2, b = t * 2, c = far - near;
	        dest[0] = near * 2 / a;
	        dest[1] = 0;
	        dest[2] = 0;
	        dest[3] = 0;
	        dest[4] = 0;
	        dest[5] = near * 2 / b;
	        dest[6] = 0;
	        dest[7] = 0;
	        dest[8] = 0;
	        dest[9] = 0;
	        dest[10] = -(far + near) / c;
	        dest[11] = -1;
	        dest[12] = 0;
	        dest[13] = 0;
	        dest[14] = -(far * near * 2) / c;
	        dest[15] = 0;
	        return dest;
	    };
	    MatIV.prototype.transpose = function (mat, dest) {
	        dest[0] = mat[0];
	        dest[1] = mat[4];
	        dest[2] = mat[8];
	        dest[3] = mat[12];
	        dest[4] = mat[1];
	        dest[5] = mat[5];
	        dest[6] = mat[9];
	        dest[7] = mat[13];
	        dest[8] = mat[2];
	        dest[9] = mat[6];
	        dest[10] = mat[10];
	        dest[11] = mat[14];
	        dest[12] = mat[3];
	        dest[13] = mat[7];
	        dest[14] = mat[11];
	        dest[15] = mat[15];
	        return dest;
	    };
	    MatIV.prototype.inverse = function (mat, dest) {
	        var a = mat[0], b = mat[1], c = mat[2], d = mat[3], e = mat[4], f = mat[5], g = mat[6], h = mat[7], i = mat[8], j = mat[9], k = mat[10], l = mat[11], m = mat[12], n = mat[13], o = mat[14], p = mat[15], q = a * f - b * e, r = a * g - c * e, s = a * h - d * e, t = b * g - c * f, u = b * h - d * f, v = c * h - d * g, w = i * n - j * m, x = i * o - k * m, y = i * p - l * m, z = j * o - k * n, A = j * p - l * n, B = k * p - l * o, ivd = 1 / (q * B - r * A + s * z + t * y - u * x + v * w);
	        dest[0] = (f * B - g * A + h * z) * ivd;
	        dest[1] = (-b * B + c * A - d * z) * ivd;
	        dest[2] = (n * v - o * u + p * t) * ivd;
	        dest[3] = (-j * v + k * u - l * t) * ivd;
	        dest[4] = (-e * B + g * y - h * x) * ivd;
	        dest[5] = (a * B - c * y + d * x) * ivd;
	        dest[6] = (-m * v + o * s - p * r) * ivd;
	        dest[7] = (i * v - k * s + l * r) * ivd;
	        dest[8] = (e * A - f * y + h * w) * ivd;
	        dest[9] = (-a * A + b * y - d * w) * ivd;
	        dest[10] = (m * u - n * s + p * q) * ivd;
	        dest[11] = (-i * u + j * s - l * q) * ivd;
	        dest[12] = (-e * z + f * x - g * w) * ivd;
	        dest[13] = (a * z - b * x + c * w) * ivd;
	        dest[14] = (-m * t + n * r - o * q) * ivd;
	        dest[15] = (i * t - j * r + k * q) * ivd;
	        return dest;
	    };
	    return MatIV;
	})();
	exports.MatIV = MatIV;
	//# sourceMappingURL=minMatrix.js.map

/***/ }
/******/ ]);
//# sourceMappingURL=index.js.map