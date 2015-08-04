# このプロジェクトについて
個人のWebGL学習用です。

# 構築した環境について
* 2015年７月時点のものなので、後から見たら時代遅れかも

# 構築の前に補足
## Windows 向けCLI環境の構築
1. [Chocolatey](https://chocolatey.org/)でパッケージ管理
インストール方法とメリットは、[ここ](http://qiita.com/himinato/items/11f4dc9a23afebbc242c)を見ればなんとなくわかるはず。
2. [Conemu](https://github.com/Maximus5/ConEmu)でマルチタブCLI
インストーラでも `choco install conemu` でもお好みな方法で。
3. [NYAGOS](https://github.com/zetamatta/nyagos)でbashライクに
インストール方法は[ここ](https://github.com/zetamatta/nyagos/blob/master/Doc/nyagos_ja.md)を参照

# グローバル環境の構築
## ruby
* Windows
1. [ruby公式](http://rubyinstaller.org/downloads/)からインストーラを取得
1. インストーラを実行
オプションでrubyへのpathを設定するにチェックを入れておくこと
インストールパスにスペースを含めないこと
…含めると、Compassのインストールでこけてやり直しです(；´Д｀)
1. PCを再起動（念のため）
1. `ruby -v` でバージョンチェック

* Mac
…Macがないのでわかりません。

## node
* Windows
1. [公式サイト](https://nodejs.org/)からからインストーラをDLしてポチるだけ。
1. PCを再起動（念のため）
1. `node -v` でバージョンチェック

* Mac
…Macがないのでわかりません。

## npm
1. 最新版に更新
```bash
npm update -g npm
```
1.  `npm -v` でバージョンチェック

## package.json チェッカー
```bash
npm install -g npm-check-updates
# node.js / npm を更新したら、プロジェクト直下で下記を実行
npm-check-updates -u
```

## [Compass](http://compass-style.org/)
Sassを元に開発したフレームワーク
Sassとはなんぞや？については[こちら](http://www.atmarkit.co.jp/ait/articles/1402/17/news102.html)
1. gemでインストール
```bash
gem update --system
gem install sass
gem install compass
```
1. `compass -v` でバージョンチェック

## [Hologram](http://trulia.github.io/hologram/)
Ruby上で動作するスタイルガイドジェネレータ
1. gemでインストール
```bash
gem install hologram
```
1. `hologram -v` でバージョンチェック


## node パッケージのインストール
**まとめて入れたい人はこっち**
```bash
npm install -g gulp bower webpack typescript tsd tslint karma-cli jasmine phantomjs
```

**1つずつ入れたい人はここから下を**

---
## [gulp](http://gulpjs.com/)
Node.js上で動作するタスクランナー
CLIで使いたいのでグローバルインストール
1. インストール
```bash
npm install gulp -g
```
1. `gulp -v` でバージョンチェック

## [Bower](http://bower.io/)
フロントエンド用パッケージマネージャ
1. インストール
```bash
npm install -g bower
```
1. `bower -v` でバージョンチェック

## [webpack](http://webpack.github.io/docs/)
静的なファイルの依存関係を解決しつつ結合したり分割したりするツール
Browserifyとの大きな違いは以下の２点…かな？
* カスタマイズ性
loader と組み合わせてCSSだろうとSASSだろうと画像だろうと処理できる
* 複数の書き出しが可能
エントリーポイントを複数していすることで、
書き出し先を別々にすることができる

```bash
npm install -g webpack
```

## [TypeScript](http://www.typescriptlang.org/)
JavaScriptに静的型付けとクラスベースオブジェクト指向を加えたスーパーセット
詳しくは[こちら](https://ja.wikipedia.org/wiki/TypeScript)。
1. インストール
```bash
npm install -g typescript
```
1. `tsc -v` でバージョンチェック
1. TSD(TypeScript Definition manager)をインストール
```bash
npm install -g tsd
```

## [Lint](https://ja.wikipedia.org/wiki/Lint)
ソースチェッカー
今回はTypeScript専用のTSLintを使用
```bash
npm install -g tslint
```

## [Karma](http://karma-runner.github.io/0.12/index.html)
Node.js上で動作するテストランナー
```bash
npm install -g karma-cli
```

## [Jasmine](http://jasmine.github.io/)
JavaScript用のBDDテスティングフレームワーク
spyOnでモックを実現できる
```bash
npm install -g jasmine
```

## [PhantomJS](http://phantomjs.org/)
直訳すると、JavaScript APIを通して制御可能な画面のないWebKitブラウザ…といった感じのもの。
* 任意のタイミングでキャプチャ
* ページ内での任意のJavaScriptコードの実行
* 指定したボタンのイベントを動作（発火）させる
* Cookieの書き換え
* UserAgentの書き換え
* JavaScriptエラーの取得
* Ajaxや画像など様々なリクエストの監視
…etc

がスクリプト上で実行可能
```bash
npm install -g phantomjs
```

# プロジェクト環境の構築
## 事前準備
* 新規構築の場合
プロジェクトディレクトリの作成
これ以降の作業は全てプロジェクトディレクトリ直下で実行
```bash
mkdir path/to/your_project_name
```
* プロジェクトディレクトリ以下を丸コピした場合
下記コマンドのみ実行し、
これ以降の手順は不要
```bash
cd path/to/your_project_name
npm-check-updates -u
npm update
bower update
```

# 使用ライブラリのインストール
各パッケージの説明と個別インストール方法は省略
興味がある場合は各自参照でお願いします。
1. package.json, bower.json, gulpfile.js, hologram_config.yml, karma.conf.js, tslint.json, config.rb, tsd.json, tsconfig.json, webpack.config.js をプロジェクト直下に配置
1. **管理者権限で**(※) `npm install`を実行
※Macでは不要かも
1. `bower install`を実行


# 環境構築
## スタイルガイドジェネレータ
1. hologram_config.yml を一時的にリネームして、`hologram init` を実行
1. hologram_config.ymlを元に戻す

## ユニットテスト
1. `jasmine init` でテスト用ディレクトリを生成

## ディレクトリを配置
```bash
mkdir src www
mkdir src/sass src/ts
```

この時点でこのような感じになっていればOK
├─bower_components
├─code_example_templates
├─doc_assets
├─node_modules
├─spec
│  └─support
├─src
│  ├─sass
│  └─ts
└─www

## TypeScript用型定義ファイルの追加
```bash
tsd reinstall
```

* 以降、使用外部ライブラリが増える毎に、
`tsd install ...` を実行すること

### Three.jsの型定義ファイルの追加
WebGLといえばThree.js…かどうかはともかく、
TypeScript が WebAudio をサポートした関係でエラーが発生するので、
二重定義でエラーが発生しないようにする
```bash
tsd query three
# 依存ライブラリも併せてインストールしておくこと
tsd install three -rs
```

続けて、下記２ファイルを編集

```ts
// tsd.d.ts
- /// <reference path="webaudioapi/waa.d.ts" />

// tsd.json
-    "webaudioapi/waa.d.ts": {
-      …
-    },
```

### node.jsの型定義ファイルの追加
require を記述しても怒られないようにするために、
node.jsの型定義をインストールしておく必要がある。

…が、[ここ](https://github.com/borisyankov/DefinitelyTyped/issues/4249)にあるように怒られてしまうので、
型定義を編集しておく必要がある
※TypeScript 1.6 ～になったら解消するかも

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

## Karma のバグ対応
Karma@0.13.3 & karma-webpack@1.6.0 だと、
`Can not load "webpack"!` と怒られるので、
解消するまでダウングレードしておく
[Karma can't load webpack](http://stackoverflow.com/questions/31444743/karma-cant-load-webpack)
[Can not load "webpack" #1497](https://github.com/karma-runner/karma/issues/1497)

```bash
npm install -g karma@0.12.31
npm install karma@0.12.31
```

# bower じゃ管理しきれないライブラリ
## zepto.js
bowerで管理できないこともないけど、
* 自分でbuildしないと使えない
* 公式でDLできる標準バージョンで十分

といった理由で、公式からDLして利用する
1. [公式サイト](http://zeptojs.com/)から最新版をDL
1. libs 直下に zeptojs ディレクトリを作成
1. libs/zeptojs 直下に配置