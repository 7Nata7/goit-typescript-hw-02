import { Hearts } from "react-loader-spinner";
import styles from "./LoaderComponent.module.css";

export default function LoaderComponent({ loading }) {
  return (
    <div className={styles.loaderStyle}>
      <Hearts
        visible={loading}
        height="80"
        width="80"
        color="#5ad4f3"
        ariaLabel="hearts-loading"
        wrapperClass=""
      />
    </div>
  );
}