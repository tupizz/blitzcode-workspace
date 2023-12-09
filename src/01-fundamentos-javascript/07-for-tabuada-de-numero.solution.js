export default function generateMultiplicationTable(number) {
  const table = [];
  for (let i = 1; i <= 10; i++) {
    table.push(`${number} x ${i} = ${number * i}`);
  }
  return table;
}
