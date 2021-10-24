import React, { useState } from "react";
import {
	Accounts,
	Wrapper,
	BankLists,
	Categories,
	Container,
	Item,
	ItemLists,
	Title,
} from "./CategoryElements";
import CircleIcon from "@mui/icons-material/Circle";
import AddIcon from "@mui/icons-material/Add";
import FastfoodIcon from "@mui/icons-material/Fastfood";

function Category() {
	const [active, setActive] = useState(true);

	return (
		<>
			<Container>
				<Accounts>
					<Wrapper>
						<Title>Accounts</Title>
						<BankLists>
							<Item>
								<CircleIcon
									sx={{
										color: "#dbdbdb",
										marginRight: "10px",
									}}
									fontSize="small"
								/>
								Citi Bank Int. Ltd.
							</Item>
							<Item>
								<CircleIcon
									sx={{
										color: "#dbdbdb",
										marginRight: "10px",
									}}
									fontSize="small"
								/>
								HSBC Ltd.
							</Item>
							<Item active={active}>
								<CircleIcon
									sx={{
										color: active ? "#000" : "#dbdbdb",
										marginRight: "10px",
									}}
									fontSize="small"
								/>
								Bank Central Asia.
							</Item>
							<Item blue={active}>
								<AddIcon
									sx={{
										color: "#0062ff",
										marginRight: "10px",
									}}
									fontSize="small"
								/>
								Add another
							</Item>
						</BankLists>
					</Wrapper>
				</Accounts>
				<Categories>
					<Wrapper>
						<Title>Categories</Title>
						<ItemLists>
							<Item>
								<img
									src="/fast-food.png"
									alt="food and beverage"
									height="20"
									width="20"
									style={{ marginRight: "10px" }}
								/>
								Food & Beverage
							</Item>
							<Item>
								<img
									src="/technology.png"
									alt="technology"
									height="20"
									width="20"
									style={{ marginRight: "10px" }}
								/>
								Technology
							</Item>
							<Item>
								<img
									src="/household.png"
									alt="household"
									height="20"
									width="20"
									style={{ marginRight: "10px" }}
								/>
								Household
							</Item>
							<Item>
								<img
									src="/utilities.png"
									alt="utility"
									height="20"
									width="20"
									style={{ marginRight: "10px" }}
								/>
								Utility
							</Item>
							<Item blue={active}>
								<AddIcon
									sx={{
										color: "#0062ff",
										marginRight: "10px",
									}}
									fontSize="small"
								/>
								Add another
							</Item>
						</ItemLists>
					</Wrapper>
				</Categories>
			</Container>
		</>
	);
}

export default Category;
