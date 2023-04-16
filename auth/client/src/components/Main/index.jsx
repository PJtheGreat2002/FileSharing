import styles from "./styles.module.css";

const Main = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className={styles.mainContainer}>
      <nav className={styles.navbar}>
        <h1>SecureSend</h1>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>
      <iframe src="http://localhost:3050/" > </iframe>
    </div>
  );
};

export default Main;
