import React from 'react'
import { FelaComponent } from 'react-fela'

const style = {
  padding: 5,
  fontSize: '20px',
  color: 'gray',
  flexDirection: 'column',
}

export default props => <FelaComponent style={style} {...props} />
