import React from 'react'
import Card from './Card'
import { CardProps } from './Card'

type ListProps = {
  items: Array<CardProps>
  buttonColor?: string
  handleClick?: any
}

const List: React.FC<ListProps> = ({ items = [], buttonColor, handleClick }) => {
  return (
    <>
      {items.map((item, index) => (
        <li key={index}>
          <Card
            imageSrc={item.imageSrc}
            title={item.title}
            buttonColor={buttonColor}
            onClick={handleClick}
          />
        </li>
      ))}

      <style jsx>{`
        li {
          list-style: none;
          margin: 0;
          padding: 0;
          display: list-item;
          width: 100%;
        }
      `}</style>
    </>
  )
}

export default List
