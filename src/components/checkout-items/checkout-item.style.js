import styled from "styled-components";
import { ReactComponent as Remove } from "../../assets/delete.svg";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: start;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
`;

export const NameAndPrice = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 720px) {
    font-size: 16px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const Name = styled.span``;

export const Quantity = styled.span`
  display: flex;
  align-items: center;
  font-size: 14px;
`;

export const Arrow = styled.div`
  font-size: 24px;
  cursor: pointer;
  background-color: red;
  padding: 2px 10px;
  border-radius: 5px;
  color: white;

  @media screen and (max-width: 720px) {
    padding: 0 7px;
    font-size: 20px;
  }
`;

export const Value = styled.span`
  margin: 0 10px;

  @media screen and (max-width: 720px) {
    margin: 0 4px;
  }
`;

export const DeleteIcon = styled(Remove)``;

export const RemoveButton = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 12px;
  cursor: pointer;
  opacity: 0.7;
  color: red;
  border-radius: 3px;
  font-size: 14px;
  font-weight: 600;

  & span {
    text-transform: uppercase;
    margin: 0 5px;
  }

  &:hover {
    background-color: black;
  }

  @media screen and (max-width: 720px) {
    font-size: 12px;
    padding: 0;

    & span {
      margin: 0;
    }
  }

  @media screen and (max-width: 900px) {
    padding: 0;
  }
`;

export const PriceContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
