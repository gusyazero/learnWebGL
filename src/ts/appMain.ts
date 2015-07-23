class AppMain {

	public canvas: HTMLCanvasElement;
	public glContext: WebGLRenderingContext;

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

		this.glContext = this.getWebGLContext(this.canvas);
		this.glContext.clearColor(0.0, 0.0, 0.0, 1.0);
		this.glContext.clearDepth(1.0);
		this.glContext.clear(this.glContext.COLOR_BUFFER_BIT | this.glContext.DEPTH_BUFFER_BIT);

	}

	getCanvas(id: string): HTMLCanvasElement {
		let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById(id);
		return canvas;
	}

	getWebGLContext(canvas: HTMLCanvasElement): WebGLRenderingContext {
		let glContext: WebGLRenderingContext = <WebGLRenderingContext>canvas.getContext('webgl')
			|| <WebGLRenderingContext>canvas.getContext('experimental-webgl');
		return glContext;
	}


}
export = AppMain;
