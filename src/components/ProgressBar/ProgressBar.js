/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'
import VisuallyHidden from '../VisuallyHidden'

const STYLES = {
  large: {
    borderRadius: 8,
    height: 16,
    padding: 4,
  },
  medium: {
    borderRadius: 4,
    height: 12,
    padding: 0,
  },
  small: {
    borderRadius: 4,
    height: 8,
    padding: 0,
  },
}

const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size]
  if (!styles) {
    throw new Error(`Unknown size passed to ProgressBar: ${size}`)
  }
  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={{
        '--padding': styles.padding + 'px',
        '--borderRadius': styles.borderRadius + 'px',
      }}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <BarWrapper style={{ '--borderRadius': styles.borderRadius + 'px' }}>
        <Bar
          style={{ '--width': value + '%', '--height': styles.height + 'px' }}
        />
      </BarWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border-radius: var(--borderRadius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  height: var(--height);
  padding: var(--padding);
`

const BarWrapper = styled.div`
  border-radius: 4px;
  /* trim off corners when progress bar is near-full*/
  overflow: hidden;
`

const Bar = styled.div`
  width: var(--width);
  height: var(--height);
  background-color: ${COLORS.primary};
`

export default ProgressBar
