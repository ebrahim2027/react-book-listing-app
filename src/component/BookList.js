import React from "react";

import styles from "./BookList.module.css";
export default function BookList(props) {
  return (
    <div>
      {props.books.map((book) => (
        <div className={styles.card} key={book.id}>
          <h2>
            {book.id} - {book.title}
          </h2>
          <p>
            {book.gener} | {book.date}
          </p>
          {/* --- Step2 ---- */}
          <button onClick={() => props.handleDelete(book.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
