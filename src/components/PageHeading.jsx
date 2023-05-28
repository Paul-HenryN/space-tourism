import styles from "../styles/components/PageHeading.module.css";
import Row from "./Layout/Row";

export default function PageHeading({ children, number }) {
  return (
    <h1 className={`${styles.pageHeading} page-heading`}>
      <Row className="justify-center col-gap-3xs mg-btm-sm justify-md-start mg-top-md-sm mg-left-sm-lg mg-left-lg-4xl">
        <p className="txt-neutral">{number}</p>
        <p>{children}</p>
      </Row>
    </h1>
  );
}
