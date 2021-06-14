import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'

import Icon from '../Icon'
import VisuallyHidden from '../VisuallyHidden'

const STYLES = {
  small: {
    borderThickness: 1,
    fontSize: 14,
    iconSize: 16,
    height: 24,
  },
  large: {
    borderThickness: 2,
    fontSize: 18,
    iconSize: 24,
    height: 36,
  },
}

const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
  const styles = STYLES[size]

  if (!styles) {
    throw new Error(`Unknown size passed to IconInput: ${size}`)
  }

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ '--size': styles.iconSize + 'px' }}>
        <Icon id={icon} size={styles.iconSize} />
      </IconWrapper>
      <TextInput
        {...delegated}
        style={{
          '--border-thickness': styles.borderThickness + 'px',
          '--font-size': styles.fontSize / 16 + 'rem',
          '--height': styles.height / 16 + 'rem',
          '--width': width + 'px',
        }}
      />
    </Wrapper>
  )
}

const Wrapper = styled.label`
  color: ${COLORS.gray700};
  display: block;
  position: relative;

  &:hover {
    color: ${COLORS.black};
  }
`

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto 0;
  height: var(--size);
`

const TextInput = styled.input`
  border: none;
  border-bottom: var(--border-thickness) solid ${COLORS.black};
  color: inherit;
  font-size: var(--font-size);
  font-weight: 700;
  height: var(--height);
  padding-left: var(--height);
  outline-offset: 2px;
  width: var(--width);

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`

export default IconInput
