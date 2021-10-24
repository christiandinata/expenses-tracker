import styled from "styled-components";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const Container = styled.div``;

export const Profile = styled.div`
	display: flex;
	flex: 1;
	justify-content: space-between;
	align-items: center;
	padding-top: 24px;
	margin-bottom: 30px;
`;

export const Identity = styled.div``;

export const ProfilePicture = styled(AccountCircleIcon)``;

export const Chart = styled.div`
	margin-bottom: 16px;
`;

export const Title = styled.div`
	margin-bottom: 16px;
`;

export const ChartWrapper = styled.div`
	display: flex;
	width: 100%;
	flex: 1;
	justify-content: flex-start;
	align-items: center;
`;

export const Outcome = styled.div`
	width: 148px;
	height: auto;
	border: 2px #e3e3e3 solid;
	margin-right: 16px;
	padding: 8px 0 8px 16px;
	border-radius: 16px;
`;

export const Income = styled.div`
	width: 148px;
	height: auto;
	border: 2px #e3e3e3 solid;
	padding: 8px 0 8px 16px;
	border-radius: 16px;
`;

export const ChartTitle = styled.div`
	text-transform: uppercase;
	margin-bottom: 24px;
	font-size: 12px;
`;

export const ChartImg = styled.img`
	width: 80px;
	height: 80px;
`;

export const ChartTotal = styled.div``;

export const CategoryChart = styled.div``;

export const Item = styled.div`
	width: 100%;
	/* display: flex;
	flex-direction: column; */
	padding: 8px 0 8px 16px;
	/* justify-content: flex-start;
	align-items: center; */
	background-color: #ffe7b0;
	margin-bottom: 8px;
`;

export const ItemName = styled.div``;

export const Total = styled.div`
	font-weight: bold;
`;
