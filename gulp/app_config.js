var path_list = {
	dir: {
		src: 'src',
		libs: 'libs',
		docs: 'docs',
		www: 'www'
	},
	resources: {
		sass: '/sass',
		css: '/css',
		ts: '/ts',
		js: '/js'
	}
};

module.exports = {
	resources: {
		src: {
			css: path_list.dir.src + path_list.resources.sass,
			js: path_list.dir.src + path_list.resources.ts
		},
		docs: {
			css: path_list.dir.docs + path_list.resources.css,
			js: path_list.dir.docs + path_list.resources.js
		},
		libs: {
			css: path_list.dir.libs + path_list.resources.css,
			js: path_list.dir.libs + path_list.resources.js
		},
		dst: {
			css: path_list.dir.www + path_list.resources.css,
			js: path_list.dir.www + path_list.resources.js
		}
	}
};
