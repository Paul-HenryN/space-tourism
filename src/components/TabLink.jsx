export default function TabLink({ className, active, children, onClick }) {
  let finalClass =
    "ff-secondary txt-neutral txt-upper txt-ls-1 txt-fs-7 pd-block-3xs hover-underlined";

  if (active) {
    finalClass += " underlined";
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
