// /app/book/[id]/pages.tsx
"use client"
import { books } from "@/constants/mockData"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import styles from './book.module.css'

export default function BookPage() {
  const { id } = useParams();
  const [content, setContent] = useState('');

  const selectedBook = books.find(book => id === String(book.id));
  if (!selectedBook) return <p>Book not found</p>;

  const notify = () => alert("Your changes have been saved!");

  const handleSave = () => {
    localStorage.setItem(`bookContent${selectedBook.id}`, content);
    notify();
  };

  useEffect(() => {
    const savedContent = localStorage.getItem(`bookContent${selectedBook.id}`);
    if (savedContent) {
      setContent(savedContent);
    }
  }, [id]);

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
