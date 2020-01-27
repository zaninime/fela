/* @flow */
import { createElement } from 'react'
import { feFactory } from '@zaninime/fela-bindings'

import FelaComponent from './FelaComponent'

export default feFactory(createElement, FelaComponent)
