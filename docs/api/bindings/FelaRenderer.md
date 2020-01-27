# FelaRenderer

FelaRenderer is a consumer component leveraging the render-props pattern. It can be used to access the renderer object that is passed down via [context](https://facebook.github.io/react/docs/context.html) by a [RendererProvider](RendererProvider.md).

## Props

| Property | Type | Description |
| --- | --- | --- |
| children | *Function* | A render function that receives the renderer object as its first parameter. |

## Imports
```javascript
import { FelaRenderer } from '@zaninime/react-fela'
import { FelaRenderer } from '@zaninime/preact-fela'
import { FelaRenderer } from '@zaninime/inferno-fela'
```

## Example
```javascript
<FelaRenderer>
  {renderer => (
    // do something with the renderer
  )}
</FelaRenderer>
```