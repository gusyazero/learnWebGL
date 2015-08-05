import * as util from './util';
import * as minMatrix from './minMatrix';

class AppMain {

	public canvas: HTMLCanvasElement;
	public gl: WebGLRenderingContext;

	public canvasId: string;
	public canvasWidth: number;
	public canvasHeight: number;

	constructor(id: string = 'canvas', width: number = 500, height: number = 300) {
		this.canvasId = id;
		this.canvasWidth = width;
		this.canvasHeight = height;

		this.init();
	}

	init(): void {
		this.canvas = this.getCanvas(this.canvasId);
		this.canvas.width = this.canvasWidth;
		this.canvas.height = this.canvasHeight;

		this.gl = this.getWebgl(this.canvas);
		this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
		this.gl.clearDepth(1.0);
		this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

	}

	public getCanvas(id: string): HTMLCanvasElement {
		let elem: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById(id);
		return elem;
	}

	public getWebgl(canvas: HTMLCanvasElement): WebGLRenderingContext {
		let context: WebGLRenderingContext = <WebGLRenderingContext>canvas.getContext('webgl')
			|| <WebGLRenderingContext>canvas.getContext('experimental-webgl');
		return context;
	}

	main(): void {
		// 頂点シェーダ・フラグメントシェーダの生成
		let v_shader: WebGLShader = <WebGLShader>util.create_shader('vs', this.gl);
		let f_shader: WebGLShader = <WebGLShader>util.create_shader('fs', this.gl);

		// プログラムオブジェクトの生成＆リンク
		let prg: WebGLProgram = <WebGLProgram>util.create_program(v_shader, f_shader, this.gl);

		// attributeLocation の取得
		let attLocation: number = this.gl.getAttribLocation(prg, 'position');

		// attributeの要素数（今回はxyzのみ）
		let attStride: number = 3;

		// 頂点データ
		let vertex_position: Array<number> = [
			 0.0, 1.0, 0.0,
			 1.0, 0.0, 0.0,
			-1.0, 0.0, 0.0
		];

		// VBO の生成
		let vbo: WebGLBuffer = util.create_vbo(vertex_position, this.gl);

		// VBO のバインド
		this.gl.bindBuffer(this.gl.ARRAY_BUFFER, vbo);

		// attribute属性の有効化
		this.gl.enableVertexAttribArray(attLocation);

		// attribute属性を登録
		this.gl.vertexAttribPointer(attLocation, attStride, this.gl.FLOAT, false, 0, 0);

		// 行列ライブラリを生成
		let matIV = new minMatrix.MatIV();

		// 各種行列の生成
		let mMatrix = matIV.identity(<any>matIV.create());
		let vMatrix = matIV.identity(<any>matIV.create());
		let pMatrix = matIV.identity(<any>matIV.create());
		let mvpMatrix = matIV.identity(<any>matIV.create());

		// ビュー座標変換行列
		matIV.lookAt([0.0, 1.0, 3.0], [0, 0, 0], [0, 1, 0], vMatrix);

		// プロジェクション座標変換行列
		matIV.perspective(90, this.canvas.width / this.canvas.height, 0.1, 100, pMatrix);

		// 各行列を掛けあわせて座標変換行列を完成させる
		matIV.multiply(pMatrix, vMatrix, mvpMatrix);
		matIV.multiply(mvpMatrix, mMatrix, mvpMatrix);

		// uniformLocation の取得
		let uniLocation = this.gl.getUniformLocation(prg, 'mvpMatrix');

		// uniformLocation へ座標変換行列をバインド
		this.gl.uniformMatrix4fv(uniLocation, false, mvpMatrix);

		// モデルの描画
		this.gl.drawArrays(this.gl.TRIANGLES, 0, 3);

		// コンテキストの再描画
		this.gl.flush();
	}


}
export = AppMain;
