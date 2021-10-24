import React from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Category from "../components/Category";
import History from "../components/History";
import Overview from "../components/Overview";

function Home() {
	return (
		<>
			<Container>
				<Left>
					<LeftInner>
						<Sidebar />
						<Category />
						<History />
					</LeftInner>
				</Left>
				<Right>
					<ProfileDesc></ProfileDesc>
					<Overview />
				</Right>
			</Container>
		</>
	);
}

const Container = styled.div`
	display: flex;
	width: 100%;
	height: 100vh;
	background-color: #ffdede;
	padding: 24px 48px 24px 48px;
`;
const Left = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #fff;
	width: 100%;
	max-width: 832px;
	height: 100%;
	border-radius: 25px 0 0 25px;
	// height: 100%;
`;

const LeftInner = styled.div`
	height: 100%;
	display: flex;
`;

const Right = styled.div`
	background-color: #fff;
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 352px;
	height: 100%;
	border-radius: 0 25px 25px 0;
	padding: 8px 16px 8px 24px;
	// height: 100%;
`;

const ProfileDesc = styled.div``;

export default Home;
