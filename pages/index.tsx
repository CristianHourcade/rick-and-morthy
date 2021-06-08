import { useState } from "react";
import { CardComponent } from "../component/CardComponent";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [page, setPage] = useState(1);

  const mockData = [
    {
      name: "Rick Sanchez",
      species: "Human",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    },
    {
      name: "Morty Smith",
      species: "Human",
      image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    },
    {
      name: "Summer Smith",
      species: "Human",
      image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
    },
    {
      name: "Beth Smith",
      species: "Human",
      image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
    },
  ];

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to our galery of Ricky and Morty!
        </h1>

        <div className={styles.grid}>
          {mockData.map((element) => {
            return <CardComponent character={element} />;
          })}
        </div>
      </main>

      <footer className={styles.footer}>
        <ul className="pagination">
          {mockData.map((element, index) => {
            return (
              <li key={index}>
                <a
                  onClick={() => {
                    setPage(index + 1);
                  }}
                  className={page === index + 1 && "active"}
                >
                  {index + 1}
                </a>
              </li>
            );
          })}
        </ul>
      </footer>
    </div>
  );
}
