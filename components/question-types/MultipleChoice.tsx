'use client';

interface Props {
  options: string[];
  value: string | null;
  onChange: (v: string) => void;
}

export default function MultipleChoice({ options, value, onChange }: Props) {
  return (
    <div className="flex flex-col gap-3">
      {options.map((option) => {
        const selected = value === option;
        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={[
              'w-full text-left px-5 py-4 rounded-xl border transition-all duration-150',
              'font-sans text-base leading-snug',
              selected
                ? 'border-electric-blue bg-[#f0f3ff] text-deep-blue font-medium'
                : 'border-border bg-white text-deep-blue hover:border-electric-blue hover:bg-[#f0f3ff]',
            ].join(' ')}
          >
            <span className="flex items-center gap-3">
              {/* Radio dot */}
              <span
                className={[
                  'flex-shrink-0 w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors',
                  selected ? 'border-electric-blue' : 'border-[#c4bfb8]',
                ].join(' ')}
              >
                {selected && (
                  <span className="w-2 h-2 rounded-full bg-electric-blue block" />
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
