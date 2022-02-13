---
title: 切り替え
description: React
thumbnail:
type: page
tags:
  - 基本
---

# 切り替え

## 使用例

### 条件で分岐する場合

```ts {} [ExampleItem.ts]
import React, { useState } from 'react';

const ExampleItem = () => {
  const [switch, setSwitch] = useState(false);

  const switchHandler = () => {
    setSwitch(!switch);
  };

  return (
    <div>
      {switch ? (
        <div>
          <p>ON</p>
        </div>
      ) : (
        <div>
          <p>OFF</p>
        </div>
      )}
      <button onClick={switchHandler}>
        Switch
      </button>
    </div>
  )
}

export default ExampleItem;
```

### 条件を満たす場合

```ts {} [ExampleItem.ts]
import React, { useState } from 'react';

const ExampleItem = () => {
  const [switch, setSwitch] = useState(false);

  const switchHandler = () => {
    setSwitch(!switch);
  };

  return (
    <div>
      {switch && (
        <div>
          <p>ON</p>
        </div>
      )}
      <button onClick={switchHandler}>
        Switch
      </button>
    </div>
  )
}

export default ExampleItem;
```
