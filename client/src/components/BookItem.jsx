import React from 'react'

export default function BookItem({book, className}) {
    console.log(book)
    return (
        <div className={className} >
            <img src={book.imageUrl} alt="" />
            <h4>{book.author}</h4>
            <p>{book.title}</p>
        </div>
    )
}
