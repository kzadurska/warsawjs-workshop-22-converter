import examples from './examples'

test('Add function to sum numbers', () => {
  expect(examples.add(1,2)).toBe(3)
})

test('Function that greets user', () => {
  const userName = 'Kasia'
  expect(examples.hello(userName)).toEqual('Hello, Kasia')
})

test('return fibonnaci from number', () => {
  expect(examples.fibonacci(3)).toEqual(2)

  expect(examples.fibonacci(5)).toEqual(5)

  expect(examples.fibonacci(9)).toEqual(34)
})