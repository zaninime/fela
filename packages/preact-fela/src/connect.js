/* @flow */
// $FlowFixMe
import { h as createElement, Component } from 'preact'
import { connectFactory } from '@zaninime/fela-bindings'

import { RendererContext, ThemeContext } from './context'

export default connectFactory(
  Component,
  createElement,
  RendererContext,
  ThemeContext
)
