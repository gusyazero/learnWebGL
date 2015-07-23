module testSettings {
	export const vertexShader: string = `
attribute vec3 position;
uniform mat4 mvpMatrix;

void main(void){
	gl_Position = mvpMatrix * vec4(position, 1.0);
}
`;

	export const fragmentShader: string = `
void main(void){
	gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
}
`;

	export const vertexData: number[] = [
		// X,   Y,   Z
		0.0, 1.0, 0.0,
		1.0, 0.0, 0.0,
		-1.0, 0.0, 0.0
	];
}

export = testSettings;
