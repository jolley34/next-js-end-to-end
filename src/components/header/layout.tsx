"use client";

import styled from "styled-components";

const Wrapper = styled.div`
  padding: 2rem;
  background-color: #e2e2e2;
`;

const InnerWrapper = styled.div``;

const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.h1`
  margin: 0;
`;

export default function HeaderLayout() {
  return (
    <Wrapper>
      <SpaceBetween>
        <InnerWrapper>
          <Logo>compani.</Logo>
        </InnerWrapper>
      </SpaceBetween>
    </Wrapper>
  );
}
