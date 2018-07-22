import axios from 'axios'

class NBPService {
  constructor() {
    // this.url = `http://api.nbp.pl/api/exchangerates/rates/a/${currency}/last/?format=json`
  }

  async fetchCurrentRate(currency) {
    try {
      return await axios.get(`http://api.nbp.pl/api/exchangerates/rates/a/${currency}/last/?format=json`)
    } catch(error) {
      console.error(error.message)
    }
  }

  async getCurrentRate(currency) {
    const { data } = await this.fetchCurrentRate(currency)
    return data.rates[0].mid
  }
}

export default NBPService