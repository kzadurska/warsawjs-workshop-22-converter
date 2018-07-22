import utils from './utils'

class Converter {
  constructor(conversionTable, rateList) {
    this.conversionTable = conversionTable
    this.rateList = rateList
  }

  convert(sourceCurrency, targetCurrency, value) {
    sourceCurrency = sourceCurrency.toLowerCase()
    targetCurrency = targetCurrency.toLowerCase()
    if (!this.conversionTable[sourceCurrency] || !this.conversionTable[targetCurrency]) {
      return null
    }

    const rate = 
      (targetCurrency !== sourceCurrency 
        ? this.conversionTable[targetCurrency][sourceCurrency]
        : 1)

    return utils.roundToCentimals(rate * value)
  }

  generateConvertTable(currentRateContainer, inputCurrency) {
    currentRateContainer.innerText = inputCurrency.value;
    this.rateList.innerHTML = null;
    Object.keys(this.conversionTable[inputCurrency.value.toLowerCase()]).map(currencyName => {
      const listElement = document.createElement('li');
      const currencyNameContainer = document.createElement('span');
      const currencyRate = document.createElement('span');

      currencyNameContainer.innerText = currencyName;
      currencyRate.innerText = this.conversionTable[inputCurrency.value.toLowerCase()][currencyName];


      listElement.appendChild(currencyNameContainer);
      listElement.appendChild(currencyRate);

      this.rateList.appendChild(listElement);
    });
  }
}

export default Converter