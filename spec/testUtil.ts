module testUtil {
	export function getCanvas(): HTMLCanvasElement {
		return <HTMLCanvasElement>document.getElementById('canvas');
	}

	export function getWebGlContext(): WebGLRenderingContext {
		let canvas: HTMLCanvasElement = getCanvas();
		return <WebGLRenderingContext>canvas.getContext('webgl') || <WebGLRenderingContext>canvas.getContext('experimental-webgl');
	}

	export function appendCanvas(): HTMLCanvasElement {
		let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.createElement('canvas');
		canvas.setAttribute('id', 'canvas');
		canvas.width = 500;
		canvas.height = 300;
		document.body.appendChild(canvas);
		return canvas;
	}

	export function removeCanvas(): void {
		let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('canvas');
		document.body.removeChild(canvas);
	}

	export function appendVertexShaderTag(shader: string): HTMLScriptElement {
		let tmpElement: HTMLScriptElement = <HTMLScriptElement>document.createElement('script');
		tmpElement.setAttribute('id', 'vs');
		tmpElement.setAttribute('type', 'x-shader/x-vertex');
		tmpElement.innerText = shader;
		document.body.appendChild(tmpElement);
		return tmpElement;
	}

	export function removeVertexShaderTag(): void {
		let tmpElement: HTMLScriptElement = <HTMLScriptElement>document.getElementById('vs');
		document.body.removeChild(tmpElement);
	}

	export function appendFragmentShaderTag(shader: string): HTMLScriptElement {
		let tmpElement: HTMLScriptElement = <HTMLScriptElement>document.createElement('script');
		tmpElement.setAttribute('id', 'fs');
		tmpElement.setAttribute('type', 'x-shader/x-fragment');
		tmpElement.innerText = shader;
		document.body.appendChild(tmpElement);
		return tmpElement;
	}

	export function removeFragmentShaderTag(): void {
		let tmpElement: HTMLScriptElement = <HTMLScriptElement>document.getElementById('fs');
		document.body.removeChild(tmpElement);
	}
}
export = testUtil;
