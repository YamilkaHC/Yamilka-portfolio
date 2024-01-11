export function isInSequence(number: number): boolean {
  for (let n = 1; ; n += 1) {
    if (4 * n - 3 === number) return true;
    if (4 * n - 3 > number) return false;
  }
}
