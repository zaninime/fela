/* @flow */
import { createElement } from 'inferno-create-element'
import { FelaComponentFactory } from '@zaninime/fela-bindings'

import { RendererContext } from './context'
import FelaTheme from './FelaTheme'

export default FelaComponentFactory(createElement, RendererContext, FelaTheme)
