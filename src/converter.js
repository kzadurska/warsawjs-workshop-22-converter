import utils from './utils'

class Converter {
  constructor(conversionTable) {
    this.conversionTable = conversionTable
  }

  convert(sourceCurrency, targetCurrency, value) {
    const rate = this.conversionTable[targetCurrency][sourceCurrency]
    return utils.roundToCentimals(rate * value)
  }
}

export default Converter