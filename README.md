# typescript-dev

typescriptの開発環境のコマンド実行手順です。
Typescript+mocha+powerassert  

# バージョン

node v4.5.0  
npm  v2.15.9  

# 開発環境の構築

作成するtsファイルは全てutf-8で作成して下さい。  
（コマンドプロンプトで、日本語が文字化けする為）  

参考：  
https://qiita.com/hiroyky/items/b59273abb54a377b988f  

## typescript環境構築

```
$ npm init
$ npm install typescript typings --save-dev
$ tsc --init
$ typings init
$ typings install
$ npm install jquery @types/jquery --save-dev
```

この状態で「tsc」を実行すると「TS2304: Cannot find name 'Iterable'.」  
エラーが出る為下記を追記します。  
https://blog.hrendoh.com/how-to-use-jquery-and-bootstrap-with-react-typescript-webpack/

```tsconfig.json
"compilerOptions": {
    //下記を追記
    "lib" : ["es2015", "es2015.iterable", "dom"]
},
```

```
$ tsc
```

## mocha + power-assertインストール

```
$ npm install mocha @types/mocha --save-dev
$ npm install power-assert @types/power-assert --save-dev
```

```
$ tsc Person.ts
```

依存ファイルがある場合、コンパイルしようとすると下記エラーになる為、テストのtsファイルもtsconfig.jsに追記します。
../node_modules/@types/jquery/index.d.ts(2961,63): error TS2304: Cannot find name 'Iterable'.

追記：
```tsconfig.json
"files":[
    //下記を追記
    "test/Person.ts"
],
```

```
$ npm install ts-node --save-dev
```

下記箇所をテスト実行コマンドに修正します。

```package.json
"scripts": { 
    "test": "mocha --compilers ts:ts-node/register test/**/*.ts"
 },
```

テストを実行するコマンド：

```
$ npm test
```

## カバレッジレポートの作成

```
$ npm install istanbul --save-dev
$ istanbul cover node_modules/mocha/bin/_mocha
```

下記コマンドを打つとエラーになるので、_mochaは相対パスで指定します。 

```
$ istanbul cover _mocha
```

https://github.com/gotwarlost/istanbul/issues/90  
http://yukidarake.hateblo.jp/entry/2015/06/29/202652



