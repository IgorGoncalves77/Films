import styled from "styled-components";

export const ViewContainer = styled.div`
  position: fixed;
  z-index: 1000;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;

  height: 100%;
  outline: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const ViewCard = styled.div`
  background-color: #000;
  color: #fff;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 4px;
  box-shadow: 0px 11px 15px -7px rgb(0 0 0 / 20%),
    0px 24px 38px 3px rgb(0 0 0 / 14%), 0px 9px 46px 8px rgb(0 0 0 / 12%);
  margin: 32px;
  position: relative;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  max-height: calc(100% - 64px);
  max-width: 600px;
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
  padding: 16px 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
`;

export const TextDescription = styled.div`
  color: #c4c4c4;
  padding-left: 30px;
`;
