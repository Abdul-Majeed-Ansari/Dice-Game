import styled from "styled-components"

const RollDice = ({currentDice, rollDice}) => {


  return (
    <>
    <DiceCounter>
        <div className="dice">
        <img src={`/images/dice/dice_${currentDice}.png`} alt="dice_1"
        onClick={rollDice}
        />
        </div>
        <p>Click on Dice to roll</p>
    </DiceCounter>
    </>
  )
}

export default RollDice

const DiceCounter = styled.div`
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .dice{
        cursor: pointer;
    }

    p{
        font-size: 24px;
        font-weight: 500;
        line-height: 36px;
    }
`