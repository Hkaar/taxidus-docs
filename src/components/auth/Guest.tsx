import { useEffect } from "react";

/**
 * This component checks to see whether the user is not logged in
 */
const Guest = () => {
  const apiURL = import.meta.env.PUBLIC_API_URL;

  useEffect(() => {
    const token = localStorage.getItem('session_token');

    if (token) {
      globalThis.window.location.replace('/home');
      return;
    }
  }, []);

  return <div></div>;
};

export default Guest;
