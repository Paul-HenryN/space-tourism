export default function CarouselButton({ active, onClick, children }) {
  let finalClass =
    "flex align-center justify-center pd-xxs pd-md-xs txt-secondary border border-1 border-secondary square round hover-bg-secondary hover-txt-primary";

  if (active) {
    finalClass = finalClass.replace("txt-secondary", "txt-primary");
    finalClass += " bg-secondary";
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
