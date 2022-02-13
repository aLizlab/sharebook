---
title: リスト
description: React
thumbnail:
type: page
tags:
  - 基本
---

# リスト

## 基本的なリストの表示

key には、出来るだけリストのそれぞれのアイテムの固有の値（id など）を代入する
（リストにアイテムを追加や削除した時、リストがバグることがあるため）

```ts {} [ExampleItem.ts]
import React from 'react'

const ExampleItem = () => {
  const list = ['Apple', 'Orange', 'Banana', 'Grape']

  return (
    <div>
      {list.map((item, index) => {
        ;<div key={index}>
          <p>{item}</p>
        </div>
      })}
    </div>
  )
}

export default ExampleItem
```

## データの追加可能なリスト

```ts {} [ExampleItem.ts]
import React, { useState } from 'react'

const ExampleItem = () => {
  const [list, setList] = useState(['Apple', 'Orange', 'Banana', 'Grape'])

  const addListHandler = (newItem) => {
    setList((prevList) => {
      return [...prevList, newItem]
    })
  }

  return (
    <div>
      {list.map((item, index) => {
        ;<div key={index}>
          <p>{item}</p>
        </div>
      })}
      <button onClick={addListHandler('New Fruit')}>New Fruit</button>
    </div>
  )
}

export default ExampleItem
```
