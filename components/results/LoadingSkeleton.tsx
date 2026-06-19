export default function LoadingSkeleton() {
  return (
    <div className="animate-pulse">
      {/* Metric cards */}
      <div className="max-w-5xl mx-auto px-5 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-white border border-border rounded-xl p-5 h-28" />
          ))}
        </div>
        {/* Word cloud placeholder */}
        <div className="bg-white border border-border rounded-xl p-6 h-48 mb-6" />
        {/* Chart placeholders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="bg-white border border-border rounded-xl p-6 h-56" />
          <div className="bg-white border border-border rounded-xl p-6 h-56" />
        </div>
      </div>
    </div>
  );
}
