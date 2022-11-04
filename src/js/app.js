/*export default function sortCharacters(array) {
  function sortItems(a, b) {
    if (a.health > b.health) {
      return -1;
    }
    if (a.health < b.health) {
      return 1;
    }
    return 0;
  }

  array.sort(sortItems);
}*/

export default function sortCharacters(a, b) {
    if (a.health > b.health) {
      return -1;
    }
    if (a.health < b.health) {
      return 1;
    }
    return 0;
}
