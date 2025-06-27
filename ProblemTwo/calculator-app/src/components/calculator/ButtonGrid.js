const buttons = [
  ['C', '+/-', '%', '÷'],
  ['7', '8', '9', 'x'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '='],
];

const ButtonGrid = ({ onInput }) => {
  return (
    <div className="grid grid-cols-4 gap-px bg-gray-400">
      {buttons.flat().map((btn, index) => {
        const isZero = btn === '0';

        // Determine base button classes
        const baseClasses = `h-16 md:h-20 text-xl md:text-2xl font-light flex justify-center items-center ${
          ['÷', 'x', '-', '+', '='].includes(btn)
            ? 'bg-orange-500 text-white'
            : btn === 'C' || btn === '+/-' || btn === '%'
            ? 'bg-gray-400 text-black'
            : 'bg-gray-200 text-black'
        }`;

        return (
          <button
            key={index}
            onClick={() => onInput(btn)}
            className={`${baseClasses} ${isZero ? 'col-span-2' : ''}`}
          >
            {btn}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonGrid;
