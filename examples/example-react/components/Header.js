import React from 'react'
import { FelaComponent } from 'react-fela'

export default ({ title }) => (
  <FelaComponent style={style}>{title}</FelaComponent>
)

const style = {
  color: 'rgb(50, 50, 50)',
  fontSize: 100,
  padding: 50,
  ':hover': { animationDuration: '500ms' },
  '@supports (-webkit-flex:1)': {
    color: 'blue',
  },
  '@media (max-width: 800px)': {
    fontSize: '40px',
    '@supports (-webkit-flex:1)': {
      fontSize: 180,
    },
  },
  animationDuration: '2s',
  animationIterationCount: 'infinite',
  animationName: {
    '0%': { color: 'green' },
    '50%': { color: 'blue' },
    '80%': { color: 'purple' },
    '100%': { color: 'green' },
  },
}
