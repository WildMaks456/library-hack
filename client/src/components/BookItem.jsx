import React from 'react'

export default function BookItem(book) {
    return (
        <div className="popular-card" >
            <img src={book.book.imgUrl} alt="" />
            <h4>{book.book.author}</h4>
            <p>{book.book.title}</p>
        </div>
    )
}
