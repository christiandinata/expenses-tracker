import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import styled from "styled-components";
import { auth, provider } from "../firebase";

function Login() {
  const SignInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(result, "dan", result.user);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <>
      <Container>
        <LoginContainer>
          <Title>Expenses Tracker 2.0</Title>
          <Button onClick={SignInWithGoogle}>Sign in with Google</Button>
        </LoginContainer>
      </Container>
    </>
  );
}

export default Login;

const Container = styled.div`
  display: grid;
  /* place-items: center; */
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: whitesmoke;
`;

const LoginContainer = styled.div`
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 6px;
  box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.7);
  /* align-items: center; */
`;

const Title = styled.div`
  font-size: 26px;
  margin-bottom: 40px;
  font-weight: bold;
  border-bottom: 2px solid;
`;

// const Logo = styled.img`
//   height: 200px;
//   width: 200px;
//   margin-bottom: 50px;
// `;

const Button = styled.div`
  padding: 16px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffe7b0;
  border-radius: 8px;
  color: #000;
  cursor: pointer;
  transition: 0.2s all ease-in;

  &:hover {
    background-color: #000;
    color: #ffe7b0;
  }
`;
