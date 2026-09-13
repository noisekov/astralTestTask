import EditView from "../../components/EditView/EditView";
import { profileFields } from "../../services/fields";
import styles from "./Profile.module.css";
import Button from "../../components/Button/Button";
import { useAppDispatch } from "../../hooks/redux";

const Profile = () => {
  const dispatch = useAppDispatch();

  const logout = () => {
    dispatch({ type: "logout" });
  };

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Профиль</h1>
          <Button onClick={logout}>Выйти</Button>
        </div>

        <p className={styles.description}>
          Измените данные профиля и сохраните изменения.
        </p>

        <EditView fields={profileFields} />
      </div>
    </main>
  );
};

export default Profile;
