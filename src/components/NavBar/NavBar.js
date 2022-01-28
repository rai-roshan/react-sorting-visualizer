import DropDownMenu from "./DropDown";
import { ThemeSelectorContext } from '../Theme';
import { useContext } from "react";
const NavBar = ({ algorithm, setAlgorithm, size, setSize, animationSpeed, setSpeed, clearAnimation, animationIntervalIds, generateRandomGraph }) => {
    const {toggleTheme, isLight } = useContext(ThemeSelectorContext);
    return <div id={"navbar"} >
        <div id={"navbar-container"} >
            <h2 id={"nav-title"}>
                Algo Visualizer
            </h2>

            <div id={"dropdown-section"}>
                <button className='themeBtn' onClick={toggleTheme}>
                    {isLight ?
                        <><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="moon" placeholder='Dark' class="svg-inline--fa fa-moon fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width='20' height='20' >
                            <path fill="currentColor" d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"></path>
                        </svg>Dark</>
                    : <><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sun" class="svg-inline--fa fa-sun fa-w-16" role="img" width='20' height='20' viewBox="0 0 512 512"><path fill="currentColor" d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"></path></svg>Light</>}
                </button>
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