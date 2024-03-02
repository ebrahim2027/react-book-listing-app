import React, { useState } from "react";
import Title from "./component/Title";

import "./App.css";
import Modal from "./component/Modal";
import BookList from "./component/BookList";
import NewBookForm from "./component/NewBookForm";
function App() {
  // --- Step1 ---
  const [books, setBooks] = useState([]);
  // --- Step6 ---
  const [showModal, setShowModal] = useState(false);

  // --- Step3 ---
  const [showBooks, setShowBooks] = useState(true);

  // --------------------- FUNCTIONS ---------------------
  // --- Step2 ----
  const handleDelete = (id) => {
    setBooks((prevBooks) => {
      return prevBooks.filter((book) => {
        return id !== book.id;
      });
    });
    console.log(id);
  };

  // --- Step6 ---
  const handleClose = () => {
    setShowModal(false);
  };

  // --- Step7 ---
  const handleOpen = () => {
    setShowModal(true);
  };

  // --- Step11 ---
  const addBook = (book) => {
    setBooks((prevBooks) => {
      return [...prevBooks, book];
    });
    setShowModal(false);
  };
  return (
    <div className="App">
      {/* --- Step4 --- */}
      <Title
        title="My Magic Library"
        subtitle="Latest Books To Learn Web Development"
      />

      {/* --- Step3 --- */}
      {showBooks && (
        <div>
          <button onClick={() => setShowBooks(false)}>Hide</button>
        </div>
      )}
      {!showBooks && (
        <div>
          <button onClick={() => setShowBooks(true)}>Show</button>
        </div>
      )}

      {/* --- Step1 --- */}
      {showBooks && <BookList books={books} handleDelete={handleDelete} />}

      {/* ---- Step5 ---- */}
      {showModal && (
        <Modal>
          {/* --- Step8 --- */}
          <NewBookForm addBook={addBook} />
        </Modal>
      )}
      <br />
      {/* ---- Step7 ---- */}
      <button onClick={handleOpen}>Add Book</button>
    </div>
  );
}

export default App;
