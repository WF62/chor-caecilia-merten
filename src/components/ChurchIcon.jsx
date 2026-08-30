export default function ChurchIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="12" y1="0.5" x2="12" y2="3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="10.6" y1="1.4" x2="13.4" y2="1.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path
        d="M12 3 L21 12.5 L18.5 12.5 L18.5 21 L5.5 21 L5.5 12.5 L3 12.5 Z"
        fill="currentColor"
      />
      <rect x="10.3" y="16" width="3.4" height="5" fill="var(--church-icon-bg, #fff)" />
    </svg>
  )
}
