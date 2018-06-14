import React, { createElement, Component, createContext } from 'react'
import TestRenderer from 'react-test-renderer'

import themeContext from '../themeContext'
import rendererContext from '../rendererContext'

import createRenderer from '../../../fela/src/createRenderer'
import renderToString from '../../../fela-tools/src/renderToString'

const { Theme, ThemeProvider } = themeContext(createElement, createContext)
const { RendererProvider, FelaConnect } = rendererContext(
  createElement,
  Component,
  createContext,
  Theme
)

describe('Using the FelaConnect component', () => {
  it('should correctly render a fela rule', () => {
    const renderer = createRenderer()

    const styles = {
      container: {
        padding: '10px',
        backgroundColor: 'blue',
      },
      header: {
        fontSize: '17px',
        color: 'red',
      },
    }

    const wrapper = TestRenderer.create(
      <RendererProvider renderer={renderer}>
        <FelaConnect
          styles={styles}
          render={({ classes }) => (
            <div className={classes.container}>
              <h1 className={classes.header}>Hello World</h1>
            </div>
          )}
        />
      </RendererProvider>
    )

    expect([renderToString(renderer), wrapper.toJSON()]).toMatchSnapshot()
  })

  it('should correctly render using children as its render function', () => {
    const renderer = createRenderer()

    const styles = {
      container: {
        padding: '10px',
        backgroundColor: 'blue',
      },
      header: {
        fontSize: '17px',
        color: 'red',
      },
    }

    const wrapper = TestRenderer.create(
      <RendererProvider renderer={renderer}>
        <FelaConnect styles={styles}>
          {({ classes }) => (
            <div className={classes.container}>
              <h1 className={classes.header}>Hello World</h1>
            </div>
          )}
        </FelaConnect>
      </RendererProvider>
    )

    expect([renderToString(renderer), wrapper.toJSON()]).toMatchSnapshot()
  })

  it('should correctly inject theme into the styles', () => {
    const renderer = createRenderer()

    const styles = theme => ({
      container: {
        padding: '10px',
        backgroundColor: theme.bgColor,
      },
      header: {
        fontSize: '17px',
        color: theme.color,
      },
    })

    const wrapper = TestRenderer.create(
      <RendererProvider renderer={renderer}>
        <ThemeProvider theme={{ bgColor: 'blue', color: 'red' }}>
          <FelaConnect
            styles={styles}
            render={({ classes }) => (
              <div className={classes.container}>
                <h1 className={classes.header}>Hello World</h1>
              </div>
            )}
          />
        </ThemeProvider>
      </RendererProvider>
    )

    expect([renderToString(renderer), wrapper.toJSON()]).toMatchSnapshot()
  })
})
