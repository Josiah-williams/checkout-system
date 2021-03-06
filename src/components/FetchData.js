import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import { axiosWithAuth } from "./auth/axiosWithAuth";
import { useHistory, useParams } from "react-router-dom";
import { deleteItem, getItems, addItems} from "./state/actionCreators";


const FetchData = props => {
const { id } = useParams();
const [ item ] =useState([])

const addItems = (e, item) => {
  e.preventDefault()
  addItems(item)
}




        return (
            // <Link to={`/Cart/${props.item}`}>
              <div className="item-card-container">
              <StyledItems className="styled-card">
              <h4>{props.item.title}</h4>
              <img src ={props.item.image} alt= '' />
              <h4>{props.item.description}</h4>
              <h4>${props.item.price}</h4>
              <h4>{props.item.category}</h4>

              <button onClick={(e, item) => addItems(e, item)}>
				        Add to cart
			        </button>
        </StyledItems>
        </div>
    // </Link>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItems(item))
});

export default connect(
  null,
  mapDispatchToProps
)(FetchData);

const StyledItems = styled.div`
border-radius: 5px;
background: white;
transition: 0.2s ease-in-out;
width: 300px;
margin: 10px;
align-items: center;
text-align: center;
align-self: flex-start;
color: black;

&:hover {
box-shadow: 0px 5px 37px -22px rgba(0, 0, 0, 1);
}

img {
object-fit: contain;
border-top-left-radius: 5px;
border-top-right-radius: 5px;
max-width: 100%;
max-height:200px
}

button {
border-radius: 5px;
border: 1px solid lightcoral;
padding: 10px;
background: transparent;
transition: 0.15s ease-in-out;
margin: 10px 0;
color: lightcoral;
margin-left: 25px;

&:hover {
  cursor: pointer;
  background: lightcoral;
  color: white;
}
}
}
`;
