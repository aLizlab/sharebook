---
title: 基本
description: React
thumbnail:
type: page
tags:
  - 基本
---

# 基本

## テキストの入力

```ts {} [ExampleForm.ts]
import React, { useState } from 'react'

const ExampleForm = () => {
  const [enteredText, setEnteredText] = useState('')

  const submitHandler = (event) => {
    // リロードしないようにする
    event.preventDefault()

    // 文字数が 0 の時は送信しないようにする
    if (enteredText.trim().length === 0) {
      return
    }

    // 入力部分を初期化
    setEnteredText('')
  }

  const textChangeHandler = (event) => {
    setEnteredText(event.target.value)
  }

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Text</label>
      <input
        id="text"
        type="text"
        value={enteredText}
        onChange={textChangeHandler}
      />

      <button type="submit">Submit</button>
    </form>
  )
}

export default ExampleForm
```
