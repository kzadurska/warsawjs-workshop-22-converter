import Converter from './converter'
import Mocks from './mocks'

test('Test converter class', () => {
  const conversionTable = Mocks.currenciesTable
  const wjsConverter = new Converter(conversionTable)

  expect(wjsConverter.convert('usd', 'pln', 1)).toEqual('3.59')
  expect(wjsConverter.convert('eur', 'pln', 157)).toEqual('667.25')
  expect(wjsConverter.convert('eur', 'eur', 157)).toEqual('157.00')
  expect(wjsConverter.convert('eur', 'dkk', 451)).toBeNull()

})