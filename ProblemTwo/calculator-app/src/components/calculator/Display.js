const Display = ({ expression, result }) => {
  return (
    <div className="mx-3 my-2 h-28 text-right space-y-2 py-2">
      {/* Expression being typed */}
      <div className="text-gray-700 break-words text-sm">
        {expression || '0'}
      </div>

      {/* Result after evaluation */}
      <div className="text-black font-bold text-3xl">
        {result || ''}
      </div>
    </div>
  );
};

export default Display;
