import styled from "styled-components";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 1.75rem 1rem;
  flex: 1;
  flex-direction: column;

  @media (max-width: 658px) {
    display: ${({ cycle }) => (cycle ? "none" : "flex")};
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const AddIcon = styled(AddCircleOutlineIcon)`
  cursor: pointer;
  color: purple;
  font-size: 2rem;
  transition: 0.3s all ease-in;

  &:hover {
    color: red;
    transition: 0.3s all ease-in;
  }
`;

export const DatePicker = styled.div`
  margin-bottom: 24px;
`;

export const DataInner = styled.div`
  width: 100%;
  overflow-y: auto;
  max-height: 440px;
  border-radius: 16px;
  padding: 1rem 1.5rem;
  -webkit-box-shadow: 0px 24px 30px 0px rgba(0, 0, 0, 0.35);
  -moz-box-shadow: 0px 24px 30px 0px rgba(0, 0, 0, 0.35);
  box-shadow: 0px 24px 30px 0px rgba(0, 0, 0, 0.35);
`;

export const DataHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
  border-bottom: 1px solid #dbd5d5;
  padding-bottom: 0.5rem;
`;

export const DataLeft = styled.div`
  display: flex;
  flex: 0.75;
`;

export const Name = styled.div`
  display: flex;
  width: 80px;
  max-width: 220px;
`;

export const Qty = styled.div`
  display: flex;
  font-weight: 700;
  margin-left: 1rem;
`;

export const Price = styled.div`
  font-weight: bold;
  width: 100%;
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

export const Item = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  margin: 1rem 0;
  color: ${({ type }) => (type === "Expenses" ? "red" : "green")};
`;

export const ItemLeft = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

export const ItemName = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80px;
  max-width: 220px;
`;

export const ItemQty = styled.div`
  display: flex;
  font-weight: 700;
  margin-left: 1rem;
`;

export const ItemPrice = styled.div`
  font-weight: bold;
  width: 100%;
  display: flex;
  flex: 1;
  justify-content: flex-end;
  margin-left: 0.5rem;
`;

export const ItemButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2rem;
  background-color: #fff;
  color: red;
  border-radius: 8px;
  border: 1px solid #380107;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  outline: none;
  visibility: ${({ visible }) => (visible === true ? "visible" : "hidden")};
  transition: 0.2s all ease-in-out;

  &:hover {
    color: #fff;
    background-color: red;
  }
`;

export const DataReport = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2rem;
  justify-content: space-between;
`;

export const DataReportItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  &:nth-child(4) {
    padding-top: 0.25rem;
    border-top: 1px solid red;
  }

  p {
    font-weight: 700;
  }
  /* p:nth-child(1) {
    color: green;
  } */
  p:nth-child(2) {
    color: red;
  }
`;
