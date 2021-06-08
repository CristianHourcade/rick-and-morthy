import styles from "../styles/Home.module.css";

export const CardComponent = ({ character }) => {
  return (
    <a
      className={styles.card}
    >
      <img src={character.image} style={{ width: "100%" }} />
      <h2>{character.name}</h2>
      <p>{character.species}</p>
    </a>
  );
};
