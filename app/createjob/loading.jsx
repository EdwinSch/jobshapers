const Loading = () => {
  return (
    <div className="bg-jsOffWhite min-h-screen">
      <div className="mx-auto py-8 max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mb-2 text-center">
          <div className="h-4 bg-gray-200 rounded-md animate-pulse w-32 mx-auto"></div>
        </div>

        <div className="flex-1 p-6 bg-white border border-slate-300 rounded-md">
          <div className="h-6 bg-gray-200 rounded-md animate-pulse mb-2 w-48"></div>
          <div className="h-4 bg-gray-200 rounded-md animate-pulse mb-5 w-64"></div>

          {/* Form fields skeleton */}
          <div className="space-y-4">
            {[...Array(12)].map((_, i) => (
              <div key={i}>
                <div className="h-4 bg-gray-200 rounded-md animate-pulse mb-1 w-32"></div>
                <div className="h-10 bg-gray-200 rounded-md animate-pulse w-full"></div>
              </div>
            ))}
            
            {/* Submit button skeleton */}
            <div className="h-10 bg-gray-200 rounded-md animate-pulse w-40 mt-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
