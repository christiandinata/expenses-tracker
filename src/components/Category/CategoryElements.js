import styled from "styled-components";

export const Container = styled.div`
	width: 240px;
	display: flex;
	flex-direction: column;
	height: 100%;
	background-color: #f7f7f7;
	padding-left: 30px;
	font-size: 12px;
`;

export const Accounts = styled.div`
	width: fit-content;
	display: flex;
	padding-top: 36px;
`;

export const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
`;

export const Title = styled.div`
	margin-bottom: 20px;
	text-transform: uppercase;
`;

export const BankLists = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Categories = styled.div`
	width: fit-content;
	display: flex;
	margin-top: 40px;
`;

export const CategoryWrapper = styled.div``;

export const ItemLists = styled.div``;

export const Item = styled.div`
	cursor: pointer;
	display: flex;
	padding-bottom: 12px;
	color: ${({ active, blue }) =>
		active ? "#000" : blue ? "#0062ff" : "#8c8c8c"};
	transition: 0.2s all ease-in-out;

	&:hover {
		color: #000;
	}
`;
