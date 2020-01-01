# cx.macro

## Why?

When applying class names conditionally to dom elements or components, I found it quite tedious to always write code that looks like this `["c1", cond && "c2"].filter(Boolean).join(" ")`.
So I created a macro that helps reducing the boilerplate at compile time.

## What?

turns

```js
import cx from "cx.macro";

<div className={cx("c1", cond && "c2", variants[val])} />;
```

into

```js
<div className={["c1", cond && "c2", variants[val]].filter(Boolean).join(" ")} />
```
