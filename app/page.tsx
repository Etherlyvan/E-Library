// /app/page.tsx
"use client"
import BookCard from '@/components/BookCard'
import { books } from '@/constants/mockData'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.containerStyle}>
        <h1 className={styles.title}>ALL BOOKS</h1>
        <ul className={styles.ulGroupStyle}>
          {books.map((book, i) => (
            <li 
              key={i}>
              <a href={`/book/${book.id}`} style={{ textDecoration: 'none' }}>
                <BookCard title={book.title} coverImage={book.image} description={book.description} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
