
const ResponsivenessTailwind = () => {
  return (
    <div className="flex-grow">
      <div className="grid grid-cols-12 gap-4">
        {/* First Grid Item */}
        <div className="col-span-12 sm:col-span-9 md:col-span-6 lg:col-span-3">
          <div className="bg-white dark:bg-gray-800 shadow-sm rounded-lg border border-gray-200 dark:border-gray-700 p-3">
            <p className="text-center font-bold">lg:3 md:6 sm:9</p>
          </div>
        </div>

        {/* Second Grid Item */}
        <div className="col-span-12 sm:col-span-3 md:col-span-6 lg:col-span-9">
          <div className="bg-white dark:bg-gray-800 shadow-sm rounded-lg border border-gray-200 dark:border-gray-700 p-3">
            <p className="text-center font-bold">lg:9 md:6 sm:3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsivenessTailwind;
