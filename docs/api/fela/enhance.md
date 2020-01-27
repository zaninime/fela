# enhance

Composes a renderer enhancer to enhance the basic [createRenderer](createRenderer.md) function. You can also [pass](../../advanced/RendererConfiguration.md) `enhancers` to [createRenderer](createRenderer.md) directly which makes the use of `enhance` optional.

## Arguments
Accepts a list of [enhancers](../../advanced/Enhancers.md). 

## Returns
(*Function*): Renderer enhancer which is used to enhance the [createRenderer](createRenderer.md) function.

## Example
```javascript
import { createRenderer, enhance } from '@zaninime/fela'
import perf from '@zaninime/fela-perf'
import beautifier from '@zaninime/fela-beautifier'

const enhancer = enhance(
  perf(),
  beautifier()
)

const createEnhancedRenderer = enhancer(createRenderer)

const enhancedRenderer = createEnhancedRenderer()
```
You may also directly apply the enhancer using the following short version.


```javascript
const createEnhancedRenderer = enhance(
  perf(),
  beautifier()
)(createRenderer)

// or even shorter by directly creating the renderer
// but this is not very easy to read though
const renderer = enhance(
  perf(),
  beautifier()
)(createRenderer)()
```
