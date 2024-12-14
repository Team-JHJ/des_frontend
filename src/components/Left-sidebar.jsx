import logo from '@/assets/img/deslogo.png'
import { Link, useLocation } from 'react-router-dom'

export default function LeftSidebar() {
    const pathname = useLocation().pathname
    const state = 'main'

    return (
        <div className="w-80 fixed h-full left-0 top-0 bottom-0 border-r-2 border-[#ECECEE] flex flex-col text-lg">
            <div className="px-8 border-b-2 h-28 flex items-center">
                <div className="flex items-center gap-3 cursor-pointer">
                    <img src={logo} alt="des logo" className="w-14 h-14" />
                    <div>
                        <p className="text-2xl font-bold">DES</p>
                        <p className="text-sm text-[#A9A9A9FF]">
                            for Jeju Univ
                        </p>
                    </div>
                </div>
            </div>
            <nav className="px-7 pt-3 pb-6 flex-1 flex flex-col overflow-y-auto">
                {state === 'main' ? (
                    <ul>
                        <li className="p-2 border-b border-[#D3D3D3FF]">
                            <Link
                                to="/"
                                className={`block rounded pb-2.5 pt-3.5 pl-3.5 hover:bg-[#C6D3E799] ${
                                    pathname === '/' &&
                                    'border-l-8 border-l-[#B0C4DE] pl-2'
                                }`}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="p-2 border-b border-[#D3D3D3FF]">
                            <Link
                                to="/vpp"
                                className={`block rounded pb-2.5 pt-3.5 pl-3.5 hover:bg-[#C6D3E799] ${
                                    pathname === '/vpp' &&
                                    'border-l-8 border-l-[#B0C4DE] pl-2'
                                }`}
                            >
                                VPP
                            </Link>
                        </li>
                    </ul>
                ) : (
                    <ul>
                        <li className="p-2 border-b border-[#D3D3D3FF]">
                            <Link
                                to="/"
                                className={`block rounded pb-2.5 pt-3.5 pl-3.5 hover:bg-[#C6D3E799] ${
                                    pathname === '/der' &&
                                    'border-l-8 border-l-[#B0C4DE] pl-2'
                                }`}
                            >
                                DER
                            </Link>
                        </li>
                        <li className="p-2 border-b border-[#D3D3D3FF]">
                            <Link
                                to="/"
                                className={`block rounded pb-2.5 pt-3.5 pl-3.5 hover:bg-[#C6D3E799] ${
                                    pathname === '/homeload' &&
                                    'border-l-8 border-l-[#B0C4DE] pl-2'
                                }`}
                            >
                                Homeload
                            </Link>
                        </li>
                        <li className="p-2 border-b border-[#D3D3D3FF]">
                            <Link
                                to="/"
                                className={`block rounded pb-2.5 pt-3.5 pl-3.5 hover:bg-[#C6D3E799] ${
                                    pathname === '/inverter' &&
                                    'border-l-8 border-l-[#B0C4DE] pl-2'
                                }`}
                            >
                                Inverter
                            </Link>
                        </li>
                        <li className="p-2 border-b border-[#D3D3D3FF]">
                            <Link
                                to="/"
                                className={`block rounded pb-2.5 pt-3.5 pl-3.5 hover:bg-[#C6D3E799] ${
                                    pathname === '/smartmeter' &&
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
