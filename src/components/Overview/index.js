import React, { useState, useEffect } from "react";
import {
  Container,
  DatePicker,
  Header,
  DataInner,
  AddIcon,
  Item,
  ItemName,
  ItemQty,
  ItemLeft,
  ItemPrice,
  DataHeader,
  Name,
  Qty,
  Price,
  DataLeft,
  DataReport,
  DataReportItem,
  ItemButton,
} from "./OverviewElements";
import { db, auth } from "../../firebase";
import { collection, onSnapshot, doc, deleteDoc } from "firebase/firestore";
import NumberFormat from "react-number-format";

function Overview({ setPopUp, bigData, setBigData, cycle }) {
  const user = auth.currentUser;
  const [expenses, setExpenses] = useState([]);
  const [income, setIncome] = useState([]);
  const collectionRef = collection(db, user.email);

  const totalExpenses = expenses
    .filter((element) => element !== undefined)
    .reduce((a, v) => (a = a + v), 0);

  const totalIncome = income
    .filter((element) => element !== undefined)
    .reduce((a, v) => (a = a + v), 0);

  const total = totalIncome - totalExpenses;
  const [windowWidth, setWindowWidth] = useState(2000);

  for (var i = 0; i < bigData.length; i++) {
    // oldest to newest
    if (bigData[i + 1]?.timestamp < bigData[i]?.timestamp) {
      var temp = bigData[i];
      bigData[i] = bigData[i + 1];
      bigData[i + 1] = temp;
    }
  }

  function reportWindowSize() {
    setWindowWidth(window.innerWidth);
  }

  window.onresize = reportWindowSize;

  useEffect(() => {
    onSnapshot(collectionRef, (snapshot) => {
      setBigData(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            viewing: false,
            ...doc.data(),
          };
          // console.log(doc);
        })
      );
    });
  }, []);

  useEffect(() => {
    setExpenses([]);
    onSnapshot(collectionRef, (snapshot) => {
      setExpenses(
        snapshot.docs.map((doc) => {
          if (doc?.data()?.class === "Expenses") {
            return doc?.data()?.price * doc?.data()?.qty;
          }
        })
      );
      setIncome(
        snapshot.docs.map((doc) => {
          if (doc?.data()?.class === "Income") {
            return doc?.data()?.price * doc?.data()?.qty;
          }
        })
      );
    });
  }, []);

  console.log(bigData);

  function handleItemHover(id, info) {
    const itemClone = [...bigData];

    itemClone.forEach((item) => {
      if (item.id === id && info === "enter") {
        item.viewing = true;
      } else {
        item.viewing = false;
      }
    });

    setBigData(itemClone);
  }

  const handleRemove = (id) => {
    deleteDoc(doc(db, user.email, id));
  };

  return (
    <>
      <Container cycle={cycle}>
        <Header>
          <b>Daily Transactions</b>
          <AddIcon fontSize="large" onClick={() => setPopUp(true)} />
        </Header>
        <DatePicker>Do something about date here</DatePicker>
        <DataInner>
          <DataHeader>
            <DataLeft>
              <Name>Name</Name>
              <Qty>Qty</Qty>
            </DataLeft>
            <Price>Price (total)</Price>
          </DataHeader>
          {bigData?.map((data, idx) => (
            <Item
              key={data.id}
              type={data?.class}
              onMouseEnter={() => handleItemHover(data.id, "enter")}
              onMouseLeave={() => handleItemHover(data.id, "leave")}
            >
              <ItemLeft>
                <ItemName>{data?.name}</ItemName>
                <ItemQty>(x{data?.qty})</ItemQty>
              </ItemLeft>
              <ItemButton
                onClick={() => handleRemove(data.id)}
                visible={data.viewing}
              >
                {windowWidth < 768 ? "X" : "Delete"}
              </ItemButton>
              <ItemPrice>
                <NumberFormat
                  value={data?.price * data?.qty}
                  thousandSeparator={true}
                  prefix={"$"}
                  displayType="text"
                />
              </ItemPrice>
            </Item>
          ))}
        </DataInner>
        <DataReport>
          <DataReportItem>
            <p>Income:</p>
            <p style={{ color: "green" }}>
              <NumberFormat
                value={totalIncome}
                thousandSeparator={true}
                prefix={"$"}
                displayType="text"
              />
            </p>
          </DataReportItem>
          <DataReportItem>
            <p>Expenses:</p>
            <p>
              {" "}
              -
              <NumberFormat
                value={totalExpenses}
                thousandSeparator={true}
                prefix={"$"}
                displayType="text"
              />
            </p>
          </DataReportItem>
          <br />
          <DataReportItem>
            <p>Total:</p>
            <p style={{ color: total < 0 ? "red" : "green" }}>
              {" "}
              <NumberFormat
                value={total}
                thousandSeparator={true}
                prefix={"$"}
                displayType="text"
              />
            </p>
          </DataReportItem>
        </DataReport>
      </Container>
    </>
  );
}

export default Overview;
