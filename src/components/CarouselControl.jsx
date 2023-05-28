import styles from "../styles/components/CarouselControl.module.css";

export default function CarouselControl({ active, onClick }) {
  let finalClass = "";

  if (active) {
    finalClass += " bg-secondary";
  }

  return (
    <button
      className={`${styles.control} ${finalClass}`}
      onClick={() => {
        onClick();
      }}
    />
  );
}
