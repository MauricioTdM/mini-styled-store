export const SkeletonCard = () => {
    return (
        <div className="
      flex flex-col overflow-hidden 
      bg-card-bg border border-border rounded-lg
    ">
            <div className="animate-pulse">
                <div className="aspect-square w-full bg-gray-300 dark:bg-gray-700"></div>
                <div className="p-md">
                    <div className="h-4 w-3/4 rounded bg-gray-300 dark:bg-gray-700"></div>
                    <div className="mt-2 h-4 w-1/2 rounded bg-gray-300 dark:bg-gray-700"></div>
                    <div className="mt-4 h-6 w-1/3 rounded bg-gray-300 dark:bg-gray-700"></div>
                    <div className="mt-auto pt-md">
                        <div className="h-11 w-full rounded-lg bg-gray-300 dark:bg-gray-700"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};