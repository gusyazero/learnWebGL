/// <reference path="../typings/tsd.d.ts" />

import AppMain = require('../src/ts/appMain')
import testSettings = require('./testSettings');
import testUtil = require('./testUtil');

describe('spec for appMain', function(){
	var canvas: HTMLCanvasElement;
	var glContext: WebGLRenderingContext;
	var appMain: AppMain;

	beforeEach(function(){
		canvas = testUtil.appendCanvas();
		glContext = testUtil.getWebGlContext();

		testUtil.appendVertexShaderTag(testSettings.vertexShader);
		testUtil.appendFragmentShaderTag(testSettings.fragmentShader);

		appMain = new AppMain('canvas', 500, 300);
	});

	afterEach(function(){
		testUtil.removeCanvas();
		testUtil.removeVertexShaderTag();
		testUtil.removeFragmentShaderTag();
	});

	it('spec for after init state', function(){
		expect(appMain.canvas).toEqual(jasmine.objectContaining({
			width: 500,
			height: 300
		}));
	});


});
