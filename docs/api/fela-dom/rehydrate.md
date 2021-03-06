# rehydrate

> This method is used for universal rendering where styles are prerender on the server. For client-side only rendering, we recommend using [render](render.md) directly.

Rehydrates the renderer's cache from existing `<style>` elements.<br>It is primarily used to rehydrate the cache from server-rendered CSS.

It automatically connects the renderer with the DOM by calling [render](render.md) once finished rehydrating.

## Arguments
| Argument | Type | Description |
| --- | --- | --- |
| renderer | [*Renderer*](../fela/Renderer.md) | The renderer which's cache is rehydrated. |


## Example

Assuming we have the following server-rendered elements:
```HTML
<style data-fela-type="RULE">.a{color:red}.b{color:blue}</style>
```

```javascript
import { createRenderer } from 'fela'
import { rehydrate } from 'fela-dom'

const renderer = createRenderer()

rehydrate(renderer)

const rule = props => ({
  color: props.color
})

renderer.renderRule(rule, { color: 'red' }) // => a
renderer.renderRule(rule, { color: 'green' }) // => c
renderer.renderRule(rule, { color: 'blue' }) // => b
```
