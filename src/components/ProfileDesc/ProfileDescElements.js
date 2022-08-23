import styled from "styled-components";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";

export const Container = styled.div`
  width: ${({ expanded, activeChart }) => {
    if (expanded && !activeChart) {
      return "30%";
    } else if (activeChart) {
      return "100%";
    } else {
      return "none";
    }
  }};
  padding: 0 1rem;
  display: ${({ expanded, activeChart }) => {
    if (expanded && !activeChart) {
      return "flex";
    } else if (activeChart) {
      return "flex";
    } else {
      return "none";
    }
  }};
  background-color: rgba(235, 235, 235, 0.25);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(4px);
  flex: 1;
  flex-direction: column;
  /* border-radius: 0 25px 25px 0; */
  transition: 1s all ease-in-out;
  position: ${({ expanded, activeChart }) => {
    if (expanded && !activeChart) {
      return "fixed";
    } else {
      return "relative";
    }
  }};
  top: ${({ activeChart }) => (activeChart ? "0px" : "24px")};
  right: ${({ activeChart }) => (activeChart ? "0px" : "96px")};
  bottom: ${({ activeChart }) => (activeChart ? "0px" : "24px")};
  z-index: 99;

  @media (max-width: 564px) {
    width: 200px;
  }
`;

export const Inner = styled.div`
  display: flex;
  flex: ${({ activeChart }) => activeChart && 1};

  @media (max-width: 768px) {
    display: ${({ activeChart }) => (activeChart ? "flex" : "none")};
  }
`;

export const Expander = styled.div`
  width: 48px;
  background-color: #f7f7f7;
  /* border-radius: ${({ expanded }) => !expanded && "0 25px 25px 0"}; */
  border-radius: 0 25px 25px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition-property: display;
  transition: 0.3s all ease-in;

  &:hover {
    background-color: #f9f9f9;
    color: #cfcfcf;
  }
`;

export const LeftChevron = styled(BsChevronDoubleLeft)`
  font-size: 2rem;
`;

export const RightChevron = styled(BsChevronDoubleRight)`
  font-size: 2rem;
`;

export const Profile = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.75rem;
`;

export const Identity = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Username = styled.div`
  font-size: 1rem;
  text-transform: capitalize;
  font-weight: 700;
`;

export const Email = styled.div`
  font-size: 0.85rem;
  margin-top: 0.25rem;
`;

export const ProfilePicture = styled(AccountCircleIcon)``;

export const Chart = styled.div`
  padding-top: 2rem;
`;

export const Title = styled.div`
  font-size: 1rem;
  font-weight: 600;
`;

export const ChartWrapper = styled.div`
  padding-top: 1rem;
  display: flex;
  width: 100%;
  flex: 1;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Outcome = styled.div`
  max-width: 148px;
  width: 100%;
  height: auto;
  border: 2px #e3e3e3 solid;
  padding: 8px 16px;
  border-radius: 16px;

  @media (max-width: 768px) {
    max-width: 120px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;

export const Income = styled.div`
  max-width: 148px;
  width: 100%;
  height: auto;
  margin-left: 1rem;
  border: 2px #e3e3e3 solid;
  padding: 8px 16px;
  border-radius: 16px;

  @media (max-width: 768px) {
    max-width: 120px;
    margin-left: 0;
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;

export const ChartTitle = styled.div`
  text-transform: uppercase;
  margin-bottom: 24px;
  font-size: 12px;
`;

export const ChartImg = styled.img`
  width: 80px;
  height: 80px;

  /* @media (max-width: 1024px) {
    width: 50px;
    height: 50px;
  } */
`;

export const ChartTotal = styled.div`
  font-size: 1rem;

  @media (max-width: 1024px) {
    font-size: 0.75rem;
  }
`;

export const CategoryChart = styled.div`
  padding-top: 2rem;
`;

export const Item = styled.div`
  width: 100%;
  margin: 1rem 0;
  padding: 8px 0 8px 16px;
  background-color: #ffe7b0;
  margin-bottom: 8px;
  border-radius: 8px;
`;

export const ItemName = styled.div``;

export const Total = styled.div`
  font-weight: bold;
`;
