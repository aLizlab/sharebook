---
title: スタイル
description: React
thumbnail:
type: page
tags:
  - 基本
---

# スタイル

## style を直接指定する場合

```ts {} [ExampleItem.ts]
import React, { useState } from 'react'

const ExampleItem = () => {
  return (
    <div>
      <p style={{ color: 'red' }}>Example Item</p>
    </div>
  )
}

export default ExampleItem
```

## CSS ファイルを使用する場合

```ts {} [ExampleItem.ts]
import React, { useState } from 'react'

import './ExampleItem.css'

const ExampleItem = () => {
  return (
    <div>
      <p className="text">Example Item</p>
    </div>
  )
}

export default ExampleItem
```

```css {} [ExampleItem.css]
.text {
  color: red;
}
```

## styled-components を使用する場合

```ts {} [ExampleItem.ts]
import React, { useState } from 'react'
import styled from 'styled-components'

const Test = styled.p`
  color: red;
`

const ExampleItem = () => {
  return (
    <div>
      <Test>Example Item</Test>
    </div>
  )
}

export default ExampleItem
```

## CSS Module を使用する場合

```ts {} [ExampleItem.ts]
import React, { useState } from 'react'

import classes from './ExampleItem.css'

const ExampleItem = () => {
  return (
    <div>
      <p className={classes.text}>Example Item</p>
    </div>
  )
}

export default ExampleItem
```

```css {} [ExampleItem.module.css]
.text {
  color: red;
}
```
