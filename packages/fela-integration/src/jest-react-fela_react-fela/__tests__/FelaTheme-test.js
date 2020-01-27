import 'raf/polyfill'
import React from 'react'

import { createSnapshot } from '@zaninime/jest-react-fela'
import { FelaTheme } from '@zaninime/react-fela'

describe('Using the FelaTheme component', () => {
  it('correctly pass the theme down', () => {
    expect(
      createSnapshot(
        <FelaTheme>
          {theme => <div>The color is {theme.color}.</div>}
        </FelaTheme>,
        { color: 'red' }
      )
    ).toMatchSnapshot()
  })
})
