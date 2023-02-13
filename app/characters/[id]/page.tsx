import styles from './page.module.scss';

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function getCharacter() {
  const res = await fetch('https://rickandmortyapi.com/api/character/2')
  return res.json()
}

const CharacterPage = async () => {
  const character = await getCharacter()
  await sleep(2000)
  return (
    <section className={styles.character_container}>
      <h1 className="text-3xl font-bold underline">{character.name}</h1>
    </section>
  )
}

export default CharacterPage