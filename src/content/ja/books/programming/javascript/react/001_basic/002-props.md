---
title: Props
description: React
thumbnail:
type: page
tags:
  - 基本
---

# Props

## Props の受け渡し

```ts {} [ExampleParent.ts]
import React from 'react'

import ExampleChild from './{{ path }}/ExampleChild'

const ExampleParent = () => {
  return (
    <div>
      <ExampleChild title="Hello World!" />
    </div>
  )
}

export default ExampleParent
```

```ts {} [ExampleChild.ts]
import React from 'react'

const ExampleChild = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  )
}

export default ExampleChild
```

## Children

```ts {} [ExampleItem.ts]
import React from 'react'

import ExampleWrap from './{{ path }}/ExampleWrap'

const ExampleItem = () => {
  return (
    <div>
      <ExampleWrap>
        <p>Hello World!</p>
      </ExampleWrap>
    </div>
  )
}

export default ExampleParent
```

```ts {} [ExampleWrap.ts]
import React from 'react'

const ExampleWrap = (props) => {
  const classes = `ExampleWrap ${props.className}`

  return <div className={classes}>{props.children}</div>
}

export default ExampleWrap
```
