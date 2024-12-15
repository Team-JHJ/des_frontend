export default function Tooltip({ tooltipState }) {
    const example = [
        { name: 'generation_capacity', description: '발전 용량 정보(%)' },
        { name: 'generation_capacity', description: '발전 용량 정보(%)' },
        { name: 'soc', description: '배터리의 상태(%)' },
        { name: 'installation_date', description: 'DER이 설치된 날짜' },
    ]

    return (
        <div
            className={`absolute -right-[1.1rem] top-[160%] z-10 box-border min-w-48 cursor-default rounded-lg border border-black bg-white p-4 transition-opacity duration-300 ease-out ${
                tooltipState ? 'visible opacity-100' : 'invisible opacity-0'
            }`}
            onClick={(e) => {
                e.stopPropagation()
            }}
        >
            {/* 화살표 부분 */}
            <div className="absolute -top-3 right-[0.98rem] z-[1] h-3 w-7 overflow-hidden before:absolute before:left-1/2 before:top-0 before:h-6 before:w-6 before:origin-top-left before:rotate-45 before:border before:border-black before:bg-white"></div>
            {/* 설명 부분 div */}
            <div className="flex flex-col">
                {/*<p>제목</p>*/}
                {example.map((item, index) => (
                    <div className="whitespace-nowrap" key={index}>
                        • <span className="font-medium">{item.name}</span> :{' '}
                        <span className="text-sm text-[#909090]">
                            {item.description}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}
