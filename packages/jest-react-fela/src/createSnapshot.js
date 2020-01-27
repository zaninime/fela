import { createElement } from 'react'
import { render } from 'react-dom'
import { createRenderer } from '@zaninime/fela'
import { RendererProvider, ThemeProvider } from '@zaninime/react-fela'

import { createSnapshotFactory } from '@zaninime/jest-fela-bindings'

export default createSnapshotFactory(
  createElement,
  render,
  createRenderer(),
  RendererProvider,
  ThemeProvider
)
