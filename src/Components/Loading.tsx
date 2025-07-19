
const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 bg-white dark:bg-black bg-opacity-80 flex flex-col items-center justify-center">
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
      <p className="text-white mt-4 text-lg">Loading...</p>
    </div>
  );
};

export default Loading;