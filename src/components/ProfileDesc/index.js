import React, { useState } from "react";
import {
  CategoryChart,
  Chart,
  ChartImg,
  ChartTitle,
  ChartTotal,
  ChartWrapper,
  Container,
  Identity,
  Income,
  Item,
  ItemName,
  Outcome,
  Profile,
  Username,
  Email,
  ProfilePicture,
  Title,
  Total,
  Expander,
  LeftChevron,
  RightChevron,
  Inner,
} from "./ProfileDescElements";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Avatar from "@mui/material/Avatar";

function ProfileDesc({ activeChart }) {
  const user = auth.currentUser;
  const [expandedProfile, setExpandedProfile] = useState(false);
  console.log(activeChart);
  return (
    <Inner activeChart={activeChart}>
      {!activeChart && (
        <Expander
          expanded={expandedProfile}
          onClick={() => setExpandedProfile(!expandedProfile)}
        >
          {expandedProfile ? <RightChevron /> : <LeftChevron />}
        </Expander>
      )}

      <Container expanded={expandedProfile} activeChart={activeChart}>
        <Profile>
          <Identity>
            <Username>{user.displayName}</Username>
            <Email>{user.email}</Email>
          </Identity>
          {user?.photoURL ? (
            <Avatar src={user?.photoURL} />
          ) : (
            <Avatar src={user?.email[0]} />
          )}
        </Profile>
        <Chart>
          <Title>Monthly Overview</Title>
          <ChartWrapper>
            <Outcome>
              <ChartTitle>Expense</ChartTitle>
              <ChartImg src="/stats.png" alt="outcome chart" />
              <ChartTotal>
                <b>-$20.00</b>
              </ChartTotal>
            </Outcome>
            <Income>
              <ChartTitle>Income</ChartTitle>
              <ChartImg src="/stats.png" alt="income chart" />
              <ChartTotal>
                <b>+$1200.00</b>
              </ChartTotal>
            </Income>
          </ChartWrapper>
        </Chart>
        <CategoryChart>
          <Title>Expenses by category</Title>
          <Item>
            <ItemName>Food & Beverage</ItemName>
            <Total>$450.00</Total>
          </Item>
          <Item>
            <ItemName>Utilities</ItemName>
            <Total>$150.00</Total>
          </Item>
          <Item>
            <ItemName>Household</ItemName>
            <Total>$77.00</Total>
          </Item>
        </CategoryChart>
      </Container>
    </Inner>
  );
}

export default ProfileDesc;
