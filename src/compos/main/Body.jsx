import __life__ from "../../assets/__life__.py.png"

export const Body = () => {
    return (
        <section className="w-[100%] text-center sm:mt-16 mt-16 flex flex-col relative min-h-[700px] pb-20">
            {/* Fixed responsive floated tag with proper centering */}
            <div className="floated-tag absolute top-[-50px] left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center text-xs sm:text-sm font-medium transition-shadow duration-300 z-20">
                Plan Build Deliver <span className="w-2 h-2 bg-white rounded-full ml-2 animate-pulse"></span>
            </div>
            <div
                className="absolute lg:block hidden top-[190px] left-[-5px] xl:left-10 2xl:left-24 w-48 xl:w-52 2xl:w-56 p-3 rounded-2xl shadow-lg backdrop-blur-sm bg-gradient-to-br from-purple-100 to-purple-200 border-2 border-purple-300 transform hover:scale-110 hover:rotate-0 transition-all duration-300 hover:shadow-xl z-10 cursor-pointer"
            >
                <div className="text-left">
                    <h3 className="font-bold text-gray-800 text-sm mb-1">💡 Pro Tips</h3>
                    <p className="text-gray-600 text-xs leading-relaxed">Expert advice to accelerate your learning journey</p>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full shadow-md"></div>
            </div>
            {/* SVG Connector between Career Ready and Pro Tips */}
            <svg
            className="absolute hidden 2xl:block z-0"
            width="200"
            height="200"
            viewBox="0 0 200 200"
            style={{
                top: '56px',
                left: '220px',
                position: 'absolute',
                pointerEvents: 'none',
            }}
            >
            <path
                d="M 0 150 C 60 90, 140 90, 200 150"
                stroke="#9333ea"
                strokeWidth="2"
                fill="none"
                strokeDasharray="6 4"
                markerEnd="url(#arrow)"
            />
            <defs>
                <marker
                id="arrow"
                markerWidth="6"
                markerHeight="6"
                refX="5"
                refY="3"
                orient="auto"
                markerUnits="strokeWidth"
                >
                <path d="M0,0 L0,6 L6,3 z" fill="#9333ea" />
                </marker>
            </defs>
            </svg>

            {/* Solid Zigzag Mint Green Arrow from Success to Title */}
            <svg
                className="absolute hidden 2xl:block z-0"
                width="200"
                height="100"
                viewBox="0 0 280 100"
                style={{
                    top: '-20px',
                    left: '180px',
                    position: 'absolute',
                    pointerEvents: 'none',
                }}
                >
                <defs>
                    <marker
                    id="zigzag-arrow"
                    viewBox="0 0 10 10"
                    refX="5"
                    refY="5"
                    markerWidth="6"
                    markerHeight="6"
                    orient="auto"
                    >
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#34d399" />
                    </marker>
                </defs>
                <path
                    d="M 0 60 
                    Q 20 20, 40 60 
                    Q 60 100, 80 60 
                    Q 100 20, 120 60 
                    Q 140 100, 160 60 
                    Q 180 20, 200 60 
                    Q 220 100, 240 60 
                    Q 260 30, 280 60"
                    stroke="#34d399"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="8 6"
                    markerEnd="url(#zigzag-arrow)"
                />
                </svg>



            {/* Career Ready card */}
            <div
                className="absolute lg:block hidden top-[-46px] xl:top-[-20px] 2xl:top-21 left-[-25px] xl:left-18 2xl:left-10 w-48 xl:w-52 2xl:w-56 p-3 rounded-2xl shadow-lg backdrop-blur-sm bg-gradient-to-br from-green-100 to-green-200 border-2 border-green-300 transform hover:scale-110 hover:rotate-0 transition-all duration-300 hover:shadow-xl z-10 cursor-pointer"
            >
                <div className="text-left">
                    <h3 className="font-bold text-gray-800 text-sm mb-1">🎯 Career Ready</h3>
                    <p className="text-gray-600 text-xs leading-relaxed">Build projects that employers love to see</p>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full shadow-md"></div>
            </div>


            {/* Pink Curved Arrow from Community to Title */}
            <svg
            className="absolute hidden 2xl:block z-0"
            width="350"
            height="200"
            viewBox="0 0 350 300"
            style={{
                top: '-100px',
                right: '120px',
                position: 'absolute',
                pointerEvents: 'none',
            }}
            >
            <path
                d="M 320 130 C 250 10, 120 30, 50 140"
                stroke="#ec4899"
                strokeWidth="2.5"
                fill="none"
                strokeDasharray="6 4"
                markerEnd="url(#arrow-pink)"
            />
            <defs>
                <marker
                id="arrow-pink"
                viewBox="0 0 10 10"
                refX="2"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
                >
                <path d="M 10 5 L 0 0 L 0 10 Z" fill="#ec4899" />
                </marker>
            </defs>
            </svg>


            {/* Community card */}
            <div
                className="absolute lg:block hidden -top-12 right-[-50px] xl:right-[-24px] 2xl:right-12 w-48 xl:w-52 2xl:w-56 p-3 rounded-2xl shadow-lg backdrop-blur-sm bg-gradient-to-br from-pink-100 to-pink-200 border-2 border-pink-300 transform hover:scale-110 hover:rotate-0 transition-all duration-300 hover:shadow-xl z-10 cursor-pointer"
            >
                <div className="text-left">
                    <h3 className="font-bold text-gray-800 text-sm mb-1">🌟 Community</h3>
                    <p className="text-gray-600 text-xs leading-relaxed">Connect with 10k+ developers worldwide</p>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full shadow-md"></div>
            </div>

            {/* Success Stories card (moved to right red box) */}
            <div
                className="absolute lg:block hidden top-[150px] right-[-6px] xl:right-12 2xl:right-20 w-48 xl:w-52 2xl:w-56 p-3 rounded-2xl shadow-lg backdrop-blur-sm bg-gradient-to-br from-indigo-100 to-indigo-200 border-2 border-indigo-300 transform hover:scale-110 hover:rotate-0 transition-all duration-300 hover:shadow-xl z-10 cursor-pointer"
            >
                <div className="text-left">
                    <h3 className="font-bold text-gray-800 text-sm mb-1">🏆 Success Stories</h3>
                    <p className="text-gray-600 text-xs leading-relaxed">Join 500+ students who landed their dream jobs</p>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full shadow-md"></div>
            </div>

            {/* SVG curved dashed arrow from Success Stories to bottom-left */}
            {/* Curvy dashed SVG from Success Stories pointing to left side */}
            {/* Corrected Left-Facing Arrow from Success Stories */}
            <svg
                className="absolute hidden 2xl:block z-0"
                width="300"
                height="200"
                viewBox="0 0 300 300"
                style={{
                    top: '200px',
                    right: '140px',
                    position: 'absolute',
                    pointerEvents: 'none',
                }}
                >
                <path
                    d="M 280 0 C 240 200, 150 220, 0 260"
                    stroke="#4f46e5"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="6 6"
                    markerEnd="url(#arrow-left)"
                />
                <defs>
                    <marker
                    id="arrow-left"
                    viewBox="0 0 10 10"
                    refX="8" 
                    refY="5"
                    markerWidth="6"
                    markerHeight="6"
                    orient="auto-start-reverse"
                    >
                    <path d="M 10 5 L 0 0 L 0 10 Z" fill="#4f46e5" /> 
                    </marker>
                </defs>
                </svg>    




            <h1 className="text-4xl font-extrabold leading-[1.15] text-black sm:text-6xl">Wanna Learn Stuffs?
                <br />
                <span className=" bg-gradient-to-r from-pink-500 via-indigo-600 to-pink-500 bg-clip-text text-transparent">wanna get a job?</span>
            </h1>
            <div className="mx-auto mt-7 flex max-w-fit space-x-4">
                <a href=""
                    className="rounded-full mx-auto max-w-fit border px-5 py-2 text-sm font-medium shadow-sm border-black bg-black text-white hover:ring-gray-400 hover:ring-2"
                >
                    Get Started
                </a>
                <a href=""
                    className="rounded-full mx-auto max-w-fit border px-5 py-2 text-sm font-medium shadow-sm border-grey-200 bg-white text-black hover:ring-gray-400 hover:ring-2"
                >
                    Learn More
                </a>
            </div>
            <div className="mt-6 justify-center items-center mb-10">
                <img
                src={__life__}
                alt="__life__" 
                className="mx-auto h-[300px] sm:h-[500px] bg-black rounded-xl"/>
            </div>

            <div className="dev-title-footer-tag">
                <h2 className="text-lg sm:text-xl font-bold text-gray-800">
                    Join the <span className="bg-gradient-to-r from-pink-500 via-indigo-600 to-pink-500 bg-clip-text text-transparent">CodeQuest</span> community today!
                </h2>
                <p className="font-semibold text-gray-600">@2025 Made With ❤️ by Rudra</p>
            </div>
        </section>
    )
};