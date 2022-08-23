import styled from "styled-components";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const Container = styled.div`
  // width: 48px;
  background-color: white;
  display: flex;
  flex: 0.35;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  border-radius: 25px 0 0 25px;
  transition: 0.3s ease-in all;

  @media (max-width: 768px) {
    flex: 0;
  }
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
  padding: 1rem;
  display: flex;
  /* justify-content: ${({ hover }) => (hover ? "flex-end" : "center")};
	 */
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 0.85rem;
  border-bottom: 1px solid #dbd5d5;

  @media (max-width: 768px) {
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const SideIcon = styled.div`
  cursor: pointer;
  padding: 0.75rem;
  align-items: center;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: ${({ signOutButton }) => signOutButton && "0 0 0 25px"};
  border-top: ${({ signOutButton }) => signOutButton && "1px solid #dbd5d5"};
  border-right: ${({ active }) => (active ? "4px solid #000" : "none")};
  transition: 0.2s ease-out all;

  &:hover {
    background-color: #000;
    color: #fff;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const SideText = styled.div`
  margin-left: 1rem;
  justify-content: center;
  align-items: center;
  color: ${({ hover }) => (hover ? "#fff" : "#000")};
  // display: ${({ hover }) => (hover ? "flex" : "none")};
  display: flex;

  @media (max-width: 768px) {
    display: none;
  }
`;
