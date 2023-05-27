export default function TabLink({ className, active, children, onClick }) {
  let finalClass =
    "txt-neutral txt-upper pd-block-3xs hover-underlined txt-ls-1 txt-fs-7";

  if (active) {
    finalClass += " txt-secondary underlined";
  }

  return (
    <button
      className={finalClass}
      onClick={() => {
        onClick();
      }}
    >
      {children}
    </button>
  );
}
