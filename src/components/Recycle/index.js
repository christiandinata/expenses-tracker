import React from "react";
import { Container, Content, Cycle } from "./RecycleElements";

function Recycle({ cycle, setCycle }) {
  return (
    <Container onClick={() => setCycle(!cycle)}>
      <Cycle />
    </Container>
  );
}

export default Recycle;
