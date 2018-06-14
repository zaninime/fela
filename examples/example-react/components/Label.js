import React from 'react'
import { FelaComponent } from 'react-fela'

const label = props => ({
  fontSize: props.size,
  lineHeight: '200px',
  padding: 20,
})

export default props => <FelaComponent rule={label} {...props} />
