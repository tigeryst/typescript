function twoFer(name: string): string {
  return `One for ${name}, one for me`;
}

function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
