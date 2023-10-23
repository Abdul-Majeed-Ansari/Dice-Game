import styled from "styled-components";

const TotalScore = ({ score }) => {
  return (
    <>
      <TotalscoreContainer>
        <h1>{score}</h1>
        <p>Total Score</p>
      </TotalscoreContainer>
    </>
  );
};

export default TotalScore;

const TotalscoreContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 200px;
  align-items: center;
  justify-content: end;
  h1 {
    font-size: 100px;
    font-weight: 500;
    line-height: 100px;
  }

  p {
    font-size: 24px;
    font-weight: 500;
    line-height: 36px;
  }
`;
