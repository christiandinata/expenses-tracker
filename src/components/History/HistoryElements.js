import styled from "styled-components";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export const Container = styled.div`
	padding-left: 30px;
	padding-right: 30px;
	display: flex;
	flex: 1;
	flex-direction: column;
`;

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding-top: 24px;
	margin-bottom: 24px;
`;

export const AddIcon = styled(AddCircleOutlineIcon)`
	cursor: pointer;
	color: purple;
	transition: 0.3s all ease-in;

	&:hover {
		color: red;
		transition: 0.3s all ease-in;
	}
`;

export const DatePicker = styled.div`
	margin-bottom: 24px;
`;

export const HistoryInner = styled.div``;

export const Item = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	padding-left: 20px;
	margin-bottom: 20px;
`;

export const ItemName = styled.div``;

export const ItemPrice = styled.div`
	font-weight: bold;
`;
