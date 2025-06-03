import { useTheme } from "../../../.storybook/ThemeProvider";
export const Button = ({ label }: { label: string }) => {
  const { theme } = useTheme();
  return (
    <div className="flex justify-center items-center ">
      <button
        aria-label="submit"
        className={`${
          theme === "dark" ? "bg-amber-300 text-black" : "bg-black text-white"
        } px-4 py-2 rounded`}
      >
        {label}
      </button>
    </div>
  );
};


