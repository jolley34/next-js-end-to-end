"use client";

import { IoIosLogIn, IoIosSearch } from "react-icons/io";
import { SlUserFollowing } from "react-icons/sl";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1.5rem 4rem;
  background-color: #434141;
`;

const InnerWrapper = styled.div``;

const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  margin: 0;
  color: lightblue;
  font-weight: 600;
  font-size: 1.5rem;
`;

const Nav = styled.div`
  display: flex;
  gap: 2rem;
`;

const ListItem = styled.p`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin: 0;
  color: white;
`;

const ListText = styled.p``;

export default function HeaderLayout() {
  return (
    <Wrapper>
      <SpaceBetween>
        <InnerWrapper>
          <Logo>event.</Logo>
        </InnerWrapper>
        <Nav>
          <ListItem>
            <IoIosSearch />
            <ListText>Search</ListText>
          </ListItem>
          <ListItem>
            <SlUserFollowing />
            <ListText>Following</ListText>
          </ListItem>
          <ListItem>
            <IoIosLogIn />
            <ListText>Login</ListText>
          </ListItem>
        </Nav>
      </SpaceBetween>
    </Wrapper>
  );
}
