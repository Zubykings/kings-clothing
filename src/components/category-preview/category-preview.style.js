import styled from "styled-components";
import { Link } from "react-router-dom";

export const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0 0;
`;

export const Title = styled.span`
  font-size: 28px;
`;
export const ViewAll = styled(Link)`
  font-size: 16px;
  cursor: pointer;
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;

  @media screen and (max-width: 720px) {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 40px;
  }
`;
