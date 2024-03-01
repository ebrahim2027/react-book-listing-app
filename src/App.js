import React, { useState } from "react";
import Title from "./component/Title";

import "./App.css";
import Modal from "./component/Modal";
import BookList from "./component/BookList";
function App() {
  // --- Step1 ---
  const [books, setBooks] = useState([
    { title: "Clean Code", id: 1 },
    { title: "Eloquent JavaScript", id: 2 },
    { title: "Web Design with HTML, CSS & JS", id: 3 },
    { title: "You Don't Know JS Yet", id: 4 },
    { title: "Gang of Four Design Patterns", id: 5 },
  ]);
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
        <Modal handleClose={handleClose}>
          <h2>Terms & Conditions</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            architecto itaque illum amet voluptas, aperiam sit quos non eos ut
            natus fuga maiores modi at qui? Delectus nemo officiis velit.
          </p>
        </Modal>
      )}
      <br />
      {/* ---- Step7 ---- */}
      <button onClick={handleOpen}>Open Modal</button>
    </div>
  );
}

export default App;
