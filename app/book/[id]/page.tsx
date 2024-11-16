
"use client";
import { useState } from 'react';
import { books } from "@/constants/mockData";
import { useParams } from "next/navigation";
import styles from './book.module.css';

export default function BookPage() {
  const { id } = useParams();
  const selectedBook = books.find(book => id === String(book.id));

  // Inisialisasi content langsung dari localStorage jika buku ditemukan
  const initialContent = selectedBook ? localStorage.getItem(`bookContent${selectedBook.id}`) || '' : '';
  const [content, setContent] = useState(initialContent);

  if (!selectedBook) return <p>Book not found</p>;

  const notify = () => alert("Your changes have been saved!");

  const handleSave = () => {
    if (selectedBook) {
      localStorage.setItem(`bookContent${selectedBook.id}`, content);
      notify();
    }
  };

  return (
    <div className={styles.bookContainer}>
      <aside>
        <h1>{selectedBook.title}</h1>
        <span>By {selectedBook.author}</span>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          onBlur={handleSave}
        />
      </aside>
    </div>
  );
}
