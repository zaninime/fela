import { render } from 'inferno'
import { createElement } from 'inferno-create-element'
import { createRenderer } from '@zaninime/fela'
import { RendererProvider, ThemeProvider } from '@zaninime/inferno-fela'

import { createSnapshotFactory } from '@zaninime/jest-fela-bindings'

export default createSnapshotFactory(
  createElement,
  render,
  createRenderer(),
  RendererProvider,
  ThemeProvider
)
