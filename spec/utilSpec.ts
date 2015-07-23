/// <reference path="../typings/tsd.d.ts" />
import util = require('../src/ts/util');
import testSettings = require('./testSettings');
import testUtil = require('./testUtil');

describe('spec for util', function(){
	var canvas: HTMLCanvasElement;
	var glContext: WebGLRenderingContext;

	beforeEach(function(){
		canvas = testUtil.appendCanvas();
		glContext = testUtil.getWebGlContext();

		testUtil.appendVertexShaderTag(testSettings.vertexShader);
		testUtil.appendFragmentShaderTag(testSettings.fragmentShader);
	});

	afterEach(function(){
		testUtil.removeCanvas();
		testUtil.removeVertexShaderTag();
		testUtil.removeFragmentShaderTag();
	});

	it('spec for create vertex shader', function() {
		let tmpShader: WebGLShader = glContext.createShader(glContext.VERTEX_SHADER);
		glContext.shaderSource(tmpShader, testSettings.vertexShader);
		glContext.compileShader(tmpShader);

		let shader: any = util.create_shader('vs', glContext);
		//console.log(shader, tmpShader);

		expect(shader).toEqual(tmpShader);
	});

	it('spec for create pixel shader', function() {
		let tmpShader: WebGLShader = glContext.createShader(glContext.FRAGMENT_SHADER);
		glContext.shaderSource(tmpShader, testSettings.fragmentShader);
		glContext.compileShader(tmpShader);

		let shader: any = util.create_shader('fs', glContext);
		//console.log(shader, tmpShader);

		expect(shader).toEqual(tmpShader);
	});

	it('spec for create program object', function() {
		let tmpVertexShader: WebGLShader = glContext.createShader(glContext.VERTEX_SHADER);
		glContext.shaderSource(tmpVertexShader, testSettings.vertexShader);
		glContext.compileShader(tmpVertexShader);

		let tmpFragmentShader: WebGLShader = glContext.createShader(glContext.FRAGMENT_SHADER);
		glContext.shaderSource(tmpFragmentShader, testSettings.fragmentShader);
		glContext.compileShader(tmpFragmentShader);

		let tmpProgram: WebGLProgram = glContext.createProgram();
		glContext.attachShader(tmpProgram, tmpVertexShader);
		glContext.attachShader(tmpProgram, tmpFragmentShader);
		glContext.linkProgram(tmpProgram);

		let program: any = util.create_program(tmpVertexShader, tmpFragmentShader, glContext);

		expect(program).toEqual(tmpProgram);
	});

	it('spec for create vbo', function(){
		let tmpVbo: WebGLBuffer = glContext.createBuffer();
		//glContext.bindBuffer(glContext.ARRAY_BUFFER, tmpVbo);
		//glContext.bufferData(glContext.ARRAY_BUFFER, new Float32Array(dummyVertexData), glContext.STATIC_DRAW);
		//glContext.bindBuffer(glContext.ARRAY_BUFFER, null);

		let vbo: WebGLBuffer = util.create_vbo(testSettings.vertexData, glContext);

		expect(vbo).toEqual(tmpVbo);
	});

});
