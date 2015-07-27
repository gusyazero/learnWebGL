module util {
	export function create_shader(id: string, gl: WebGLRenderingContext): any {
		// シェーダー
		let shader: WebGLShader;
		// シェーダープログラムが記載されているDOMを取得
		let scriptElement = <HTMLScriptElement>document.getElementById(id);

		if (!scriptElement) { return null; }

		// シェーダーを生成
		switch (scriptElement.type) {
			// バーテックスシェーダー
			case 'x-shader/x-vertex':
				shader = gl.createShader(gl.VERTEX_SHADER);
				break;
			// ピクセルシェーダー
			case 'x-shader/x-fragment':
				shader = gl.createShader(gl.FRAGMENT_SHADER);
				break;
			default :
				return null;
		}

		// シェーダーにプログラムを割り当てる
		gl.shaderSource(shader, scriptElement.text);

		// シェーダーをコンパイル
		gl.compileShader(shader);

		// 正常にコンパイルされたかをチェック
		if (gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
			return shader;
		} else {
			// 失敗時はログを出力
			console.log(gl.getShaderInfoLog(shader));
		}
	}

	export function create_program(vs: WebGLShader, fs: WebGLShader, gl: WebGLRenderingContext): any {
		// プログラムオブジェクトを生成
		let program = gl.createProgram();

		// プログラムオブジェクトにシェーダーを割り当てる
		gl.attachShader(program, vs);
		gl.attachShader(program, fs);

		// シェーダーをリンク
		gl.linkProgram(program);

		// 正常にリンクされたかをチェック
		if (gl.getProgramParameter(program, gl.LINK_STATUS)) {
			// プログラムオブジェクトの有効化
			gl.useProgram(program);
			return program;
		} else {
			// 失敗時はログを出力
			console.log(gl.getProgramInfoLog(program));
		}
	}

	export function create_vbo(data: Array<number>, gl: WebGLRenderingContext): WebGLBuffer {
		// バッファオブジェクトの生成
		let vbo: WebGLBuffer = gl.createBuffer();

		// バッファをWebGLにバインド
		gl.bindBuffer(gl.ARRAY_BUFFER, vbo);

		// バッファにデータをセット
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);

		// バッファのバインドを無効化
		gl.bindBuffer(gl.ARRAY_BUFFER, null);

		return vbo;
	}
}

export = util;
