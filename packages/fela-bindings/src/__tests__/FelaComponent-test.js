import React, { createElement, Component, createContext } from 'react'
import TestRenderer from 'react-test-renderer'

import themeContext from '../themeContext'
import rendererContext from '../rendererContext'

import createRenderer from '../../../fela/src/createRenderer'
import renderToString from '../../../fela-tools/src/renderToString'

const { Theme, ThemeProvider } = themeContext(createElement, createContext)
const { RendererProvider, FelaComponent } = rendererContext(
  createElement,
  Component,
  createContext,
  Theme
)

describe('Using the FelaComponent component', () => {
  it('should correctly render a fela rule', () => {
    const renderer = createRenderer()

    const wrapper = TestRenderer.create(
      <RendererProvider renderer={renderer}>
        <FelaComponent
          style={{
            fontSize: '12px',
            color: 'red',
          }}
          render={({ className }) => (
            <div className={className}>I am red and written in 12px.</div>
          )}
        />
      </RendererProvider>
    )

    expect([renderToString(renderer), wrapper.toJSON()]).toMatchSnapshot()
  })

  it('should correctly render using children as its render function', () => {
    const renderer = createRenderer()

    const wrapper = TestRenderer.create(
      <RendererProvider renderer={renderer}>
        <FelaComponent
          style={{
            fontSize: '12px',
            color: 'red',
          }}>
          {({ className }) => (
            <div className={className}>I am red and written in 12px.</div>
          )}
        </FelaComponent>
      </RendererProvider>
    )

    expect([renderToString(renderer), wrapper.toJSON()]).toMatchSnapshot()
  })

  it('should correctly concat a custom class', () => {
    const renderer = createRenderer()

    const wrapper = TestRenderer.create(
      <RendererProvider renderer={renderer}>
        <FelaComponent
          customClass="button"
          style={{
            fontSize: '12px',
            color: 'red',
          }}
          render={({ className }) => (
            <div className={className}>I'm a red button written in 12px.</div>
          )}
        />
      </RendererProvider>
    )

    expect([renderToString(renderer), wrapper.toJSON()]).toMatchSnapshot()
  })

  it('should correctly injects the theme to the style function', () => {
    const renderer = createRenderer()

    const wrapper = TestRenderer.create(
      <RendererProvider renderer={renderer}>
        <ThemeProvider theme={{ fontSize: '12px' }}>
          <FelaComponent
            style={theme => ({
              fontSize: theme.fontSize,
              color: 'red',
            })}
            render={({ className }) => (
              <div className={className}>I'm red written in 12px.</div>
            )}
          />
        </ThemeProvider>
      </RendererProvider>
    )

    expect([renderToString(renderer), wrapper.toJSON()]).toMatchSnapshot()
  })

  it('should correctly passes all props to the rule', () => {
    const renderer = createRenderer()

    const wrapper = TestRenderer.create(
      <RendererProvider renderer={renderer}>
        <ThemeProvider theme={{ fontSize: '12px' }}>
          <FelaComponent
            color="red"
            rule={({ theme, color }) => ({
              fontSize: theme.fontSize,
              color,
            })}
            render={({ className }) => (
              <div className={className}>I'm red written in 12px.</div>
            )}
          />
        </ThemeProvider>
      </RendererProvider>
    )

    expect([renderToString(renderer), wrapper.toJSON()]).toMatchSnapshot()
  })

  it('should correctly render to primitives', () => {
    const renderer = createRenderer()

    const wrapper = TestRenderer.create(
      <RendererProvider renderer={renderer}>
        <FelaComponent
          style={{ fontSize: '12px', color: 'red' }}
          render="span"
        />
      </RendererProvider>
    )

    expect([renderToString(renderer), wrapper.toJSON()]).toMatchSnapshot()
  })

  it('should correctly pass children in primitive mode', () => {
    const renderer = createRenderer()

    const wrapper = TestRenderer.create(
      <RendererProvider renderer={renderer}>
        <FelaComponent style={{ fontSize: '12px', color: 'red' }}>
          I'm red and written in 12px
        </FelaComponent>
      </RendererProvider>
    )

    expect([renderToString(renderer), wrapper.toJSON()]).toMatchSnapshot()
  })
})
