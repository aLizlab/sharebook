---
title: フラグメント
description: React
thumbnail:
type: page
tags:
  - 基本
---

# フラグメント

## 基本

### 基本的な書き方

```ts {} [ExampleItem.ts]
import React from 'react'

const ExampleItem = () => {
  return (
    <React.Fragment>
      <p>First</p>
      <p>Second</p>
    </React.Fragment>
  )
}

export default ExampleItem
```

### 省略した書き方

```ts {} [ExampleItem.ts]
import React from 'react'

const ExampleItem = () => {
  return (
    <>
      <p>First</p>
      <p>Second</p>
    </>
  )
}

export default ExampleItem
```
