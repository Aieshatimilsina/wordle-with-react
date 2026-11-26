const ROWS = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['Enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Backspace'],
];

// On-screen keyboard. Clicking a key calls the same handler as the real keyboard.
export default function Keyboard({ usedKeys, onKeyPress }) {
  return (
    <div className="keyboard">
      {ROWS.map((row, i) => (
        <div className="keyboard-row" key={i}>
          {row.map((key) => {
            const className = `key ${usedKeys[key] || ''}`.trim();
            return (
              <button
                key={key}
                className={className}
                onClick={() => onKeyPress(key)}
              >
                {key === 'Backspace' ? '⌫' : key}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}
