export default function Row({ className, children }) {
  return <div className={`flex ${className}`}>{children}</div>;
}
