/* @flow */
// $FlowFixMe
import { Component, h as createElement } from 'preact'
import { RendererProviderFactory } from '@zaninime/fela-bindings'

import { RendererContext } from './context'

export default RendererProviderFactory(
  Component,
  RendererContext,
  createElement,
  children => children,
  {
    defaultProps: {
      renderToDOM: true,
      rehydrate: true,
    },
  }
)
