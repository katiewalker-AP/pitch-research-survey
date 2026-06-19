'use client';

interface Props {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}

export default function OpenText({ value, onChange, placeholder }: Props) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={5}
      className={[
        'w-full px-4 py-4 rounded-lg border bg-cream font-sans text-base text-deep-blue',
        'placeholder:text-[#a09a93] resize-none leading-relaxed',
        'border-border focus:border-electric-blue focus:outline-none transition-colors duration-150',
      ].join(' ')}
    />
  );
}
