---
title: イベント
description: React
thumbnail:
type: page
tags:
  - 基本
---

# イベント

[参考サイト（MDN）](https://developer.mozilla.org/ja/docs/Web/API/Element#events)（Element で取得可能なイベント一覧です）

## 基本的なイベントの利用

```ts {} [ExampleItem.ts]
import React from 'react'

const ExampleItem = () => {
  const sayHello = () => {
    console.log('Hello World!')
  }

  return (
    <div>
      <button onClick={sayHello}>Say "Hello World!"</button>
    </div>
  )
}

export default ExampleItem
```

## 親にイベントを渡す場合

```ts {} [ExampleParent.ts]
import React from 'react'

import ExampleChild from './{{ path }}/ExampleChild'

const ExampleParent = () => {
  const onChildEventHandler = (childData) => {
    console.log('onChildEvent: ', childData)
  }

  return (
    <div>
      <ExampleChild onChildEvent={onChildEventHandler} />
    </div>
  )
}

export default ExampleParent
```

```ts {} [ExampleChild.ts]
import React from 'react'

const ExampleChild = (props) => {
  const sayHello = () => {
    props.onChildEvent('Hello World!')
  }

  return (
    <div>
      <button onClick={sayHello}>Say "Hello World!"</button>
    </div>
  )
}

export default ExampleChild
```

## 使用例

### 文字の入力

```ts {} [ExampleItem.ts]
import React, { useState } from 'react';

const ExampleItem = () => {
  const [title, setTitle] = useState('');

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  return (
    <form>
      <label>
        <span>Title<span>
        <input
          value={title}
          onChange={titleChangeHandler}
        />
      </label>
    </div>
  );
}

export default ExampleItem;
```

### フォームの送信

```ts {} [ExampleItem.ts]
import React, { useState } from 'react';

const ExampleItem = () => {
  const [title, setTitle] = useState('');

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enterdData = {
      title: title,
    };

    console.log('enterdData: ', enterdData);

    setTitle('');
  };

  return (
    <form onSubmit={submitHandler}>
      <label>
        <span>Title<span>
        <input
          value={title}
          onChange={titleChangeHandler}
        />
      </label>
      <button>Submit</button>
    </div>
  );
}

export default ExampleItem;
```

### フォームの送信

```ts {} [ExampleItem.ts]
import React, { useState } from 'react';

const ExampleItem = () => {
  const [title, setTitle] = useState('');

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enterdData = {
      title: title,
    };

    console.log('enterdData: ', enterdData);

    setTitle('');
  };

  return (
    <form onSubmit={submitHandler}>
      <label>
        <span>Title<span>
        <input
          value={title}
          onChange={titleChangeHandler}
        />
      </label>
      <button>Submit</button>
    </div>
  );
}

export default ExampleItem;
```
