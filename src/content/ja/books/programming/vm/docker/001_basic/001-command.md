---
title: コマンド
description: Dockerのコマンド
thumbnail:
type: page
tags:
  - 基本
---

# コマンド

## docker

### run

実行する

```shell
docker run {{image-name}}
```

Image によては、コマンドを追加することもできます

```shell
docker run {{image-name}} {{command}}
```

Container のポートと Local のポートの紐付けを行う

```shell
docker run -p {{local-port}}:{{container-port}} {{image-name}}
```

裏側で実行する（ `docker ps` で確認可能）

```shell
docker run -d {{image-name}}
```

Container が Local のファイルを参照するようにする  
変更を Build せずに確認することができるようになる  
（現在いるフォルダの位置を `$(pwd)` を利用して書くこともできる）

```shell
docker run -v {{local-path}}:{{container-path}} {{image-name}}
```

```shell
docker run -v $(pwd):app {{image-name}}
```

### ps

実行中の Container 一覧を表示する

```shell
docker ps
```

過去に実行したもの含めて、全ての Container 一覧を表示する

```shell
docker ps -a
```

### create

Container を作成する

```shell
docker create {{image-name}}
```

### start

Container を実行する

```shell
docker start {{container-id}}
```

出力をターミナルに表示するようにする

```shell
docker start -a {{container-id}}
```

### logs

Container を実行した際のログを表示する

```shell
docker logs {{container-id}}
```

### stop

実行中の Container を止める

```shell
docker stop {{container-id}}
```

### kill

実行中の Container を強制的に止める

```shell
docker kill {{container-id}}
```

### exec

実行中の Container でコマンドを実行する  
-i: Command を実行する際、Container の入力を Docker ホストの入力と接続します。  
-t: Docker ホストの出力と接続します。

```shell
docker exec -it {{container-id}} {{command}}
```

### build

Build を行う

```shell
docker build .
```

Build をして Image の作成する  
-t: 名前とタグを設定する

```shell
docker build -t {{docker-id}}/{{repo-name}}:{{tag}} .
```

Dockerfile ファイルを指定して Build を行う

```shell
docker build -f {{dockerfile}} .
```

## docker-compose

### up

関連する Container を実行する

```shell
docker-compose up
```

関連する Container を Build して実行する  
（中のコードを変更した際などに利用する）

```shell
docker-compose up --build
```

関連する Container を裏側で実行する

```shell
docker-compose up -d
```

### down

実行中の関連する Container を止める

```shell
docker-compose down
```
