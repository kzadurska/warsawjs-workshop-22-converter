import utils from './utils'

test('returns a float with centimals', () => {
  expect(utils.roundToCentimals(1.4567)).toEqual('1.46')
})