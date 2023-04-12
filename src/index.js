import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const books = [
  {
    title: 'Outlive: The Science and Art of Longevity',
    author: 'Bill Gifford',
    img: './images/image1.jpg',
    id: 1,
  },
  {
    title:
      'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
    author: 'James Clear',
    img: './images/image2.jpg',
    id: 2,
  },
  {
    title: 'Dog Man: Twenty Thousand Fleas Under the Sea',
    author: 'Dav Pilkey',
    img: './images/image3.jpg',
    id: 3,
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      <EventExamples />
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

const EventExamples = () => {
  return <h1>events</h1>;
};

const Book = ({ title, author, img }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
