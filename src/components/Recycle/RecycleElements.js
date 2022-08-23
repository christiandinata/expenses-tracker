import styled from "styled-components";
import { GiCycle } from "react-icons/gi";

export const Container = styled.div`
  display: none;
  width: 100%;
  flex: 1;
  padding: 0.9rem 0;
  justify-content: center;
  align-items: center;
  background-color: #f7f7f7;
  border-radius: 0 0 25px 0;
  cursor: pointer;

  transition: 0.3s all ease-in;

  &:hover {
    background-color: #f9f9f9;
    color: #cfcfcf;
  }

  @media (max-width: 658px) {
    display: flex;
  }
`;

export const Cycle = styled(GiCycle)`
  font-size: 2rem;
`;
