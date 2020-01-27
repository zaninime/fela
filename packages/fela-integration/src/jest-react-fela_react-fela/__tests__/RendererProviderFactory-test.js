import 'raf/polyfill'
import React, { Component } from 'react'
import { render } from 'react-dom'

import { createRenderer } from '@zaninime/fela'
import { RendererProvider } from '@zaninime/react-fela'

const mockCallback = jest.fn()

jest.mock('@zaninime/fela-dom', () => ({
  rehydrate: () => mockCallback('rehydrate'),
  render: () => mockCallback('render'),
}))

afterAll(() => {
  jest.unmock('@zaninime/fela-dom')
})

describe('RendererProviderFactory', () => {
  beforeEach(() => {
    mockCallback.mockClear()
  })

  it('should do the initial render before childrens componentDidMount hook', () => {
    class Child extends Component {
      componentDidMount() {
        mockCallback('didMount')
      }

      render() {
        return <div>Hello World</div>
      }
    }

    render(
      <RendererProvider rehydrate renderer={createRenderer()}>
        <Child />
      </RendererProvider>,
      document.createElement('div')
    )

    expect(mockCallback.mock.calls.length).toBe(2)
    expect(mockCallback.mock.calls[0][0]).toBe('render')
    expect(mockCallback.mock.calls[1][0]).toBe('didMount')
  })
})
