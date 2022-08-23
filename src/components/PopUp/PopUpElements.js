import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  text-align: left;
`;

const FadeIn = keyframes`
	from {
    opacity: 0;
	}
	to {
    opacity: 1;
	}
`;

export const Inner = styled.form`
  background-color: #000;
  padding: 1rem;
  border-radius: 0.5rem;
  width: 100%;
  max-width: 480px;
  overflow: auto;
  color: #fff;
  max-height: calc(100vh - 4rem);
  animation: ${FadeIn} 0.3s ease-in;
`;

export const FormHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const ExitButton = styled.button`
  position: fixed;
  font-size: 16px;
  border-radius: 50%;
  border: 2px solid #000;
  color: #000;
  padding: 4px 8px;
  background-color: #fff;
  transition: 0.2s all ease-in;
  transform: translate(240px, -32px);
  cursor: pointer;

  &:hover {
    background-color: #000;
    color: #fff;
    border: 2px solid #fff;
  }
`;

export const Title = styled.div`
  display: flex;
  text-align: center;
  font-weight: bold;
  justify-content: center;
  font-size: 24px;
  border-bottom: 2px solid #000;
  margin-bottom: 6px;
`;

export const Radio = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const FormLabel = styled.label`
  margin: 8px 54px 8px 0;
  display: flex;
  align-items: center;
  font-size: 16px;
`;

export const FormRadioInput = styled.input``;

export const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormInput = styled.input`
  height: 36px;
  padding-left: 8px;
  padding-right: 8px;
  border-radius: 8px;
  font-size: 16px;
  margin-bottom: 8px;
`;

export const Button = styled.button`
  padding: 8px;
  font-size: 16px;
  margin-top: 16px;
  background-color: #ffe7b0;
  border: 2px solid;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: #000;
    color: #ffe7b0;
    transition: 0.2s all ease-in;
  }
`;

export const FormButton = styled.button`
  padding: 10px;
  font-size: 16px;
  margin-top: 16px;
  background-color: #000;
  border: 2px solid;
  color: #ffe7b0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: #ffe7b0;
    color: #000;
    transition: 0.2s all ease-in;
  }
`;
