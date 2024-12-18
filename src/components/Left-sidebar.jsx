import logo from '@/assets/img/deslogo.png'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function LeftSidebar() {
    const navigate = useNavigate()
    const location = useLocation().pathname
    // const path = location.split('/')
    const pathname = useParams()
    // console.log(pathname)
    const houseId = useSelector((state) => state.houseSlice.houseId)

    const navigateMain = () => {
        navigate('/')
    }

    return (
        <div className="fixed bottom-0 left-0 top-0 flex h-full w-80 flex-col border-r-2 border-[#ECECEE] text-lg">
            <div className="flex h-28 items-center border-b-2 px-8">
                <div
                    className="flex cursor-pointer items-center gap-3"
                    onClick={navigateMain}
                >
                    <img src={logo} alt="des logo" className="h-14 w-14" />
                    <div>
                        <p className="text-2xl font-bold">DES</p>
                        <p className="text-sm text-[#A9A9A9FF]">
                            for Jeju Univ
                        </p>
                    </div>
                </div>
            </div>
            <nav className="flex flex-1 flex-col overflow-y-auto px-7 pb-6 pt-3">
                {location === '/' || location === '/vpp' ? (
                    <ul>
                        <li className="border-b border-[#D3D3D3FF] p-2">
                            <Link
                                to="/"
                                className={`block rounded pb-2.5 pl-3.5 pt-3.5 hover:bg-[#C6D3E799] ${
                                    location === '/' &&
                                    'border-l-8 border-l-[#B0C4DE] pl-2'
                                }`}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="border-b border-[#D3D3D3FF] p-2">
                            <Link
                                to="/vpp"
                                className={`block rounded pb-2.5 pl-3.5 pt-3.5 hover:bg-[#C6D3E799] ${
                                    location === '/vpp' &&
                                    'border-l-8 border-l-[#B0C4DE] pl-2'
                                }`}
                            >
                                VPP
                            </Link>
                        </li>
                    </ul>
                ) : (
                    <ul>
                        <li className="border-b border-[#D3D3D3FF] p-2">
                            <Link
                                to={`/house/${houseId}/der`}
                                className={`block rounded pb-2.5 pl-3.5 pt-3.5 hover:bg-[#C6D3E799] ${
                                    pathname.category === 'der' &&
                                    'border-l-8 border-l-[#B0C4DE] pl-2'
                                }`}
                            >
                                DER
                            </Link>
                        </li>
                        <li className="border-b border-[#D3D3D3FF] p-2">
                            <Link
                                to={`/house/${houseId}/homeload`}
                                className={`block rounded pb-2.5 pl-3.5 pt-3.5 hover:bg-[#C6D3E799] ${
                                    pathname.category === 'homeload' &&
                                    'border-l-8 border-l-[#B0C4DE] pl-2'
                                }`}
                            >
                                Homeload
                            </Link>
                        </li>
                        <li className="border-b border-[#D3D3D3FF] p-2">
                            <Link
                                to={`/house/${houseId}/inverter`}
                                className={`block rounded pb-2.5 pl-3.5 pt-3.5 hover:bg-[#C6D3E799] ${
                                    pathname.category === 'inverter' &&
                                    'border-l-8 border-l-[#B0C4DE] pl-2'
                                }`}
                            >
                                Inverter
                            </Link>
                        </li>
                        <li className="border-b border-[#D3D3D3FF] p-2">
                            <Link
                                to={`/house/${houseId}/smartmeter`}
                                className={`block rounded pb-2.5 pl-3.5 pt-3.5 hover:bg-[#C6D3E799] ${
                                    pathname.category === 'smartmeter' &&
                                    'border-l-8 border-l-[#B0C4DE] pl-2'
                                }`}
                            >
                                Smartmeter
                            </Link>
                        </li>
                    </ul>
                )}
            </nav>
        </div>
    )
}
