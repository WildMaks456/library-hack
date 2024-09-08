import React from 'react'

export default function BookItem({book, className}) {
    return (
        <div className={className} >
            <img src={book.imgUrl} alt="" />
            <h4>{book.author}</h4>
            <p>{book.title}</p>
        </div>
    )
}
