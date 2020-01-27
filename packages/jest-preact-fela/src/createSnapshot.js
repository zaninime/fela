import { createElement, render } from 'preact'
import { createRenderer } from '@fela-next/fela'
import { RendererProvider, ThemeProvider } from '@fela-next/preact-fela'

import { createSnapshotFactory } from '@fela-next/jest-fela-bindings'

export default createSnapshotFactory(
  createElement,
  render,
  createRenderer(),
  RendererProvider,
  ThemeProvider
)
