import spinner from '@/assets/img/spinners.svg'

export default function LoadingScreen() {
    return (
        <div className="fixed left-0 top-0 z-20 flex h-screen w-screen place-content-center bg-[#D9D9D9AB]">
            {/*<div className="aspect-square h-20 w-20 bg-white">*/}
            <img src={spinner} alt="" className="w-20" />
            {/*</div>*/}
        </div>
    )
}
