export default function LoadingScreen({ visible }) {
  return (
    <div
      className="loading-screen"
      style={{ opacity: visible ? 1 : 0, pointerEvents: visible ? 'all' : 'none' }}
    >
      <div className="text-center">
        <svg width="80" height="52" viewBox="0 0 80 52" xmlns="http://www.w3.org/2000/svg">
          <text x="0" y="40" fontFamily="EB Garamond, serif" fontSize="44" fontWeight="700" fill="#e6c364" letterSpacing="-2" fontStyle="italic">Z</text>
          <line x1="34" y1="46" x2="48" y2="6" stroke="#e6c364" strokeWidth="1.5" opacity="0.5" />
          <text x="46" y="40" fontFamily="EB Garamond, serif" fontSize="44" fontWeight="700" fill="#e6c364" letterSpacing="-2" fontStyle="italic">M</text>
        </svg>
        <div className="mt-4 h-[1px] w-24 bg-outline-variant/30 overflow-hidden relative mx-auto">
          <div className="absolute inset-0 bg-primary gold-shimmer" />
        </div>
      </div>
    </div>
  )
}
