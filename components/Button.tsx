import usePointerDown from 'hooks/usePointerDown'
import React, { useState } from 'react'

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
  const [isPointerDown, { onPointerDown, onPointerUp }] = usePointerDown()

  const computeClasses = () => {
    return [
      'button',
      `button--${size}`,
      primary ? 'button--primary' : 'button--secondary',
      isPointerDown ? 'pointer-down' : '',
    ].join(' ')
  }

  return (
    <>
      <button
        type="button"
        className={computeClasses()}
        style={backgroundColor && { backgroundColor }}
        onClick={onClick}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        {...props}
      >
        {label}
      </button>

      <style jsx>{`
        .button {
          font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial,
            sans-serif;
          font-weight: 700;
          border: 0;
          border-radius: 3em;
          cursor: pointer;
          display: inline-block;
          line-height: 1;
        }
        .button--primary {
          color: white;
          background-color: var(--brand-color);
        }
        .button--secondary {
          color: #333;
          background-color: transparent;
          box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
        }
        .button--small {
          font-size: 12px;
          padding: 10px 16px;
        }
        .button--medium {
          font-size: 14px;
          padding: 11px 10px;
        }
        .button--large {
          font-size: 16px;
          padding: 12px 24px;
        }
      `}</style>
    </>
  )
}
