const buttons = [
  ['AC', '+/-', '%', '÷'],
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
        const baseClasses = `h-16 md:h-20 text-xl md:text-2xl font-light flex justify-center items-center active:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 ${
          ['÷', 'x', '-', '+', '='].includes(btn)
            ? 'bg-orange-500 text-white'
            : btn === 'AC' || btn === '+/-' || btn === '%'
            ? 'bg-gray-400 text-black'
            : 'bg-gray-200 text-black'
        }`;

        return (
          <button
            key={index}
            onClick={(e) => {
              onInput(btn);
              e.target.blur();
            }}
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