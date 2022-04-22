import styled from "styled-components";

export const CardContainer = styled.div`
  height: 240px;
  width: 100%;
  background: #4f6190;
  border-radius: 25px;
  margin-top: 25px;
  padding: 20px;

  img {
    height: 200px;
  }
`;

export const Info = styled.div`
  padding: 10px 20px;
  letter-spacing: -0.01em;

  h1,
  p {
    color: #e6efff;
  }

  h1 {
    font-weight: 900;
    font-size: 2.6rem;

    span {
      color: #ffeeca;
      font-weight: 600;
      font-size: 1.1rem;
      margin-left: 10px;
    }
  }

  p {
    margin-top: 5px;
  }
`;
