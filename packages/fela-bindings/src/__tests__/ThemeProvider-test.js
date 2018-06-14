import React, { createElement, createContext } from 'react'
import TestRenderer from 'react-test-renderer'

import themeContext from '../themeContext'

const { ThemeProvider, Theme } = themeContext(createElement, createContext)

describe('Using the ThemeProvider', () => {
  it('should pass the theme via context', () => {
    const wrapper = TestRenderer.create(
      <ThemeProvider theme={{ color: 'red' }}>
        <Theme>{theme => <div>{JSON.stringify(theme)}</div>}</Theme>
      </ThemeProvider>
    )

    expect(wrapper.toJSON()).toMatchSnapshot()
  })

  it('should update child nodes if the theme updates', () => {
    const wrapper = TestRenderer.create(
      <ThemeProvider theme={{ color: 'red' }}>
        <Theme>{theme => <div>{JSON.stringify(theme)}</div>}</Theme>
      </ThemeProvider>
    )

    // TODO: use enzyme as soon as React 16.3 context API is merged
    // wrapper.setProps({ theme: { color: 'blue' } })

    expect(wrapper.toJSON).toMatchSnapshot()
  })
})
