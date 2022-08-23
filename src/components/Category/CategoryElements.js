import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  flex: 0.35;
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #f7f7f7;
  padding: 0 1rem;
  font-size: 0.75rem;

  @media (max-width: 658px) {
    display: ${({ cycle }) => (cycle ? "flex" : "none")};
    flex: 1;
  }
`;

export const Accounts = styled.div`
  width: 100%;
  display: flex;
  padding-top: 2rem;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Title = styled.div`
  margin-bottom: 20px;
  text-transform: uppercase;
`;

export const BankLists = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Categories = styled.div`
  width: fit-content;
  display: flex;
  padding-top: 1rem;
`;

export const CategoryWrapper = styled.div``;

export const ItemLists = styled.div``;

export const Item = styled.div`
  cursor: pointer;
  display: flex;
  padding-bottom: 12px;
  color: ${({ active, blue }) =>
    active ? "#000" : blue ? "#0062ff" : "#8c8c8c"};
  transition: 0.2s all ease-in-out;
  align-items: center;

  &:hover {
    color: #000;
  }
`;
