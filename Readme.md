# ���̃v���W�F�N�g�ɂ���
�l��WebGL�w�K�p�ł��B

# �\�z�������ɂ���
* 2015�N�V�����_�̂��̂Ȃ̂ŁA�ォ�猩���玞��x�ꂩ��

# �\�z�̑O�ɕ⑫
## Windows ����CLI���̍\�z
1. [Chocolatey](https://chocolatey.org/)�Ńp�b�P�[�W�Ǘ�
�C���X�g�[�����@�ƃ����b�g�́A[����](http://qiita.com/himinato/items/11f4dc9a23afebbc242c)������΂Ȃ�ƂȂ��킩��͂��B
2. [Conemu](https://github.com/Maximus5/ConEmu)�Ń}���`�^�uCLI
�C���X�g�[���ł� `choco install conemu` �ł����D�݂ȕ��@�ŁB
3. [NYAGOS](https://github.com/zetamatta/nyagos)��bash���C�N��
�C���X�g�[�����@��[����](https://github.com/zetamatta/nyagos/blob/master/Doc/nyagos_ja.md)���Q��

# �O���[�o�����̍\�z
## ruby
* Windows
1. [ruby����](http://rubyinstaller.org/downloads/)����C���X�g�[�����擾
1. �C���X�g�[�������s
�I�v�V������ruby�ւ�path��ݒ肷��Ƀ`�F�b�N�����Ă�������
�C���X�g�[���p�X�ɃX�y�[�X���܂߂Ȃ�����
�c�܂߂�ƁACompass�̃C���X�g�[���ł����Ă�蒼���ł�(�G�L�D�M)
1. PC���ċN���i�O�̂��߁j
1. `ruby -v` �Ńo�[�W�����`�F�b�N

* Mac
�cMac���Ȃ��̂ł킩��܂���B

## node
* Windows
1. [�����T�C�g](https://nodejs.org/)���炩��C���X�g�[����DL���ă|�`�邾���B
1. PC���ċN���i�O�̂��߁j
1. `node -v` �Ńo�[�W�����`�F�b�N

* Mac
�cMac���Ȃ��̂ł킩��܂���B

## npm
1. �ŐV�łɍX�V
```bash
npm update -g npm
```
1.  `npm -v` �Ńo�[�W�����`�F�b�N

## package.json �`�F�b�J�[
```bash
npm install -g npm-check-updates
# node.js / npm ���X�V������A�v���W�F�N�g�����ŉ��L�����s
npm-check-updates -u
```

## [Compass](http://compass-style.org/)
Sass�����ɊJ�������t���[�����[�N
Sass�Ƃ͂Ȃ񂼂�H�ɂ��Ă�[������](http://www.atmarkit.co.jp/ait/articles/1402/17/news102.html)
1. gem�ŃC���X�g�[��
```bash
gem update --system
gem install sass
gem install compass
```
1. `compass -v` �Ńo�[�W�����`�F�b�N

## [Hologram](http://trulia.github.io/hologram/)
Ruby��œ��삷��X�^�C���K�C�h�W�F�l���[�^
1. gem�ŃC���X�g�[��
```bash
gem install hologram
```
1. `hologram -v` �Ńo�[�W�����`�F�b�N


## node �p�b�P�[�W�̃C���X�g�[��
**�܂Ƃ߂ē��ꂽ���l�͂�����**
```bash
npm install -g gulp bower webpack typescript tsd tslint karma-cli jasmine phantomjs
```

**1�����ꂽ���l�͂������牺��**

---
## [gulp](http://gulpjs.com/)
Node.js��œ��삷��^�X�N�����i�[
CLI�Ŏg�������̂ŃO���[�o���C���X�g�[��
1. �C���X�g�[��
```bash
npm install gulp -g
```
1. `gulp -v` �Ńo�[�W�����`�F�b�N

## [Bower](http://bower.io/)
�t�����g�G���h�p�p�b�P�[�W�}�l�[�W��
1. �C���X�g�[��
```bash
npm install -g bower
```
1. `bower -v` �Ńo�[�W�����`�F�b�N

## [webpack](http://webpack.github.io/docs/)
�ÓI�ȃt�@�C���̈ˑ��֌W�����������������蕪�������肷��c�[��
Browserify�Ƃ̑傫�ȈႢ�͈ȉ��̂Q�_�c���ȁH
* �J�X�^�}�C�Y��
loader �Ƒg�ݍ��킹��CSS���낤��SASS���낤�Ɖ摜���낤�Ə����ł���
* �����̏����o�����\
�G���g���[�|�C���g�𕡐����Ă����邱�ƂŁA
�����o�����ʁX�ɂ��邱�Ƃ��ł���

```bash
npm install -g webpack
```

## [TypeScript](http://www.typescriptlang.org/)
JavaScript�ɐÓI�^�t���ƃN���X�x�[�X�I�u�W�F�N�g�w�����������X�[�p�[�Z�b�g
�ڂ�����[������](https://ja.wikipedia.org/wiki/TypeScript)�B
1. �C���X�g�[��
```bash
npm install -g typescript
```
1. `tsc -v` �Ńo�[�W�����`�F�b�N
1. TSD(TypeScript Definition manager)���C���X�g�[��
```bash
npm install -g tsd
```

## [Lint](https://ja.wikipedia.org/wiki/Lint)
�\�[�X�`�F�b�J�[
�����TypeScript��p��TSLint���g�p
```bash
npm install -g tslint
```

## [Karma](http://karma-runner.github.io/0.12/index.html)
Node.js��œ��삷��e�X�g�����i�[
```bash
npm install -g karma-cli
```

## [Jasmine](http://jasmine.github.io/)
JavaScript�p��BDD�e�X�e�B���O�t���[�����[�N
spyOn�Ń��b�N�������ł���
```bash
npm install -g jasmine
```

## [PhantomJS](http://phantomjs.org/)
���󂷂�ƁAJavaScript API��ʂ��Đ���\�ȉ�ʂ̂Ȃ�WebKit�u���E�U�c�Ƃ����������̂��́B
* �C�ӂ̃^�C�~���O�ŃL���v�`��
* �y�[�W���ł̔C�ӂ�JavaScript�R�[�h�̎��s
* �w�肵���{�^���̃C�x���g�𓮍�i���΁j������
* Cookie�̏�������
* UserAgent�̏�������
* JavaScript�G���[�̎擾
* Ajax��摜�ȂǗl�X�ȃ��N�G�X�g�̊Ď�
�cetc

���X�N���v�g��Ŏ��s�\
```bash
npm install -g phantomjs
```

# �v���W�F�N�g���̍\�z
## ���O����
* �V�K�\�z�̏ꍇ
�v���W�F�N�g�f�B���N�g���̍쐬
����ȍ~�̍�Ƃ͑S�ăv���W�F�N�g�f�B���N�g�������Ŏ��s
```bash
mkdir path/to/your_project_name
```
* �v���W�F�N�g�f�B���N�g���ȉ����ۃR�s�����ꍇ
���L�R�}���h�̂ݎ��s���A
����ȍ~�̎菇�͕s�v
```bash
cd path/to/your_project_name
npm-check-updates -u
npm update
bower update
```

# �g�p���C�u�����̃C���X�g�[��
�e�p�b�P�[�W�̐����ƌʃC���X�g�[�����@�͏ȗ�
����������ꍇ�͊e���Q�Ƃł��肢���܂��B
1. package.json, bower.json, gulpfile.js, hologram_config.yml, karma.conf.js, tslint.json, config.rb, tsd.json, tsconfig.json, webpack.config.js ���v���W�F�N�g�����ɔz�u
1. **�Ǘ��Ҍ�����**(��) `npm install`�����s
��Mac�ł͕s�v����
1. `bower install`�����s


# ���\�z
## �X�^�C���K�C�h�W�F�l���[�^
1. hologram_config.yml ���ꎞ�I�Ƀ��l�[�����āA`hologram init` �����s
1. hologram_config.yml�����ɖ߂�

## ���j�b�g�e�X�g
1. `jasmine init` �Ńe�X�g�p�f�B���N�g���𐶐�

## �f�B���N�g����z�u
```bash
mkdir src www
mkdir src/sass src/ts
```

���̎��_�ł��̂悤�Ȋ����ɂȂ��Ă����OK
����bower_components
����code_example_templates
����doc_assets
����node_modules
����spec
��  ����support
����src
��  ����sass
��  ����ts
����www

## TypeScript�p�^��`�t�@�C���̒ǉ�
```bash
tsd reinstall
```

* �ȍ~�A�g�p�O�����C�u�����������閈�ɁA
`tsd install ...` �����s���邱��

### Three.js�̌^��`�t�@�C���̒ǉ�
WebGL�Ƃ�����Three.js�c���ǂ����͂Ƃ������A
TypeScript �� WebAudio ���T�|�[�g�����֌W�ŃG���[����������̂ŁA
��d��`�ŃG���[���������Ȃ��悤�ɂ���
```bash
tsd query three
# �ˑ����C�u�����������ăC���X�g�[�����Ă�������
tsd install three -rs
```

�����āA���L�Q�t�@�C����ҏW

```ts
// tsd.d.ts
- /// <reference path="webaudioapi/waa.d.ts" />

// tsd.json
-    "webaudioapi/waa.d.ts": {
-      �c
-    },
```

### node.js�̌^��`�t�@�C���̒ǉ�
require ���L�q���Ă��{���Ȃ��悤�ɂ��邽�߂ɁA
node.js�̌^��`���C���X�g�[�����Ă����K�v������B

�c���A[����](https://github.com/borisyankov/DefinitelyTyped/issues/4249)�ɂ���悤�ɓ{���Ă��܂��̂ŁA
�^��`��ҏW���Ă����K�v������
��TypeScript 1.6 �`�ɂȂ�����������邩��

```bash
tsd query node
tsd install node -s
```
```ts
/* @link https://github.com/chbrown/DefinitelyTyped/commit/17f99f1 */
// node/node.d.ts
-declare var global: NodeJS.Global;
+declare var global: any;

-export interface Global {
-...
-}
```

## Karma �̃o�O�Ή�
Karma@0.13.3 & karma-webpack@1.6.0 ���ƁA
`Can not load "webpack"!` �Ɠ{����̂ŁA
��������܂Ń_�E���O���[�h���Ă���
[Karma can't load webpack](http://stackoverflow.com/questions/31444743/karma-cant-load-webpack)
[Can not load "webpack" #1497](https://github.com/karma-runner/karma/issues/1497)

```bash
npm install -g karma@0.12.31
npm install karma@0.12.31
```

# bower ����Ǘ�������Ȃ����C�u����
## zepto.js
bower�ŊǗ��ł��Ȃ����Ƃ��Ȃ����ǁA
* ������build���Ȃ��Ǝg���Ȃ�
* ������DL�ł���W���o�[�W�����ŏ\��

�Ƃ��������R�ŁA��������DL���ė��p����
1. [�����T�C�g](http://zeptojs.com/)����ŐV�ł�DL
1. libs ������ zeptojs �f�B���N�g�����쐬
1. libs/zeptojs �����ɔz�u