import { useEffect, useState } from "react";

function App() {
  const body = document.querySelector("body");
  body.style.backgroundColor = "green";

  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [value, setValue] = useState("");
  const [name, setName] = useState("");

  useEffect(()=>{
  fetch("https://api.coinpaprika.com/v1/tickers?limit=10")
  .then((res) => res.json())
  .then((json) => {
    setCoins(json)
    setLoading(false)
  })
},[]);

const optionChange = (e) => {
//console.log(e.target.value);
coins.forEach((i) => {
  if(i.name === e.target.value){
    setValue(parseFloat(value / i.quotes.USD.price).toFixed(5));
    const h1 = document.createElement("h1");
      h1.innerText = i.name;
      setName(i.name);
  }
})
};

const inputChange = (e) => {
 setValue(e.target.value);
};

const onSubmit = (e) => {
  e.preventDefault();
  setValue("");
};

  return (
    <div>
      <h1>The Coins!{loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong>Loading...</strong> : <select onChange={optionChange}>{coins.map((item) => (<option key={item.id}>{item.name}</option>))}</select>}
    
     <ul>
    {coins.map((coin, index) => (
      <li key={index}>{coin.name}:{coin.quotes.USD.price.toFixed(5)}</li>
    ))}
</ul>
<form onSubmit={onSubmit}>
<label htmlFor="coin">EXCHANGE USD TO COIN</label>
<div>
<input name="coin" value={value} type="text" placeholder="Exchange USD to coin" onChange={inputChange} />
<button>RESET</button>
</div>
</form>
{name ? <h1>{name}</h1> : null}
{value ? <h1>{value}</h1> : null}
    </div>
  );
}

export default App;
