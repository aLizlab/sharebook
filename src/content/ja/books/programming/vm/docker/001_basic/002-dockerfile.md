---
title: Dockerfile
description: Dockerfileについて
thumbnail:
type: page
tags:
  - 基本
---

# Dockerfile

## 基本

```dockerfile {} [Dockerfile]
# ベースの Image
FROM alpine

# 関連する物のダウンロードとインストール
RUN apk add --update redis

# 最後に実行するコマンド
CMD ["redis-server"]
```

## コマンド

参考サイト： [dockerfile の EXPOSE とネットワークオプション（dockerfile のコマンド）](https://zenn.dev/suiudou/articles/5e1dfd1008bf29#%E2%96%A0dockerfile%E3%81%AE%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89)

### WORKDIR

コマンドなど、ベースの Image でコマンドなどを実行するディレクトリを指定する。

```dockerfile {} [Dockerfile]
FROM node:alpine

WORKDIR /usr/app

COPY ./ ./
RUN npm install

CMD ["npm", "start"]
```

### CACHE

変化がない場合は Cache が利用できるため、実行する順番を気をつけることで Build の時間を短くできる。

```dockerfile {} [Dockerfile]
FROM node:alpine

WORKDIR /usr/app

COPY ./package.json ./ # 変更をする JS などのファイルに関する処理を後回しにする
RUN npm install
COPY ./ ./

CMD ["npm", "start"]
```

### EXPOSE

公開ポートを設定する

```dockerfile {} [Dockerfile]
FROM node:16-alpine as builder
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html
```

## マルチステージビルド

Dockerfile を 2 つに分けずに、1 つで運用することもできます。
その際、 `as {{name}}` で Stage に名前をつけることができます。
Stage に名前をつけることで、Stage を跨いだ `COPY` などをすることができるようになります。

```dockerfile {} [Dockerfile]
FROM node:16-alpine as builder
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html
```
