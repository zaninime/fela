import 'raf/polyfill'
import React from 'react'

import { createSnapshot } from '@fela-next/jest-react-fela'
import { fe } from '@fela-next/react-fela'

describe('Using fe', () => {
  it('should render inline style as CSS', () => {
    const Comp = () =>
      fe(
        'div',
        {
          css: {
            color: 'red',
            ':hover': {
              color: 'blue',
            },
          },
        },
        'Hello'
      )

    expect(createSnapshot(<Comp />)).toMatchSnapshot()
  })

  it('should merge class names', () => {
    const Comp = () =>
      fe(
        'div',
        {
          className: 'Component-button Component',
          css: {
            color: 'red',
            ':hover': {
              color: 'blue',
            },
          },
        },
        'Hello'
      )

    expect(createSnapshot(<Comp />)).toMatchSnapshot()
  })
})
