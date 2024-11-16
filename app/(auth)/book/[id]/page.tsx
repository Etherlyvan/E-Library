// /app/book/[id]/pages.tsx
"use client"
import { books } from "@/constants/mockData"
import { motion } from 'framer-motion'
import { useParams } from "next/navigation"
import { useEffect } from "react"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Editor, useDomValue } from "reactjs-editor"
import styles from './book.module.css'

export default function BookPage() {
  const { id } = useParams();
  const { dom, setDom } = useDomValue();

  const selectedBook = books.find(book => id === String(book.id));
  if (!selectedBook) return <p>Book not found</p>;

  const notify = () => toast("Your changes has been saved!!");

  const handleSave = () => {
    const updatedDomValue = {
      key: dom?.key,
      props: dom?.props,
      ref: dom?.ref,
      type: dom?.type,
    };

    localStorage.setItem(`dom${selectedBook.id}`, JSON.stringify(updatedDomValue));
    notify();
  };

  useEffect(() => {
    const savedDom = localStorage.getItem(`dom${selectedBook.id}`);
    if (savedDom) {
      setDom(JSON.parse(savedDom));
    }
  }, []);

  return (
    <motion.div transition={{ type: 'spring', damping: 40, mass: 0.75 }}
      initial={{ opacity: 0, x: 1000 }} animate={{ opacity: 1, x: 0 }}>
      <Editor
        htmlContent={`<main className="bookContainer">
          <aside>
            <h1 className="center">${selectedBook.title}</h1>
            <span className="center small">By ${selectedBook.author}</span>
            ${selectedBook.content}
          </aside>
        </main>`}
      />
      <ToastContainer />
    </motion.div>
  );
}
