const buttons = [
  ['C', '(', ')', '/'],
  ['7', '8', '9', 'x'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '='],
];

const ButtonGrid = ({ onInput }) => {
  return (
    <div className="m-1 mb-2">
      {buttons.map((row, i) => (
        <div key={i} className="m-2 flex justify-between">
          {row.map((btn) => (
            <button
              key={btn}
              onClick={() => onInput(btn)}
              className={`shadow-md rounded-2xl h-12 flex justify-center items-center font-medium
                ${
                  btn === 'C'
                    ? 'bg-yellow-100 text-yellow-600 w-12'
                    : btn === '='
                    ? 'bg-green-500 text-white w-12'
                    : ['/', 'x', '-', '+'].includes(btn)
                    ? 'bg-yellow-500 text-white w-12 text-xl'
                    : btn === '0'
                    ? 'bg-gray-200 text-black flex-1'
                    : 'bg-gray-200 text-black w-12'
                }
              `}
            >
              {btn}
            </button>
          ))}
        </div>
      ))}
      <div className="flex justify-center mt-5">
        <div className="w-20 h-1 bg-gray-100 rounded-xl"></div>
      </div>
    </div>
  );
};

export default ButtonGrid;
