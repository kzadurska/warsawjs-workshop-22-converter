import Converter from './converter';
import Mocks from './mocks'

// import NBPService from './NBPService'
// const service = new NBPService()
// const rates = service.generateRatesTable({'eur': '4.25', 'usd': '3.59', 'gbp': '4.62', 'chf': '3.69'})
// console.log(rates)

const inputCurrency = document.querySelector('#input-currency');
const outputCurrency = document.querySelector('#output-currency');

const rateList = document.querySelector('section.rate ul');
const wjsConverter = new Converter(Mocks.currenciesTable, rateList);
const currentRateContainer = document.querySelector('#current-rate');

wjsConverter.generateConvertTable(currentRateContainer, inputCurrency);

const input = document.querySelector('#input-value');
const resultContainer = document.querySelector('#result');

inputCurrency.addEventListener('change', () => {
  resultContainer.innerText = wjsConverter.convert(outputCurrency.value, inputCurrency.value, input.value);
      
  wjsConverter.generateConvertTable(currentRateContainer, inputCurrency);
});

outputCurrency.addEventListener('change', () => {
  resultContainer.innerText = wjsConverter.convert(outputCurrency.value, inputCurrency.value, input.value);
  wjsConverter.generateConvertTable(currentRateContainer, inputCurrency);
});

input.addEventListener('keyup', () => {
  resultContainer.innerText = wjsConverter.convert(outputCurrency.value, inputCurrency.value, input.value);
});