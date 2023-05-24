
const loading = () => {
  return (
    <div className="flex flex-col max-w-6xl pt-10 mx-2 sm:space-x-4 lg pl-52 sm:flex-row pb-42" >
          <div className="animate-pulse">
              <div className="w-48 h-48 mb-4 bg-gray-200 rounded-md">
              </div>
              <div className="h-2 w-48 mb-2.5 bg-gray-200 rounded-md">
              </div>
              <div className="h-2 w-44 mb-2.5 bg-gray-200 rounded-md">
              </div>
          </div>
          <div className="hidden sm:space-x-3 sm:inline-flex">
            <div className="animate-pulse">
                <div className="w-48 h-48 mb-4 bg-gray-200 rounded-md">
                </div>
                <div className="h-2 w-48 mb-2.5 bg-gray-200 rounded-md">
                </div>
                <div className="h-2 w-44 mb-2.5 bg-gray-200 rounded-md">
                </div>
            </div>
            <div className="animate-pulse">
                <div className="w-48 h-48 mb-4 bg-gray-200 rounded-md">
                </div>
                <div className="h-2 w-48 mb-2.5 bg-gray-200 rounded-md">
                </div>
                <div className="h-2 w-44 mb-2.5 bg-gray-200 rounded-md">
                </div>
            </div>
          </div>
    </div>
  )
}

export default loading
