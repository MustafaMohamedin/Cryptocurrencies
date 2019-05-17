
class CryptoAPI {
  
        // Query the REST API with the currency and cryptocurrencies
       async queryAPI(currency , cryptocurrencies){
        
        const url = await fetch(`https://api.coinmarketcap.com/v1/ticker/${cryptocurrencies}/?convert=${currency}`);

        // Return as json
        const result = await url.json();

        // Retrun object
           return {
               result
           }

        }

      // Get all the CryptoCurrencies
    async getCryptoCurrenciesList(){
       const url = await fetch('https://api.coinmarketcap.com/v1/ticker/');

      //  Return as a json
      const cryptoCurrencies = await url.json();
      // Return the Object 
      return {
          cryptoCurrencies
      }
  }

}