import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  background: #ddd;
`;

export const Content = styled.div`
  position: relative;
  height: 100%;
`;

export const PopContainer = styled.div`
  position: fixed;
  bottom: 150px;
  right: 20px;
  background: red;
  width: 734px;
  height: 737px;
  border-radius: 10px;
  background: #fff;
  padding: 24px;
  overflow: hidden;
`;

export const BubbleFooter = styled.div`
  position: absolute;
  bottom: 50px;
  right: 0;
  display: flex;
`;
