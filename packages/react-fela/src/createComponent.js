/* @flow */
import { createElement } from 'react'
import { createComponentFactory } from '@fela-next/fela-bindings'

import { RendererContext } from './context'
import FelaTheme from './FelaTheme'

export default createComponentFactory(createElement, RendererContext, FelaTheme)
