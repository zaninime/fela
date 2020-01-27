/* @flow */
import { Component } from 'inferno'
import { createElement } from 'inferno-create-element'
import { connectFactory } from '@zaninime/fela-bindings'

import { RendererContext, ThemeContext } from './context'

export default connectFactory(
  Component,
  createElement,
  RendererContext,
  ThemeContext
)
