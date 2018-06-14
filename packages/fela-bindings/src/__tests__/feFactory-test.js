import React, { createElement, Component, createContext } from 'react'
import TestRenderer from 'react-test-renderer'

import themeContext from '../themeContext'
import rendererContext from '../rendererContext'
import feFactory from '../feFactory'

import createRenderer from '../../../fela/src/createRenderer'
import renderToString from '../../../fela-tools/src/renderToString'

const { Theme } = themeContext(createElement, createContext)
const { RendererProvider, FelaComponent } = rendererContext(
  createElement,
  Component,
  createContext,
  Theme
)
const fe = feFactory(createElement, FelaComponent)

describe('Using fe', () => {
  it('should render inline style as CSS', () => {
    const renderer = createRenderer()

    const Comp = () =>
      fe(
        'div',
        {
          css: {
            color: 'red',
            ':hover': {
              color: 'blue',
            },
          },
        },
        'Hello'
      )

    const wrapper = TestRenderer.create(
      <RendererProvider renderer={renderer}>
        <Comp />
      </RendererProvider>
    )

    expect([renderToString(renderer), wrapper.toJSON()]).toMatchSnapshot()
  })

  it('should merge class names', () => {
    const renderer = createRenderer()

    const Comp = () =>
      fe(
        'div',
        {
          className: 'foo-bar baz',
          css: {
            color: 'red',
            ':hover': {
              color: 'blue',
            },
          },
        },
        'Hello'
      )

    const wrapper = TestRenderer.create(
      <RendererProvider renderer={renderer}>
        <Comp />
      </RendererProvider>
    )

    expect([renderToString(renderer), wrapper.toJSON()]).toMatchSnapshot()
  })
})
