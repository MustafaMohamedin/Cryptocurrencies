// Instanciate the classes

const cryptoAPI = new CryptoAPI();
const ui = new UI();


// Create the variable
 const form = document.getElementById('form');

//  Add Event Listener
form.addEventListener('submit' , (e) => {
   e.preventDefault();

  //  Read the Currency
  const currencySelect = document.getElementById('currency').value;

  // Read the Cryptocurrency
  const cryptoCurrencySelect = document.getElementById('cryptocurrency').value;

    //  validate if the fields have something
    if(currencySelect === '' || cryptoCurrencySelect === ''){
      
        // Display an Error message
        ui.printMessage('All The Fields are Required ! ' , 'deep-orange  darken-4 card-panel');


    }else{
          // Query the REST API
          cryptoAPI.queryAPI(currencySelect , cryptoCurrencySelect)
            .then(data => {
               ui.displayResult(data.result[0] , currencySelect );
            })
    }

})