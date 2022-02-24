---
title: docker-compose
description: docker-composeについて
thumbnail:
type: page
tags:
  - 基本
---

# docker-compose

複数の Container の設定などをまとめて行う。

## 基本

```yaml {} [docker-compose.yml]
version: '3'
services:
  redis-server:
    image: 'redis'
  node-app:
    build: .
    ports:
      - '4001:8081'
```

## build

何を Build するかを指定する

```yaml {} [docker-compose.yml]
version: '3'
services:
  node-app:
    build: .
    ports:
      - '4001:8081'
```

Dockerfile の命名を変更している時

```yaml {} [docker-compose.yml]
version: '3'
services:
  node-app:
    build:
      context: .
      dockerfile: Dockerfile.dev
    ports:
      - '4001:8081'
```

## volumes

Volume を利用する時
変更を Build せずに確認することができるようになる

```yaml {} [docker-compose.yml]
version: '3'
services:
  node-app:
    build: .
    ports:
      - '4001:8081'
    volumes:
      - /app/node_modules
      - .:/app
```

## environment

環境変数を設定する。

```yaml {} [docker-compose.yml]
version: '3'
services:
  node-app:
    restart: always
    build: .
    ports:
      - '4001:8081'
    environment:
      - SERVER_HOST=server
```

## stdin_open

Local のターミナルで Container のターミナルに入力できるようにする。

```yaml {} [docker-compose.yml]
version: '3'
services:
  client:
    stdin_open: true
    build:
      dockerfile: Dockerfile.dev
      context: ./client
    volumes:
      - /app/node_modules
      - ./client:/app
```

```js
process.env.SERVER_HOST
```

## restart

どのタイミングで再起動を行うか

| Policy         | 解説                                                                                     |
| -------------- | ---------------------------------------------------------------------------------------- |
| no             | どういう状況であってもコンテナーは再起動しない                                           |
| always         | コンテナーは常に再起動する                                                               |
| no-failure     | 終了コードが on-failure エラーを表わしている場合にコンテナーが再起動する                 |
| unless-stopped | コンテナーが（手動で、あるいは別の原因で）停止する場合を除き、常にコンテナーが再起動する |

```yaml {} [docker-compose.yml]
version: '3'
services:
  node-app:
    restart: always
    build: .
    ports:
      - '4001:8081'
```
