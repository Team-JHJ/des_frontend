import spinner from '@/assets/img/spinners.svg'

export default function Loading() {
    // 로딩 스피너만
    return (
        <div className="flex h-full w-full place-content-center">
            <img src={spinner} alt="loading spinner" className="w-1/12" />
        </div>
    )
}
