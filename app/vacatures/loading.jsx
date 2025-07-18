const Loading = () => {
  return (
    <div className="bg-jsOffWhite min-h-screen">
      <div className="mx-auto max-w-7xl py-8 md:py-12 px-4 md:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <div className="h-8 bg-gray-200 rounded-md animate-pulse mb-4 mx-auto max-w-xs"></div>
        </div>

        {/* Search section skeleton */}
        <div className="bg-white p-6 border border-slate-300 rounded-md mb-8">
          <div className="flex gap-2 mb-4">
            <div className="h-10 bg-gray-200 rounded-md animate-pulse flex-1"></div>
            <div className="h-10 w-10 bg-gray-200 rounded-md animate-pulse"></div>
          </div>
          <div className="flex gap-3">
            <div className="h-6 bg-gray-200 rounded-md animate-pulse w-32"></div>
          </div>
        </div>

        {/* Jobs section skeleton */}
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
          <div className="mb-6">
            <div className="h-6 bg-gray-200 rounded-md animate-pulse mb-2 w-48"></div>
            <div className="h-4 bg-gray-200 rounded-md animate-pulse w-32"></div>
          </div>

          {/* Job cards skeleton */}
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-4">
                <div className="h-6 bg-gray-200 rounded-md animate-pulse mb-2 w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded-md animate-pulse mb-2 w-1/2"></div>
                <div className="h-4 bg-gray-200 rounded-md animate-pulse mb-2 w-2/3"></div>
                <div className="h-4 bg-gray-200 rounded-md animate-pulse w-1/3"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
