import styled from "styled-components";

const NumberCounter = ({ setError, error, selectNumber, setSelectNumber }) => {
  const numbers = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectNumber(value);
    setError("");
  };
  return (
    <>
      <Numbercounter>
        <p className="error">{error}</p>
        <div className="top_section">
          {numbers.map((value, index) => (
            <Box
              key={index}
              isSelected={value === selectNumber}
              onClick={() => numberSelectorHandler(value)}
            >
              {value}
            </Box>
          ))}
        </div>

        <p className="select_num">Select Numbers</p>
      </Numbercounter>
    </>
  );
};

export default NumberCounter;

const Numbercounter = styled.div`
  .error {
    display: flex;
    justify-content: end;
    font-size: 24px;
    color: red;
    margin-bottom: 5px;
  }

  .top_section {
    display: flex;
    gap: 24px;
  }

  .select_num {
    display: flex;
    justify-content: end;
    font-size: 24px;
    font-weight: 700;
  }
`;

const Box = styled.div`
  width: 72px;
  height: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
  cursor: pointer;
`;
