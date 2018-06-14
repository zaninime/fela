import React, { createElement, createContext } from 'react'
import TestRenderer from 'react-test-renderer'

import themeContext from '../themeContext'

const { ThemeProvider, Theme } = themeContext(createElement, createContext)

describe('Using the Theme Component', () => {
  it('should use children as its render method', () => {
    const wrapper = TestRenderer.create(
      <ThemeProvider theme={{ color: 'red' }}>
        <Theme>{theme => <div>{JSON.stringify(theme)}</div>}</Theme>
      </ThemeProvider>
    )

    expect(wrapper.toJSON()).toMatchSnapshot()
  })

  it('should use render as its render method', () => {
    const wrapper = TestRenderer.create(
      <ThemeProvider theme={{ color: 'red' }}>
        <Theme render={theme => <div>{JSON.stringify(theme)}</div>} />
      </ThemeProvider>
    )

    expect(wrapper.toJSON()).toMatchSnapshot()
  })

  it('should merge themes', () => {
    const wrapper = TestRenderer.create(
      <ThemeProvider theme={{ color: 'red' }}>
        <ThemeProvider theme={{ bgColor: 'blue' }}>
          <Theme render={theme => <div>{JSON.stringify(theme)}</div>} />
        </ThemeProvider>
      </ThemeProvider>
    )

    expect(wrapper.toJSON()).toMatchSnapshot()
  })

  it('should replace themes', () => {
    const wrapper = TestRenderer.create(
      <ThemeProvider theme={{ color: 'red' }}>
        <ThemeProvider replace theme={{ bgColor: 'blue' }}>
          <Theme render={theme => <div>{JSON.stringify(theme)}</div>} />
        </ThemeProvider>
      </ThemeProvider>
    )

    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})
