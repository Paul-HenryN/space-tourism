import styles from "../styles/components/PageHeading.module.css";
import Row from "./Layout/Row";

export default function PageHeading({ className, children, number }) {
  return (
    <h1
      className={`${className} ${styles.pageHeading} page-heading mg-top-xs mg-top-md-lg mg-top-xl-xs mg-left-sm-md mg-top-wlg-hmd-xl`}
    >
      <Row className="justify-center col-gap-3xs justify-md-start">
        <p className="txt-neutral">{number}</p>
        <p>{children}</p>
      </Row>
    </h1>
  );
}
