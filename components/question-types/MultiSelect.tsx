'use client';

interface Props {
  options: string[];
  value: string[];
  onChange: (v: string[]) => void;
}

export default function MultiSelect({ options, value, onChange }: Props) {
  const toggle = (option: string) => {
    if (value.includes(option)) {
      onChange(value.filter((v) => v !== option));
    } else {
      onChange([...value, option]);
    }
  };

  return (
    <div className="flex flex-col gap-3">
      {options.map((option) => {
        const checked = value.includes(option);
        return (
          <button
            key={option}
            type="button"
            onClick={() => toggle(option)}
            className={[
              'w-full text-left px-5 py-4 rounded-xl border transition-all duration-150',
              'font-sans text-base leading-snug',
              checked
                ? 'border-electric-blue bg-[#f0f3ff] text-deep-blue font-medium'
                : 'border-border bg-white text-deep-blue hover:border-electric-blue hover:bg-[#f0f3ff]',
            ].join(' ')}
          >
            <span className="flex items-center gap-3">
              {/* Checkbox */}
              <span
                className={[
                  'flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors',
                  checked ? 'border-electric-blue bg-electric-blue' : 'border-[#c4bfb8] bg-white',
                ].join(' ')}
              >
                {checked && (
                  <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                    <polyline
                      points="2,6 5,9 10,3"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </span>
              {option}
            </span>
          </button>
        );
      })}
    </div>
  );
}
