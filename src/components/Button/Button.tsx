export const Button = ({ label }: { label: string }) => {
  return (
    <div className="flex justify-center items-center ">
      <button
        aria-label="submit"
        className="dark:bg-amber-300 dark:text-black bg-black text-white px-4 py-2 rounded"
      >
        {label}
      </button>
    </div>
  );
};
