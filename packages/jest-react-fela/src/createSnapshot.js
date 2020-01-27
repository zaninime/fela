import { createElement } from 'react'
import { render } from 'react-dom'
import { createRenderer } from '@fela-next/fela'
import { RendererProvider, ThemeProvider } from '@fela-next/react-fela'

import { createSnapshotFactory } from '@fela-next/jest-fela-bindings'

export default createSnapshotFactory(
  createElement,
  render,
  createRenderer(),
  RendererProvider,
  ThemeProvider
)
