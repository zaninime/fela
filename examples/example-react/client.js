import React from 'react'
import { render } from 'react-dom'
import { RendererProvider } from 'react-fela'
import { render as felaRender } from 'fela-dom'
import App from './app'
import createRenderer from './renderer'

process.env.NODE_ENV = 'production'

const renderer = createRenderer()

render(
  <RendererProvider rehydrate={false} renderer={renderer}>
    <App />
  </RendererProvider>,
  document.getElementById('app')
)
