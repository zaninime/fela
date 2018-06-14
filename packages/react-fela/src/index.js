/* @flow */
import { createElement, createContext, Component } from 'react'
import { themeContext, rendererContext, feFactory } from 'fela-bindings'

const fe = feFactory(createElement, FelaComponent)
const { Theme, ThemeProvider } = themeContext(createElement, createContext)
const { RendererProvider, FelaComponent, FelaConnect } = rendererContext(
  createElement,
  Component,
  createContext,
  Theme
)

export {
  RendererProvider,
  FelaComponent,
  FelaConnect,
  ThemeProvider,
  Theme,
  fe,
}
