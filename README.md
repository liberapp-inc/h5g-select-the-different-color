## 環境構築

### 問題： `egret`コマンドがないと言われる

- `Egret Launcher`の`Engines`から`Repair`する
- 再起動する

### 問題：`Could not find module : physics`がでたら

- プロジェクトフォルダの一つ上に
- `git clone https://github.com/egret-labs/egret-game-library`
- (参考資料:https://qiita.com/motoyasu-yamada/items/c5facea39b0102d7a365)
- そもそも不要なのでいったん削除

### 問題: `SdkError(UNKOWN)`

ブラウザーの URL を `http://localhost:3000/index.html` に書き換える

### APKの作成

`PowerShell -ExecutionPolicy RemoteSigned .\archive.ps1 v2`
