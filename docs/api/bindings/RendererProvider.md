# RendererProvider

RendererProvider is used to pass the Fela renderer down to all your child components. It uses the [context](https://facebook.github.io/react/docs/context.html) feature to do so. It actually is all you need to fully use Fela within your application.

## Props

| Property | Type | Description |
| --- | --- |  --- |
| renderer | *[Renderer](../../basics/Renderer.md)* | The Fela renderer which is used to actually render our styles. | 

## Imports
```javascript
import { RendererProvider } from '@zaninime/react-fela'
import { RendererProvider } from '@zaninime/preact-fela'
import { RendererProvider } from '@zaninime/inferno-fela'
```

## Example
```javascript
import { createRenderer } from '@zaninime/fela'

const renderer = createRenderer()

// Wrap your root application with the RendererProvider
// to pass down the renderer to every component using context
<RendererProvider renderer={renderer}>
  <App />
</RendererProvider>
```