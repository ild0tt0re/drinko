import React from 'react'
import { CSSTransition } from 'react-transition-group'

type WithCSSTransitionProps = {
  classNames: string
}

const WithCSSTransition: React.FC<WithCSSTransitionProps> = ({
  children,
  classNames,
}) => {
  function onEnterTransition() {
    console.log('onEnter Transition...')
    if (typeof window !== undefined) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  function onExitTransition() {
    console.log('onExit Transition...')
  }

  return (
    <>
      <CSSTransition
        in={true}
        timeout={1000}
        classNames={classNames}
        appear
        exit
        unmountOnExit
        onEnter={() => onEnterTransition()}
        onExited={() => onExitTransition()}
      >
        {children}
      </CSSTransition>

      <style jsx global>{`
        .order-page-appear {
          opacity: 0;
          transform: scale(0.9);
        }
        .order-page-appear-active {
          opacity: 1;
          transform: translateX(0);
          transition: opacity 1s, transform 300ms;
        }
        .order-page-exit {
          opacity: 1;
        }
        .order-page-exit-active {
          opacity: 0;
          transform: scale(0.9);
          transition: opacity 1s, transform 300ms;
        }
        /* Medium devices (tablets)*/
        @media (min-width: 768px) {
        }
        /* Large devices (desktops)*/
        @media (min-width: 992px) {
        }
        /* Extra large devices (large desktops) */
        @media (min-width: 1200px) {
        }
      `}</style>
    </>
  )
}

export default WithCSSTransition
