import PropTypes from "prop-types";
import {Link} from "react-router-dom";


function Coins({id, name, price}){

return (
<div>
<ul>
<li key={id}><Link to={`/coin/${id}`}>{name}</Link>:{price.toFixed(5)}</li>
</ul>
</div>
)
}

Coins.prototype={
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
}

export default Coins;