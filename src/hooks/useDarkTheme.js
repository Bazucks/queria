import { useEffect, useState } from "react";

const useDarkTheme = () => {
  const [theme, setTheme] = useState(localStorage.theme);
  const mode = theme === "dark" ? "light" : "dark";
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(mode);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, mode]);
  return [mode, setTheme];
};

export default useDarkTheme;
