import { useState } from 'react';
import Display from './Display.js';
import ButtonGrid from './ButtonGrid.js';
import { evaluate } from 'mathjs';

const Calculator = () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

    const handleInput = (value) => {
    if (value === 'C') {
        setExpression('');
        setResult('');
    } else if (value === '=') {
        try {
        const sanitized = expression.replace(/x/g, '*');
        const evalResult = evaluate(sanitized);

        const resultStr = evalResult.toString();
        const tooBig = Math.abs(evalResult) > 1e308 || resultStr.length > 15;

        if (tooBig || !isFinite(evalResult)) {
            setResult('Error');
        } else {
            setResult(resultStr);
        }
        } catch {
        setResult('Error');
        }
    }

    // Handle percent operation
    else if (value === '%') {
        try {
        const sanitized = expression.replace(/x/g, '*');
        const evalResult = evaluate(sanitized) / 100;
        setExpression(evalResult.toString());
        setResult('');
        } catch {
        setResult('Error');
        }
    }

    // Handle negation toggle
    else if (value === '+/-') {
        try {
        const sanitized = expression.replace(/x/g, '*');
        const evalResult = evaluate(sanitized) * -1;
        setExpression(evalResult.toString());
        setResult('');
        } catch {
        setResult('Error');
        }
    }

    // Append values to expression
    else {
        setExpression(prev => prev + value);
    }
    };


  return (
    <div className="bg-gray-200 w-screen h-screen flex justify-center items-center">
      <div className="w-72 bg-black rounded-2xl shadow-xl overflow-hidden">
        <Display expression={expression} result={result} />
        <ButtonGrid onInput={handleInput} />
      </div>
    </div>
  );
};

export default Calculator;
