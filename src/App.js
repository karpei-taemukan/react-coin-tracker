import { useEffect, useState } from "react";

function App() {
  const body = document.querySelector("body");
  body.style.backgroundColor = "green";

  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(()=>{
  fetch("https://api.coinpaprika.com/v1/tickers?limit=1000")
  .then((res) => res.json())
  .then((json) => {
    setCoins(json)
    setLoading(false)
  })
},[]);

  return (
    <div>
      <h1>The Coins!{loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong>Loading...</strong> : <select>
      {coins.map((item) => (<option key={item.id}>{item.name}: {item.quotes.USD.price}</option>))}
    </select>
}
    </div>
  );
}

export default App;
