// ------------------------------------------------------------------------------------------------
// minMatrix.js
// version 0.0.1
// copyright (c) doxas
// ------------------------------------------------------------------------------------------------
export class MatIV {
	create(): Float32Array {
		return new Float32Array(16);
	}
	identity (dest: Array<number>): Array<number> {
		dest[0]  = 1; dest[1]  = 0; dest[2]  = 0; dest[3]  = 0;
		dest[4]  = 0; dest[5]  = 1; dest[6]  = 0; dest[7]  = 0;
		dest[8]  = 0; dest[9]  = 0; dest[10] = 1; dest[11] = 0;
		dest[12] = 0; dest[13] = 0; dest[14] = 0; dest[15] = 1;
		return dest;
	}
	multiply (mat1: Array<number>, mat2: Array<number>, dest: Array<number>): Array<number> {
		let a: number = mat1[0],  b: number = mat1[1],  c: number = mat1[2],  d: number = mat1[3],
			e: number = mat1[4],  f: number = mat1[5],  g: number = mat1[6],  h: number = mat1[7],
			i: number = mat1[8],  j: number = mat1[9],  k: number = mat1[10], l: number = mat1[11],
			m: number = mat1[12], n: number = mat1[13], o: number = mat1[14], p: number = mat1[15],
			A: number = mat2[0],  B: number = mat2[1],  C: number = mat2[2],  D: number = mat2[3],
			E: number = mat2[4],  F: number = mat2[5],  G: number = mat2[6],  H: number = mat2[7],
			I: number = mat2[8],  J: number = mat2[9],  K: number = mat2[10], L: number = mat2[11],
			M: number = mat2[12], N: number = mat2[13], O: number = mat2[14], P: number = mat2[15];
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
	}
	scale (mat: Array<number>, vec: Array<number>, dest: Array<number>): Array<number> {
		dest[0]  = mat[0]  * vec[0];
		dest[1]  = mat[1]  * vec[0];
		dest[2]  = mat[2]  * vec[0];
		dest[3]  = mat[3]  * vec[0];
		dest[4]  = mat[4]  * vec[1];
		dest[5]  = mat[5]  * vec[1];
		dest[6]  = mat[6]  * vec[1];
		dest[7]  = mat[7]  * vec[1];
		dest[8]  = mat[8]  * vec[2];
		dest[9]  = mat[9]  * vec[2];
		dest[10] = mat[10] * vec[2];
		dest[11] = mat[11] * vec[2];
		dest[12] = mat[12];
		dest[13] = mat[13];
		dest[14] = mat[14];
		dest[15] = mat[15];
		return dest;
	}
	translate (mat: Array<number>, vec: Array<number>, dest: Array<number>): Array<number> {
		dest[0] = mat[0]; dest[1] = mat[1]; dest[2]  = mat[2];  dest[3]  = mat[3];
		dest[4] = mat[4]; dest[5] = mat[5]; dest[6]  = mat[6];  dest[7]  = mat[7];
		dest[8] = mat[8]; dest[9] = mat[9]; dest[10] = mat[10]; dest[11] = mat[11];
		dest[12] = mat[0] * vec[0] + mat[4] * vec[1] + mat[8]  * vec[2] + mat[12];
		dest[13] = mat[1] * vec[0] + mat[5] * vec[1] + mat[9]  * vec[2] + mat[13];
		dest[14] = mat[2] * vec[0] + mat[6] * vec[1] + mat[10] * vec[2] + mat[14];
		dest[15] = mat[3] * vec[0] + mat[7] * vec[1] + mat[11] * vec[2] + mat[15];
		return dest;
	}
	rotate (mat: Array<number>, angle: number, axis: Array<number>, dest: Array<number>): any {
		let sq: number = Math.sqrt(axis[0] * axis[0] + axis[1] * axis[1] + axis[2] * axis[2]);
		if (!sq) { return null; }
		let a = axis[0], b = axis[1], c = axis[2];
		if (sq !== 1) { sq = 1 / sq; a *= sq; b *= sq; c *= sq; }
		let d: number = Math.sin(angle), e: number = Math.cos(angle), f: number = 1 - e,
			g: number = mat[0],  h: number = mat[1], i: number = mat[2],  j: number = mat[3],
			k: number = mat[4],  l: number = mat[5], m: number = mat[6],  n: number = mat[7],
			o: number = mat[8],  p: number = mat[9], q: number = mat[10], r: number = mat[11],
			s: number = a * a * f + e,
			t: number = b * a * f + c * d,
			u: number = c * a * f - b * d,
			v: number = a * b * f - c * d,
			w: number = b * b * f + e,
			x: number = c * b * f + a * d,
			y: number = a * c * f + b * d,
			z: number = b * c * f - a * d,
			A: number = c * c * f + e;
		if (angle) {
			if (mat !== dest) {
				dest[12] = mat[12]; dest[13] = mat[13];
				dest[14] = mat[14]; dest[15] = mat[15];
			}
		} else {
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
	}
	lookAt (eye: Array<number>, center: Array<number>, up: Array<number>, dest: Array<number>): Array<number> {
		let eyeX: number    = eye[0],    eyeY: number    = eye[1],    eyeZ: number    = eye[2],
			upX: number     = up[0],     upY: number     = up[1],     upZ: number     = up[2],
			centerX: number = center[0], centerY: number = center[1], centerZ: number = center[2];
		if (eyeX === centerX && eyeY === centerY && eyeZ === centerZ) { return this.identity(dest); }
		let x0: number, x1: number, x2: number, y0: number, y1: number, y2: number, z0: number, z1: number, z2: number, l: number;
		z0 = eyeX - center[0]; z1 = eyeY - center[1]; z2 = eyeZ - center[2];
		l = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
		z0 *= l; z1 *= l; z2 *= l;
		x0 = upY * z2 - upZ * z1;
		x1 = upZ * z0 - upX * z2;
		x2 = upX * z1 - upY * z0;
		l = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
		if (!l) {
			x0 = 0; x1 = 0; x2 = 0;
		} else {
			l = 1 / l;
			x0 *= l; x1 *= l; x2 *= l;
		}
		y0 = z1 * x2 - z2 * x1; y1 = z2 * x0 - z0 * x2; y2 = z0 * x1 - z1 * x0;
		l = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
		if (!l) {
			y0 = 0; y1 = 0; y2 = 0;
		} else {
			l = 1 / l;
			y0 *= l; y1 *= l; y2 *= l;
		}
		dest[0] = x0; dest[1] = y0; dest[2]  = z0; dest[3]  = 0;
		dest[4] = x1; dest[5] = y1; dest[6]  = z1; dest[7]  = 0;
		dest[8] = x2; dest[9] = y2; dest[10] = z2; dest[11] = 0;
		dest[12] = -(x0 * eyeX + x1 * eyeY + x2 * eyeZ);
		dest[13] = -(y0 * eyeX + y1 * eyeY + y2 * eyeZ);
		dest[14] = -(z0 * eyeX + z1 * eyeY + z2 * eyeZ);
		dest[15] = 1;
		return dest;
	}
	perspective (fovy: number, aspect: number, near: number, far: number, dest: Array<number>): Array<number> {
		let t: number = near * Math.tan(fovy * Math.PI / 360);
		let r: number = t * aspect;
		let a: number = r * 2, b = t * 2, c = far - near;
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
	}
	transpose (mat: Array<number>, dest: Array<number>): Array<number> {
		dest[0]  = mat[0];  dest[1]  = mat[4];
		dest[2]  = mat[8];  dest[3]  = mat[12];
		dest[4]  = mat[1];  dest[5]  = mat[5];
		dest[6]  = mat[9];  dest[7]  = mat[13];
		dest[8]  = mat[2];  dest[9]  = mat[6];
		dest[10] = mat[10]; dest[11] = mat[14];
		dest[12] = mat[3];  dest[13] = mat[7];
		dest[14] = mat[11]; dest[15] = mat[15];
		return dest;
	}
	inverse (mat: Array<number>, dest: Array<number>): Array<number> {
		let a: number = mat[0],  b: number = mat[1],  c: number = mat[2],  d: number = mat[3],
			e: number = mat[4],  f: number = mat[5],  g: number = mat[6],  h: number = mat[7],
			i: number = mat[8],  j: number = mat[9],  k: number = mat[10], l: number = mat[11],
			m: number = mat[12], n: number = mat[13], o: number = mat[14], p: number = mat[15],
			q: number = a * f - b * e, r = a * g - c * e,
			s: number = a * h - d * e, t = b * g - c * f,
			u: number = b * h - d * f, v = c * h - d * g,
			w: number = i * n - j * m, x = i * o - k * m,
			y: number = i * p - l * m, z = j * o - k * n,
			A: number = j * p - l * n, B = k * p - l * o,
			ivd: number = 1 / (q * B - r * A + s * z + t * y - u * x + v * w);
		dest[0]  = ( f * B - g * A + h * z) * ivd;
		dest[1]  = (-b * B + c * A - d * z) * ivd;
		dest[2]  = ( n * v - o * u + p * t) * ivd;
		dest[3]  = (-j * v + k * u - l * t) * ivd;
		dest[4]  = (-e * B + g * y - h * x) * ivd;
		dest[5]  = ( a * B - c * y + d * x) * ivd;
		dest[6]  = (-m * v + o * s - p * r) * ivd;
		dest[7]  = ( i * v - k * s + l * r) * ivd;
		dest[8]  = ( e * A - f * y + h * w) * ivd;
		dest[9]  = (-a * A + b * y - d * w) * ivd;
		dest[10] = ( m * u - n * s + p * q) * ivd;
		dest[11] = (-i * u + j * s - l * q) * ivd;
		dest[12] = (-e * z + f * x - g * w) * ivd;
		dest[13] = ( a * z - b * x + c * w) * ivd;
		dest[14] = (-m * t + n * r - o * q) * ivd;
		dest[15] = ( i * t - j * r + k * q) * ivd;
		return dest;
	}
}
