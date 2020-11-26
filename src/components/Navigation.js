import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from "styled-components";

const Nav = styled.div`
.navigation {
	display: flex;
	justify-content: flex-end;
	padding: 0 100px;
	transition: 0.2s ease-in;
	margin-bottom: 40px;

	background: #141618;
	a {
		color: white;
		text-decoration: none;
		padding: 30px 20px;

		span {
			display: inline-block;
			position: relative;
			top: -8px;
			left: 0px;
			font-weight: bold;
			line-height: 18px;
			text-align: center;
			background: lightcoral;
			border-radius: 100%;
			width: 18px;
			height: 18px;
		}
	}
}
`;


const Navigation = props => {
	return (
		<Nav>
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{props.cart.length}</span>
			</NavLink>
		</div>
		</Nav>
	);
};

export default Navigation;