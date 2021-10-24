import styled from "styled-components";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const Container = styled.div`
	width: 48px;
	background-color: white;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	height: 100%;
	border-radius: 25px 0 0 25px;
	transition: 0.3s ease-in all;
`;

export const SidebarWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	transition: 0.3s ease-in all;
`;

export const Logo = styled.div`
	cursor: pointer;
	padding: 20px 10px;
	display: flex;
	/* justify-content: ${({ hover }) => (hover ? "flex-end" : "center")};
	 */
	justify-content: center;
	border-bottom: 1px solid #dbd5d5;
`;

export const SideIcon = styled.div`
	cursor: pointer;
	padding: 10px 0;
	align-items: center;
	width: 100%;
	display: flex;
	justify-content: center;
	border-right: ${({ active }) => (active ? "2px solid #000" : "none")};
	transition: 0.2s ease-out all;

	&:hover {
		background-color: #000;
		color: #fff;
	}
`;

export const SideText = styled.div`
	width: 96px;
	position: absolute;
	justify-content: center;
	align-items: center;
	color: #fff;
	display: ${({ hover }) => (hover ? "flex" : "none")};
	background-color: #000;
	translate: 80%;
	padding: 6px 8px;
	border-radius: 8px;
	transition: 0.3s all ease-in-out;
`;
