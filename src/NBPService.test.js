import NBPService from './NBPService'
import axios from 'axios'
import Mocks from './mocks'

jest.mock('axios');

describe('NBPService', () => {
  const nbpservice = new NBPService()
  test('fetch current rate', async () => {
    const response = Mocks.axiosData;
    axios.get.mockResolvedValue(response);
    expect(await nbpservice.getCurrentRate('pln')).toEqual(3.7170)
     expect(await nbpservice.getCurrentRate('usd')).toEqual(3.7170)
  })
})