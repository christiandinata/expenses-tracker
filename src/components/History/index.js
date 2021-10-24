import React from "react";
import {
	Container,
	DatePicker,
	Header,
	HistoryInner,
	AddIcon,
	Item,
	ItemName,
	ItemPrice,
} from "./HistoryElements";

function History() {
	return (
		<>
			<Container>
				<Header>
					<b>Daily Transactions</b>
					<AddIcon fontSize="large" />
				</Header>
				<DatePicker>Do something about date here</DatePicker>
				<HistoryInner>
					<Item>
						<ItemName>Amazon</ItemName>
						<ItemPrice>+$200.00</ItemPrice>
					</Item>
					<Item>
						<ItemName>Apples</ItemName>
						<ItemPrice>-$20.00</ItemPrice>
					</Item>
					<Item>
						<ItemName>Apples</ItemName>
						<ItemPrice>-$20.00</ItemPrice>
					</Item>
					<Item>
						<ItemName>Apples</ItemName>
						<ItemPrice>-$20.00</ItemPrice>
					</Item>
				</HistoryInner>
			</Container>
		</>
	);
}

export default History;
