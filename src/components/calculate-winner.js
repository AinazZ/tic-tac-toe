export default function calculateWinner(field) {
 // в массиве собраны все выигрышные компбинации
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  // сравниваем комбинации из активированных клеток с выигрышными комбинациями
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (field[a] && field[a] === field[b] && field[a] === field[c]) {
      return field[a];
    }
  }
  return null;
}
