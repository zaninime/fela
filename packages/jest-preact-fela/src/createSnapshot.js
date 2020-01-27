import { createElement, render } from 'preact'
import { createRenderer } from '@zaninime/fela'
import { RendererProvider, ThemeProvider } from '@zaninime/preact-fela'

import { createSnapshotFactory } from '@zaninime/jest-fela-bindings'

export default createSnapshotFactory(
  createElement,
  render,
  createRenderer(),
  RendererProvider,
  ThemeProvider
)
