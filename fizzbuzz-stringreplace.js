
for (let i = 0; i <= 100; i++) {
  const fizz = ['Fizz'][i % 3];
  const buzz = ['Buzz'][i % 5];

  const value = `${fizz}${buzz}`
    .replace('undefinedundefined', i)
    .replace('undefined', '');

  console.log(value)
}