import React from 'react'
import './button.css'

type ButtonProps = {
  label: string
  primary?: boolean
  size?: 'small' | 'medium' | 'large'
  backgroundColor?: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button: React.FC<ButtonProps> = ({
  label,
  primary = true,
  size = 'medium',
  backgroundColor = null,
  onClick = undefined,
  ...props
}) => {
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary'
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(
        ' '
      )}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  )
}
