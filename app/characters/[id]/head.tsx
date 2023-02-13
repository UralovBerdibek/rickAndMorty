async function getCharacter() {
  const res = await fetch('https://rickandmortyapi.com/api/character/2')
  return res.json()
}

const Head = async () => {
  const character = await getCharacter()
  return (
    <>
      <title>{character.name}</title>
    </>
  );
};

export default Head;