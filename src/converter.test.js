import Converter from './converter'
import Mocks from './mocks'

test('Test converter class', () => {
  const conversionTable = Mocks.currenciesTable
  const wjsConverter = new Converter(conversionTable)

  expect(wjsConverter.convert('usd', 'pln', 1)).toEqual('3.59')
  expect(wjsConverter.convert('eur', 'pln', 157)).toEqual('667.25')
})