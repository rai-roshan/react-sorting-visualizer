import DropDownMenu from "./DropDown";

const NavBar = ({ algorithm, setAlgorithm, size, setSize, animationSpeed, setSpeed, clearAnimation, animationIntervalIds, generateRandomGraph }) => {

    return <div id={"navbar"} >
        <div id={"navbar-container"} >
            <h2 id={"nav-title"}>
                Algo Visualizer
            </h2>

            <div id={"dropdown-section"}>
            <DropDownMenu
                svgIcon={<svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 m-1" fill="none" viewBox="0 0 24 24"
                              stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
                </svg>}
                width={"8rem"}
                placeholder={"algorithm"}
                value={algorithm}
                setValue={setAlgorithm}
                options={["select sort", "bubble sort", "merge sort", "quick sort"]} />
            <DropDownMenu
                svgIcon={<svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24"
                              stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>}
                width={"5rem"}
                placeholder={"size"}
                value={size}
                setValue={setSize}
                options={[  10, 25, 50, 100, 150, 200, 250, 300, 400, 500]} />
            <DropDownMenu
                svgIcon={<svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24"
                              stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>}
                width={"7rem"}
                placeholder={"animation"}
                value={animationSpeed}
                setValue={setSpeed}
                options={["lightning", "fast", "normal", "slow"]} />
            </div>
        </div>
    </div>
}

export default NavBar;