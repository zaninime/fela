import React from 'react'

import { FelaConnect } from 'react-fela'

export default () => (
  <FelaConnect
    styles={styles}
    render={({ classes }) => (
      <div>
        <div className={classes.rule1}>Hello</div>
        <div className={classes.rule2}>World</div>
      </div>
    )}
  />
)

const styles = {
  rule1: {
    ':hover': { color: 'red' },
    ':active': { color: 'blue' },
  },
  rule2: {
    ':hover': { color: 'green' },
    ':active': { color: 'blue' },
  },
}
