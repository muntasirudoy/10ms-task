import type React from "react"

interface CoursePriceBoxProps {
    isCompact?: boolean
}

const CoursePriceBox: React.FC<CoursePriceBoxProps> = ({ isCompact = false }) => {
    if (isCompact) {
        return (
            <div className="p-3 border-b border-gray-200 bg-white">
                <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-lg font-bold text-gray-900">৳3850</span>
                        <span className="text-sm text-gray-500 line-through">৳5000</span>
                        <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded font-medium">1150 ৳ ছাড়</span>
                    </div>
                    <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors duration-200 whitespace-nowrap">
                        কোর্সটি কিনুন
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="relative md:static">
            <div className="p-4 border-b border-gray-200 bg-white">
                <div className="flex flex-col w-full">
                    <div className="mb-4">
                        <div className="flex items-center justify-between md:flex-col md:items-start">
                            <div className="md:mb-3">
                                <div className="flex items-center gap-3 flex-wrap">
                                    <span className="text-3xl font-bold text-gray-900">৳3850</span>
                                    <span className="text-xl text-gray-500 line-through">৳5000</span>
                                </div>
                                <div className="mt-2">
                                    <span className="inline-flex items-center bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        1150 ৳ ছাড়
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className="bg-green-600 hover:bg-green-700 text-white text-center font-medium w-full py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]">
                        কোর্সটি কিনুন
                    </button>

                    <div className="mt-3 text-center">
                        <p className="text-xs text-gray-500">৩০ দিনের মানি-ব্যাক গ্যারান্টি</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoursePriceBox
