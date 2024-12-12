import logo from '@/assets/img/deslogo.png'

export default function LeftSidebar() {
    return (
        <div className="w-80 fixed left-0 top-0 bottom-0 border-r-2 border-[#ECECEE]">
            <div className="h-28 border-b-2 flex items-center gap-3 pl-8">
                <img src={logo} alt="des logo" className="w-14 h-14" />
                <div>
                    <p className="text-2xl font-bold">DES</p>
                    <p className="text-sm text-[#A9A9A9FF]">for Jeju Univ</p>
                </div>
            </div>
        </div>
    )
}
