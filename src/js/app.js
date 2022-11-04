export default function sortCharacters(array) {
  return array.sort((a, b) => b.health - a.health);
}
