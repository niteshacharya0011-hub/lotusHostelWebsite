const PageNotFound = () => {
  return (
    <div className="h-[calc(100vh-100px)] flex justify-center items-center bg-black text-red-500">
      <div className="text-center">
        <h1 className="text-2xl max-sm:text-xl">
          Hello! I Am Page Not Found Page
        </h1>
        <h1 className="text-5xl max-sm:text-4xl font-bold">
          Error 404 Page Not Found!
        </h1>
      </div>
    </div>
  );
};

export default PageNotFound;
