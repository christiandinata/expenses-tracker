import React, { useState } from "react";
import {
  Container,
  Inner,
  ExitButton,
  Title,
  Radio,
  FormRadioInput,
  FormInput,
  FormLabel,
  Button,
  FormButton,
  FormHeader,
  FlexRow,
  FlexCol,
} from "./PopUpElements";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { auth } from "../../firebase";

function PopUp({ popUp, setPopUp, bigData, setBigData }) {
  const user = auth.currentUser;
  const [values, setValues] = useState({
    name: "",
    class: "",
    qty: "",
    price: "",
    timestamp: new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(Date.now()),
    viewing: false,
  });

  const collectionRef = collection(db, user.email);

  for (var i = 0; i < bigData.length; i++) {
    // oldest to newest
    if (bigData[i + 1]?.timestamp < bigData[i]?.timestamp) {
      var temp = bigData[i];
      bigData[i] = bigData[i + 1];
      bigData[i + 1] = temp;
    }
  }

  function addTransaction(e) {
    e.preventDefault();

    if (!values.name || !values.class || !values.qty || !values.price) {
      alert("Please fill out all the fields");
      return;
    }

    addDoc(collectionRef, values);

    setValues({
      ...values,
      name: "",
      class: "",
      qty: "",
      price: "",
      timestamp: Date.now(),
      viewing: false,
    });

    setPopUp(false);
  }

  function addToDrive(e) {
    e.preventDefault();
    // add a picture to gdrive
  }

  return (
    <>
      <Container>
        <Inner popUp={popUp} onSubmit={addTransaction}>
          <FormHeader>
            <Title>Add Transaction</Title>
            <ExitButton onClick={() => setPopUp(false)}>X</ExitButton>
          </FormHeader>
          <FormLabel>Kind of transaction:</FormLabel>
          <Radio
            onChange={(e) => setValues({ ...values, class: e.target.value })}
          >
            <FormLabel for="income">
              <FormRadioInput
                id="income"
                type="radio"
                value="Income"
                name="category"
                style={{ marginRight: "6px" }}
              />
              Income
            </FormLabel>
            <FormLabel for="expenses">
              <FormRadioInput
                id="expenses"
                type="radio"
                value="Expenses"
                name="category"
                style={{ marginRight: "6px" }}
              />
              Expenses
            </FormLabel>
          </Radio>
          <FormLabel>Date</FormLabel>
          <FormInput
            type="date"
            value={values.date}
            onChange={(e) => setValues({ ...values, date: e.target.value })}
          />
          <FlexRow>
            <FlexCol>
              <FormLabel>Item Name</FormLabel>
              <FormInput
                type="text"
                value={values.name}
                onChange={(e) => setValues({ ...values, name: e.target.value })}
              />
            </FlexCol>
            <FlexCol>
              <FormLabel>Item Qty</FormLabel>
              <FormInput
                type="number"
                value={values.qty}
                onChange={(e) => setValues({ ...values, qty: e.target.value })}
              />
            </FlexCol>
          </FlexRow>
          <FormLabel>Item Price (each)</FormLabel>
          <FormInput
            type="number"
            value={values.price}
            onChange={(e) => setValues({ ...values, price: e.target.value })}
          />
          <Button onClick={addToDrive}>
            Add to Google Drive{" "}
            <img
              src="/google-drive.png"
              width="24"
              height="24"
              style={{ marginLeft: "8px" }}
            />
          </Button>
          <FormButton type="submit" onClick={addTransaction}>
            Add
          </FormButton>
        </Inner>
      </Container>
    </>
  );
}

export default PopUp;
