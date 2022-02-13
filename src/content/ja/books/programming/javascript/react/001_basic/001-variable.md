---
title: 変数
description: React
thumbnail:
type: page
tags:
  - 基本
---

# 変数

## 変数の表示

```ts {} [ExampleItem.ts]
import React from 'react'

const ExampleItem = () => {
  const title = 'Hello World!'

  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}

export default ExampleItem
```

## 変数の更新

React では、値を代入し直しただけでは更新されない。

**動かない書き方**

```ts {} [ExampleItem.ts]
import React from 'react'

const ExampleItem = () => {
  let title = 'Hello World!'

  const changeTitle = () => {
    title = 'Bye!'
  }

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={changeTitle}>Change Title</button>
    </div>
  )
}

export default ExampleItem
```

**動く書き方**

```ts {} [ExampleItem.ts]
import React, { useState } from 'react'

const ExampleItem = () => {
  const [title, setTitle] = useState('Hello World!')

  const changeTitle = () => {
    setTitle('Bye!')
  }

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={changeTitle}>Change Title</button>
    </div>
  )
}

export default ExampleItem
```
