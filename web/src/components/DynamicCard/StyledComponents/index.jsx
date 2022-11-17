import styled from "styled-components";

export const Card = styled.div`
  background-color: #000;
  color: #fff;
  width: 250px;
  height: 300px;
  margin: 25px;
  display: block;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 10px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  overflow: hidden;
`;

export const CardContent = styled.div`
  padding: 16px;
`;
export const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const GridInformations = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 16px 16px 16px;
`;

export const TextScore = styled.div`
  color: #b68d4a;
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 1.5;
`;
export const TextData = styled.div`
  font-size: 0.775rem;
  line-height: 1.5;
`;
export const TextDescription = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  white-space: nowrap;
  color: #c4c4c4;
`;
