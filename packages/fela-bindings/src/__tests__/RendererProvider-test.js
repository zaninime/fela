import React, { createElement, Component, createContext } from 'react'
import TestRenderer from 'react-test-renderer'

import themeContext from '../themeContext'
import rendererContext from '../rendererContext'

const { Theme } = themeContext(createElement, createContext)
const { RendererProvider } = rendererContext(
  createElement,
  Component,
  createContext,
  Theme
)

const mockCallback = jest.fn()

jest.mock('fela-dom', () => ({
  render: () => mockCallback('render'),
  rehydrate: () => mockCallback('rehydrate'),
}))

afterAll(() => {
  jest.unmock('fela-dom')
})

describe('ProviderFactory', () => {
  beforeEach(() => {
    mockCallback.mockClear()
  })

  it('should do the initial render before childrens componentDidMount hook', () => {
    const didMount = () => mockCallback('didMount')

    class Child extends Component {
      componentDidMount() {
        didMount()
      }
      render() {
        return <div />
      }
    }

    TestRenderer.create(
      <RendererProvider rehydrate renderToDOM renderer={{}}>
        <Child />
      </RendererProvider>
    )

    expect(mockCallback.mock.calls.length).toBe(3)
    expect(mockCallback.mock.calls[0][0]).toBe('rehydrate')
    expect(mockCallback.mock.calls[1][0]).toBe('render')
    expect(mockCallback.mock.calls[2][0]).toBe('didMount')
  })
})
