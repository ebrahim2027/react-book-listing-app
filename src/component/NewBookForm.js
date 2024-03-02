import { useState } from "react";
import "./NewBookForm.css";

export default function NewBookForm(props) {
  const [title, setTitle] = useState("Clean Code");
  const [date, setDate] = useState("");
  const [gener, setGener] = useState("Technology");

  //   --- Step9 ---
  const resetForm = () => {
    setTitle("");
    setDate("");
    setGener("Technology");
  };

  //   --- Step10 ---
  const hadleSubmit = (e) => {
    e.preventDefault();

    const book = {
      title: title,
      date: date,
      gener: gener,
      id: Math.floor(Math.random() * 1000),
    };
    //   --- Step11 ---
    props.addBook(book);
    resetForm();
  };

  return (
    <form className="new-book-form" onSubmit={hadleSubmit}>
      <label>
        <span>Book Title: </span>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </label>
      <label>
        <span>Book Date: </span>
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </label>
      {/* --- Step12 --- */}
      <label>
        <span>Book Genre</span>
        <select onChange={(e) => setGener(e.target.value)}>
          <option value="Technology">Technology</option>
          <option value="Roman">Roman</option>
          <option value="Programming">Programming</option>
          <option value="Success">Success</option>
        </select>
      </label>
      <button>Submit</button>
    </form>
  );
}
