import styles from "./styles.module.css";

interface AboutLayoutProps {
  children: React.ReactNode;
}

export default function AboutLayout({ children }: AboutLayoutProps) {
  return (
    <>
      <nav>About nav bar</nav>
      <main className={styles.main}>{children}</main>
    </>
  );
}
