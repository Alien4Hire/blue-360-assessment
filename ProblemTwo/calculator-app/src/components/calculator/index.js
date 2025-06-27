import { useEffect, useState } from 'react';
import Display from './Display.js';
import ButtonGrid from './ButtonGrid.js';
import { evaluate } from 'mathjs';

const Calculator = () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');
  const [justEvaluated, setJustEvaluated] = useState(false);
  const [lastExpression, setLastExpression] = useState('');

  const handleInput = (value) => {
    if (value === 'AC') {
      setExpression('');
      setResult('');
      setLastExpression('');
      setJustEvaluated(false);
    }

    else if (value === '=') {
    try {
        const sanitized = expression.replace(/x/g, '*');
        
        let evalResult = evaluate(sanitized);

        if (typeof evalResult === 'object' && evalResult !== null && typeof evalResult.toNumber === 'function') {
          evalResult = evalResult.toNumber();
        }

        const tooBig = Math.abs(evalResult) > 1e308;
        if (tooBig || !isFinite(evalResult)) {
          setResult('Error');
        } else {
          setResult(String(evalResult)); 
          setLastExpression(expression);
          setJustEvaluated(true);
        }
    } catch {
        setResult('Error');
        setJustEvaluated(false);
    }
    }

    else if (value === '%') {
      try {
        const sanitized = expression.replace(/x/g, '*');
        const evalResult = evaluate(sanitized) / 100;
        setExpression(evalResult.toString());
        setResult('');
        setJustEvaluated(true);
      } catch {
        setResult('Error');
        setJustEvaluated(false);
      }
    }

    else if (value === '+/-') {
      try {
        const sanitized = expression.replace(/x/g, '*');
        const evalResult = evaluate(sanitized) * -1;
        setExpression(evalResult.toString());
        setResult('');
        setJustEvaluated(true);
      } catch {
        setResult('Error');
        setJustEvaluated(false);
      }
    }

    else {
      const isOperator = ['+', '-', 'x', '/'].includes(value);

      if (justEvaluated) {
        if (isOperator) {
          setExpression(result + value);
        } else {
          setExpression(value);
          setResult('');
        }
        setLastExpression('');
        setJustEvaluated(false);
      } else {
        setExpression(prev => {
          const operators = ['+', '-', 'x', '/'];
          const lastChar = prev.slice(-1);

          if (operators.includes(value) && operators.includes(lastChar)) {
            return prev.slice(0, -1) + value;
          }

          if (value === '.') {
            const numberSegments = prev.split(/[+\-x/]/);
            const lastSegment = numberSegments[numberSegments.length - 1];
            if (lastSegment.includes('.')) {
              return prev;
            }
          }

          return prev + value;
        });
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key;
      if (key === 'Enter') {
        handleInput('=');
      } else if (key === 'Backspace') {
        setExpression(prev => prev.slice(0, -1));
      } else if ('0123456789+-*/.%'.includes(key)) {
        handleInput(key === '*' ? 'x' : key);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [expression, result, justEvaluated]);

  return (
    <div className="bg-gray-200 w-screen h-screen flex justify-center items-center">
      <div className="w-72 bg-black rounded-2xl shadow-xl overflow-hidden">
        <Display expression={justEvaluated ? lastExpression : expression} result={result} />
        <ButtonGrid onInput={handleInput} />
      </div>
    </div>
  );
};

export default Calculator;