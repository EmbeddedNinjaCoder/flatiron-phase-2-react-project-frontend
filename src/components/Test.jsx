const Test = () => {
  function retrieveStocks(stockList) {
    stockList.forEach((security) => {
      console.log(security);
    });
  }

  function stockFetchTest() {
    fetch("http://localhost:3000/stocks")
      .then((r) => r.json())
      .then((stocks) => retrieveStocks(stocks))
      .catch((error) => alert(error));
  }
  stockFetchTest();

  return (
    <>
      <footer>
        <li>
          <a href="#" target="_blank">
            REACT Component 2 Test
          </a>
        </li>
      </footer>
    </>
  );
};
export default Test;
