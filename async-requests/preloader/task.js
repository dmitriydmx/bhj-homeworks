const loader = document.getElementById('loader');

const itemsContainer = document.getElementById('items');

function getCurrencyRates() {
  loader.classList.add('loader_active');
  
  fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
    .then(response => response.json())
    .then(data => {
      loader.classList.remove('loader_active');
      
      const rates = data.response.Valute;      
      itemsContainer.innerHTML = '';
      
      for (let code in rates) {
        const currency = rates[code];
        
        const item = document.createElement('div');
        item.classList.add('item');
        
        const itemCode = document.createElement('div');
        itemCode.classList.add('item__code');
        itemCode.textContent = currency.CharCode;
        
        const itemValue = document.createElement('div');
        itemValue.classList.add('item__value');
        itemValue.textContent = currency.Value;
        
        const itemCurrency = document.createElement('div');
        itemCurrency.classList.add('item__currency');
        itemCurrency.textContent = 'руб.';
        
        item.appendChild(itemCode);
        item.appendChild(itemValue);
        item.appendChild(itemCurrency);
        
        itemsContainer.appendChild(item);
      }
    })
    .catch(error => {
      console.log('Ошибка при загрузке данных:', error);
    });
}
getCurrencyRates();
