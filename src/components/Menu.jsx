import styles from "../styles/components/Menu.module.css";

export default function Menu({ className }) {
  return (
    <nav className={`${styles.menu} ${className}`}>
      <ul className="flex col-gap-md" role="list">
        <li>Home</li>
        <li>Destination</li>
        <li>Crew</li>
        <li>Technology</li>
      </ul>
    </nav>
  );
}
