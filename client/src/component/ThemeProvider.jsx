import { useSelector } from "react-redux";
export default function ThemeProvider({ children }) {
  const { theme } = useSelector((state) => state.theme);
  console.log(theme);

  return (
    <div className={theme}>
      <div className='bg-white text-gray-700 dark:bg-black dark:text-gray-200 min-h-screen'>
        {children}
      </div>
    </div>
  );
}
