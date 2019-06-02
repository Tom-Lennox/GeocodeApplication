# GeocodeApplication

## 概要
Google MapのAPIを利用して、入力住所をリクエスト → 表示地図に反映する。  

## 作成動機
業務で使用するVueとの比較。  
実際に触らなければ評価ができないため。  

## 注意点
GoogleのAPIを入力しないと利用できません。  

## 使用技術・習得技術
### 【React】
Reactを使用することが主目的。  
Vueと比較して秩序立ててコーディングをしていかないとすぐに表示されなくなる点が非常に好み。  

### 【Sass】
業務ではほとんど触れることのない『Sass』に挑戦。  
変数が使用できる時点で通常のcssとは保守性で圧倒できる。  

### 【Yarn】
今回からnpmでなくYarnを利用。  
体感では数倍速く感じる。  

## コーディング以外の習得知識
### 『Google Cloud Platform』 APIの発行手続き
#### 概要
以前は無料で利用できたGoogleのMapAPIが使用できなくなっていたので新規対応。  
請求先を指定の上、申請を行うと利用できるようになる。  

#### 【Maps JavaScript API】
初期設定ではリファラーの制限が無いので必ず設定する。  
地図表示に使用。  

#### 【Geocoding API】
同上 + アクセス上限が無制限なので適宜変更する。  
緯度経度の取得に使用。  
 
 ## インストールしたパッケージ郡
・axios  
・babel-core  
・babel-loader  
・babel-preset-es2015  
・babel-preset-react  
・css-loader  
・extract-text-webpack-plugin  
・geolib  
・import-glob-loader  
・lodash  
・node-sass  
・prop-types  
・query-string  
・react  
・react-dom  
・react-google-maps  
・react-redux  
・react-router-dom  
・redux  
・redux-devtools  
・redux-devtools-extension  
・redux-thunk  
・sass-loader  
・style-loader  
・webpack  
・webpack-dev-server  
・eslint  
・eslint-config-airbnb  
・eslint-plugin-import  
・eslint-plugin-jsx-a11y  
・eslint-plugin-react  
・node-sass  
・style-loader  
・css-loader  
・sass-loader  
・import-glob-loader  
・extract-text-webpack-plugin  
