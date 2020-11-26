import React, { useState, useEffect} from "react";
import { connect } from "react-redux";
import  * as actionCreators  from "./state/actionCreators";
import { useHistory } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import FetchData from "./FetchData"
import styled from "styled-components";

export function Item({ getItems, items , addItem}) {
  useEffect(() => {
    getItems();
  }, []);
  if (!items){return null}

const Product = styled.div`
.products-container {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
  margin: 0 auto;
  margin-top:100px
}
`
    return (
      <Product>
      <div className="products-container">
          {
        items.map(item => (
          <FetchData key = {item.id} item={item} addItem={addItem} />
          
          ))}
        </div>
        </Product>
    )
}



export default connect(
    function mapStateToProps(state) {
      console.log(state);

      return {
        items: state.items.items
      };
    },
    actionCreators
  )(Item); 