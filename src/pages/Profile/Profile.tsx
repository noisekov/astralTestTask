import EditView from "../../components/EditView/EditView";
import { profileFields } from "../../services/fields";
import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Профиль</h1>

        <p className={styles.description}>
          Измените данные профиля и сохраните изменения.
        </p>

        <EditView fields={profileFields} />
      </div>
    </main>
  );
};

export default Profile;
