import Link from "next/link";
import styles from "../styles/MenuItem.module.css";

const MenuItem = ({
  name,
  icon,
  link,
}: {
  name: string;
  icon: JSX.Element;
  link: string;
}) => {
  return (
    <Link className={styles.menuItem} href={link}>
      <div className={styles.menuItem__content}>
        {icon}
        <p className={styles.menuItem__name}>{name}</p>
      </div>
    </Link>
  );
};

export default MenuItem;
