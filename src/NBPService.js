import axios from 'axios'
import utils from './utils'

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

  calculateRatio(source, target) {
    return utils.roundToCentimals(source/target)
  }

  getCurrencyObject(currency, ratesObject, currencies) {
    //ratesObject {'eur': '4.25', 'usd': '3.59', 'gbp': '4.62', 'chf': '3.69'}
    // currency
    const obj = {}
    currencies.forEach(curr => {
      if (curr === currency) {
        return
      } else if (curr === 'pln') {
        obj[curr] = this.calculateRatio("1.00", ratesObject[currency])
      } else {
        obj[curr] = this.calculateRatio(ratesObject[curr], ratesObject[currency])
      }
    })
    return obj
  }

  generateRatesTable(ratesObject) {
    const foreignCurrencies = Object.keys(ratesObject) // eur usd gpb chf pln
    const currencies = [...foreignCurrencies, 'pln']
    let foreignRates = {}
    currencies.forEach(currency => {
      if (currency === 'pln') {
        foreignRates[currency] = ratesObject
      } else {
       foreignRates[currency] = this.getCurrencyObject(currency, ratesObject, currencies)
      }
    })
    return foreignRates
  }
}

export default NBPService