import React from 'react'
import Card from './Card'
import { CardProps } from './Card'

type ListProps = {
  items: Array<CardProps>
  buttonColor?: string
}

const List: React.FC<ListProps> = ({ items = [], buttonColor }) => {
  return (
    <>
      {items.map((item, index) => (
        <li key={index}>
          <Card
            imageSrc={item.imageSrc}
            title={item.title}
            buttonColor={buttonColor}
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
