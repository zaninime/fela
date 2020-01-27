/* @flow */
import { createElement } from 'react'
import { feFactory } from '@fela-next/fela-bindings'

import FelaComponent from './FelaComponent'

export default feFactory(createElement, FelaComponent)
