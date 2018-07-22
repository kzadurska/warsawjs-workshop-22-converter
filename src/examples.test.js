import examples from './examples'

test('Add function to sum numbers', () => {
  expect(examples.add(1,2)).toBe(3)
})

test('Function that greets user', () => {
  const userName = 'Kasia'
  expect(examples.hello(userName)).toEqual('Hello, Kasia')
})

test('returns a float with centimals', () => {
  
})