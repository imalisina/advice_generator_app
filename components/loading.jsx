const Loading = () => {
    return (
        <div className="animate-pulse">
            <div className="text-center mx-auto h-2.5 bg-gray-700 rounded-full w-48 mb-4"></div>
            <div className="text-center mx-auto h-2 bg-gray-700 rounded-full max-w-[360px] mb-2.5"></div>
            <div className="text-center mx-auto h-2 bg-gray-700 rounded-full max-w-[330px] mb-2.5"></div>
            <div className="text-center mx-auto h-2 bg-gray-700 rounded-full max-w-[330px] mb-2.5"></div>
            <div className="text-center mx-auto h-2 bg-gray-700 rounded-full max-w-[300px] mb-2.5"></div>
            <div className="text-center mx-auto h-2 bg-gray-700 rounded-full max-w-[360px]"></div>
        </div>
    );
}

export default Loading;