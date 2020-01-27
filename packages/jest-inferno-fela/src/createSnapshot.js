import { render } from 'inferno'
import { createElement } from 'inferno-create-element'
import { createRenderer } from '@fela-next/fela'
import { RendererProvider, ThemeProvider } from '@fela-next/inferno-fela'

import { createSnapshotFactory } from '@fela-next/jest-fela-bindings'

export default createSnapshotFactory(
  createElement,
  render,
  createRenderer(),
  RendererProvider,
  ThemeProvider
)
