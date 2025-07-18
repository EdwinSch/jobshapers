const Loading = () => {
  return (
    <div className="bg-jsOffWhite min-h-screen">
      <div className="mx-auto max-w-7xl py-8 md:py-12 px-4 md:px-6 lg:px-8">
        {/* Hero section skeleton */}
        <div className="text-center mb-12">
          <div className="h-12 bg-gray-200 rounded-md animate-pulse mb-4 mx-auto max-w-2xl"></div>
          <div className="h-6 bg-gray-200 rounded-md animate-pulse mb-6 mx-auto max-w-lg"></div>
        </div>

        {/* Content section skeleton */}
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
          <div className="mb-6">
            <div className="h-8 bg-gray-200 rounded-md animate-pulse mb-4 w-64"></div>
            <div className="h-4 bg-gray-200 rounded-md animate-pulse w-32"></div>
          </div>

          {/* Featured jobs skeleton */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-4">
                <div className="h-5 bg-gray-200 rounded-md animate-pulse mb-2 w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded-md animate-pulse mb-2 w-1/2"></div>
                <div className="h-4 bg-gray-200 rounded-md animate-pulse mb-4 w-2/3"></div>
                <div className="h-8 bg-gray-200 rounded-md animate-pulse w-24"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
