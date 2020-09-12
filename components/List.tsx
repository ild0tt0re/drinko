import React from 'react'
import Card from './Card'
import { CardProps } from './Card'

type ListProps = {
  items: Array<CardProps>
}

const List: React.FC<ListProps> = ({ items = [] }) => {
  return (
    <>
      {items.map((item) => (
        <Card imageSrc={item.imageSrc} title={item.title} />
      ))}

      <style jsx>{`
        li {
          list-style: none;
          margin: 0;
          padding: 0;
          display: list-item;
        }
      `}</style>
    </>
  )
}

export default List
