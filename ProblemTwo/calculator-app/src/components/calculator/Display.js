const Display = ({ expression, result }) => {
  return (
    <div className="bg-black text-white">
      {/* Fake status bar */}
      <div className="px-4 py-1 text-xs flex justify-between items-center">
        <div>08:57</div>
        <div className="flex gap-1">
          <span>📶</span>
          <span>📡</span>
          <span>🔋</span>
        </div>
      </div>

      {/* Calculator display */}
      <div className="text-right px-4 py-6">
        <div className="text-gray-400 text-sm break-words">{expression || '0'}</div>
        <div className="text-white font-light text-5xl leading-none">{result || ''}</div>
      </div>
    </div>
  );
};

export default Display;
