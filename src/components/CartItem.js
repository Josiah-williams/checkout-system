import React, { useState }from 'react';
import { deleteItem } from "./state/actionCreators";
import { connect } from "react-redux";

const Item = props => {
	const handleDelete = e => {
		e.preventDefault();
		console.log('delete item!', props.item.id)
		props.deleteItem(props.item.id);
	  };
  
	return (
		<div className="shopping-cart_item">
			  <img src ={props.item.image} alt= '' />
	    	
			
			<div>
            <h4>{props.item.title}</h4>
            
              <h4>{props.item.description}</h4>
              <h4>{props.item.category}</h4>
			  <h4>${props.item.price}</h4>

				<button onClick={(e)=>handleDelete(e,props.item.id)}>Remove from cart</button>
			</div>
		</div>
	);
};
const mapStateToProps = state => {
    return {
      };
    };
    export default connect(mapStateToProps, { deleteItem })(
        Item
      );

