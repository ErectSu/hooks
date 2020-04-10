---
title: useFormTable
nav:
  title: Hooks
  path: /hooks
group:
  title: 组件
  path: /antd
  order: 10
legacy: /antd/use-form-table
---

# useFormTable

封装了常用的 AntD [Form](https://ant.design/components/form-cn/) 与 AntD [Table](https://ant.design/components/table-cn/) 联动逻辑

## 代码演示

### Form 与 Table 联动

<code src="./demo/demo1.tsx" />

### 数据缓存

<code src="./demo/demo2.tsx" />

## API

useFormTable 基于 [useRequest](/zh-CN/async) 实现，所有的 [useRquest Pagination](/zh-CN/async?anchor=pagination#api-1) API 均可以直接使用。比如 `cacheKey`、`manual` 等等。

useFormTable 额外增加了 `result.search` 和 `options.form`。

```javascript
const {
  ...,
  search: {
    type: 'simple' | 'advance';
    changeType: () => void;
    submit: () => void;
    reset: () => void;
  };
} = useFormTable(
  service,
  {
    ...,
    form
  }
);
```