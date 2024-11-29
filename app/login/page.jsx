"use client";
import { authenticate } from "../lib/actions";
import styles from "../ui/login/login.module.css";
import { useFormState } from "react-dom";

const Login = () => {
  const [state, formAction] = useFormState(authenticate, undefined);

  return (
    <div className={styles.container}>
      <form action={formAction} className={styles.form}>
        <h1>Login</h1>
        <input type="text" placeholder="username" name="username" />
        <input type="password" placeholder="password" name="password" />
        <button type="submit">Login</button>
        {state && state}
      </form>
    </div>
  );
};

export default Login;
