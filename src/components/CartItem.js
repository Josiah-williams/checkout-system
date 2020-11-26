import React from 'react';

const Item = props => {
	return (
		<div className="shopping-cart_item">
			  <img src ={props.item.image} alt= '' />
	    	
			
			<div>
            <h4>{props.item.title}</h4>
            
              <h4>{props.item.description}</h4>
              <h4>{props.item.category}</h4>
			  <h4>${props.item.price}</h4>

				<button>Remove from cart</button>
				<button>Clear cart</button>
			</div>
		</div>
	);
};

export default Item;
