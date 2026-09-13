import { useState } from "react";
import { validateUser } from "../../utils/validateUser";
import styles from "./Login.module.css";
import Modal from "../../components/Modal/Modal";
import { useNavigate } from "react-router";
import { store } from "../../store/store";
import Button from "../../components/Button/Button";

const Login = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const login = formData.get("login");
    const password = formData.get("password");

    const isValidUser = validateUser(login, password);

    if (isValidUser && login && typeof login === "string") {
      store.dispatch({ type: "login", payload: login });
      navigate("/");
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <div>
      <form className={styles.form} onSubmit={submit}>
        <input
          className={styles.input}
          type="text"
          name="login"
          placeholder="Введите ваш логин"
        />
        <input
          className={styles.input}
          type="password"
          name="password"
          placeholder="Введите ваш пароль"
        />
        <Button type="submit">Войти</Button>
      </form>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <p>Вход невозможен – неправильные логин или пароль.</p>
      </Modal>
    </div>
  );
};

export default Login;
