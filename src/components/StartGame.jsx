import styled from "styled-components";
import { Button } from "../styled/Button";

const Startgame = styled.div`
  max-width: 1180px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;

  .content {
    h1 {
      font-size: 96px;
      font-weight: 700;
      white-space: nowrap;
    }
  }

  .btn_container {
    display: flex;
    justify-content: end;
  }

  button {
  }
`;

const StartGame = ({ toggle }) => {
  return (
    <>
      <Startgame>
        <div>
          <img src="/images/dice.png" alt="dice" />
        </div>

        <div className="content">
          <h1>DICE GAME</h1>
          <div className="btn_container">
            <Button onClick={toggle}>Play Game</Button>
          </div>
        </div>
      </Startgame>
    </>
  );
};

export default StartGame;
