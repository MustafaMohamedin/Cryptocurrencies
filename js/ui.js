 
 class UI {
   
     constructor(){
         this.init();
     }

     init(){
         this.printCryptoCurrencies();
     }
      // Prints the option from the form
     printCryptoCurrencies(){
      
      cryptoAPI.getCryptoCurrenciesList()
         .then(data => {
           const cryptoCurrencies = data.cryptoCurrencies;
            
          //  Build the <select> from the REST API
           const select = document.getElementById('cryptocurrency');

          //  Add the <options>
            cryptoCurrencies.forEach( currency => {
              const option = document.createElement('option');
              option.value = currency.id;
              option.appendChild(document.createTextNode(currency.name));
              // append into the select 
              select.appendChild(option);
            });
         })

     }

    //  print Message 2 parameters , message and classes
         printMessage(message , className){

          // Creat a div
          const div = document.createElement('div');
          // Add the classes
          div.className = className;

          // insert the message
          div.appendChild(document.createTextNode(message));

          // Target the div from html file to insert this new div
          const messageDiv = document.querySelector('.messages');

          messageDiv.appendChild(div);

          // Remove the Error message after 3 seconds
            setTimeout(() => {
                document.querySelector('.messages div').remove();
            }, 3000);

         }

        //  Prints the Result of the valuation / rate
        displayResult(result , currency){
          
          let currencyName ;
          // Read the currency
          currencyName = 'price_' + currency.toLowerCase();
            // Extract the result of the result
          const value = result[currencyName];

          // Remove the previuos Result
          const prevResult = document.querySelector('#result > div');
             if(prevResult){
               prevResult.remove();
             }
      
          // Build the Template of the Result
          let HTMLTemplate = '';

          HTMLTemplate += `

            <div class= "card cyan darken-3"> 
              <div class="card-content white-text">
                <span class= "card-title"> Result </span>
                 <p> The Price of The ${result.name} from The ${currency} is $ ${result.price_usd}</p>
                 <p> Last Hour : ${result.percent_change_1h} % </p>
                 <p> Last Day : ${result.percent_change_24h} % </p>
                 <p> Last 7 Days : ${result.percent_change_7d} % </p>
              </div>

            </div>

          `;

            // print the spinner
            this.showSpinner();

            // After 3 seconds show the Result and hide the spinner
            setTimeout(() => {
              // Show the Result
              const resultDiv = document.getElementById('result');
              resultDiv.innerHTML = HTMLTemplate;
              // Hide the spinner
              document.querySelector('.spinner img').remove();

            },2000);

        }

        // Print the Spinner
        showSpinner(){
          const spinnerGif = document.createElement('img');
          spinnerGif.src = 'img/spinner.gif';
          document.querySelector('.spinner').appendChild(spinnerGif);
        }

 }