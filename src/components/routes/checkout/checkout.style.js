import styled from "styled-components";

export const Container = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 120px auto 0;
`;

export const Header = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const Block = styled.div`
  text-transform: capitalize;
  font-weight: semibold;
  font-size: 24px;

  & span:last-child {
    margin: 0 4px;
  }

  @media screen and (max-width: 720px) {
    font-size: 12px;
  }
`;
export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;

  @media screen and (max-width: 720px) {
    font-size: 20px;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;
