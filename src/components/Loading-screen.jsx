import spinner from '@/assets/img/spinners.svg'

export default function LoadingScreen() {
    // 화면 전체 로딩
    return (
        <div className="fixed left-0 top-0 z-20 flex h-screen w-screen place-content-center bg-[#D9D9D9AB]">
            <img src={spinner} alt="" className="w-20" />
        </div>
    )
}
