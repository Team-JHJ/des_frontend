import logo from '@/assets/img/deslogo.png'
import { Link, useLocation } from 'react-router-dom'

export default function LeftSidebar() {
    const pathname = useLocation().pathname
    const state = 'main'

    return (
        <div className="fixed bottom-0 left-0 top-0 flex h-full w-80 flex-col border-r-2 border-[#ECECEE] text-lg">
            <div className="flex h-28 items-center border-b-2 px-8">
                <div className="flex cursor-pointer items-center gap-3">
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
                {state === 'main' ? (
                    <ul>
                        <li className="border-b border-[#D3D3D3FF] p-2">
                            <Link
                                to="/"
                                className={`block rounded pb-2.5 pl-3.5 pt-3.5 hover:bg-[#C6D3E799] ${
                                    pathname === '/' &&
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
                        <li className="border-b border-[#D3D3D3FF] p-2">
                            <Link
                                to="/"
                                className={`block rounded pb-2.5 pl-3.5 pt-3.5 hover:bg-[#C6D3E799] ${
                                    pathname === '/der' &&
                                    'border-l-8 border-l-[#B0C4DE] pl-2'
                                }`}
                            >
                                DER
                            </Link>
                        </li>
                        <li className="border-b border-[#D3D3D3FF] p-2">
                            <Link
                                to="/"
                                className={`block rounded pb-2.5 pl-3.5 pt-3.5 hover:bg-[#C6D3E799] ${
                                    pathname === '/homeload' &&
                                    'border-l-8 border-l-[#B0C4DE] pl-2'
                                }`}
                            >
                                Homeload
                            </Link>
                        </li>
                        <li className="border-b border-[#D3D3D3FF] p-2">
                            <Link
                                to="/"
                                className={`block rounded pb-2.5 pl-3.5 pt-3.5 hover:bg-[#C6D3E799] ${
                                    pathname === '/inverter' &&
                                    'border-l-8 border-l-[#B0C4DE] pl-2'
                                }`}
                            >
                                Inverter
                            </Link>
                        </li>
                        <li className="border-b border-[#D3D3D3FF] p-2">
                            <Link
                                to="/"
                                className={`block rounded pb-2.5 pl-3.5 pt-3.5 hover:bg-[#C6D3E799] ${
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
