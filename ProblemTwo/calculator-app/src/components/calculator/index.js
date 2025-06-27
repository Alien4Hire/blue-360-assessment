import { useState } from 'react';
import Display from './Display.js';
import ButtonGrid from './ButtonGrid';
import { evaluate } from 'mathjs';

const Calculator = () => {
  // State for current expression and result
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  // Handle button clicks
  const handleInput = (value) => {
    if (value === 'C') {
      setExpression('');
      setResult('');
    } else if (value === '=') {
      try {
        const sanitized = expression.replace(/x/g, '*');
        const evalResult = evaluate(sanitized);
        setResult(evalResult.toString());
      } catch {
        setResult('Error');
      }
    } else {
      setExpression(prev => prev + value);
    }
  };

  return (
    <div className="bg-gray-200 w-screen h-screen flex justify-center items-center">
      <div className="w-64 bg-white rounded-2xl shadow-xl border-4 border-gray-100">
        <div className="mx-3 my-2 h-6 flex justify-between text-sm">
          <div>08:57</div>
          <div className="flex items-center space-x-1 text-xs">
            <i className="fas fa-signal"></i>
            <i className="fas fa-wifi"></i>
            <i className="fas fa-battery-three-quarters"></i>
          </div>
        </div>
        <Display expression={expression} result={result} />
        <ButtonGrid onInput={handleInput} />
      </div>
    </div>
  );
};

export default Calculator;
