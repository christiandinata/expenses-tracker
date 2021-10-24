import React from "react";
import {
	CategoryChart,
	Chart,
	ChartImg,
	ChartTitle,
	ChartTotal,
	ChartWrapper,
	Container,
	Identity,
	Income,
	Item,
	ItemName,
	Outcome,
	Profile,
	ProfilePicture,
	Title,
	Total,
} from "./OverviewElements";

function Overview() {
	return (
		<>
			<Container>
				<Profile>
					<Identity>
						<h3>Christian Dinata</h3>
						<p>cdinata6@gmail.com</p>
					</Identity>
					<ProfilePicture fontSize="large" />
				</Profile>
				<Chart>
					<Title>Monthly Overview</Title>
					<ChartWrapper>
						<Outcome>
							<ChartTitle>Expense</ChartTitle>
							<ChartImg src="/stats.png" alt="outcome chart" />
							<ChartTotal>
								<b>$20.00</b>
							</ChartTotal>
						</Outcome>
						<Income>
							<ChartTitle>Income</ChartTitle>
							<ChartImg src="/stats.png" alt="income chart" />
							<ChartTotal>
								<b>+$1200.00</b>
							</ChartTotal>
						</Income>
					</ChartWrapper>
				</Chart>
				<CategoryChart>
					<Title>Expenses by category</Title>
					<Item>
						<ItemName>Food & Beverage</ItemName>
						<Total>$450.00</Total>
					</Item>
					<Item>
						<ItemName>Utilities</ItemName>
						<Total>$150.00</Total>
					</Item>
					<Item>
						<ItemName>Household</ItemName>
						<Total>$77.00</Total>
					</Item>
				</CategoryChart>
			</Container>
		</>
	);
}

export default Overview;
