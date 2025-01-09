import { useEffect } from "react";
import axios from "axios";

/**
 * This component checks whether the user is authorized / logged in or not
 */
const Authorized = () => {
  const apiURL = import.meta.env.PUBLIC_API_URL;

  useEffect(() => {
    const token = localStorage.getItem('session_token');

    if (!token) {
      globalThis.window.location.replace('/login');
      return;
    }

    axios
      .get(`${apiURL}/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch(() => {
        localStorage.removeItem('session_token');
        globalThis.window.location.replace('/login');
      });
  }, []);

  return <div></div>;
};

export default Authorized;
