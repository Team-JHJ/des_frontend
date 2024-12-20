import { useEffect, useRef, useState } from 'react'
import { GoQuestion } from 'react-icons/go'
import ListsBox from '@/components/List-box.jsx'
import Tooltip from '@/components/Tooltip.jsx'
import vppAPI from '@/api/vpp.js'
import Loading from '@/components/Loading.jsx'
import VppListsBox from '@/components/Vpp-list-box.jsx'

export default function VppPage() {
    const [vppDetail, setVppDetail] = useState('')
    const [tooltipState, setTooltipState] = useState(false)
    const tooltipRef = useRef(null)
    const tooltipButtonRef = useRef(null)
    const [isTooltipOpen, setIsTooltipOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [dataList, setDataList] = useState({
        columns: {
            details: [], // 필요한 초기 구조 설정
        },
    })

    const changeInput = (e) => {
        setVppDetail(e.target.value)
    }

    const toggleTooltip = () => {
        setTooltipState((prev) => !prev)
    }

    const focusTooltip = () => {
        setTooltipState((prev) => !prev)
    }

    // 데이터 처리
    const processData = (example) => {
        const prevData = {
            ...example.columns,
            ['name']: 'vpp',
            ['type']: 'vpp',
        }

        const data = {
            ...example,
            columns: prevData,
        }

        setDataList(data)
        setIsLoading(false)
    }

    const getVpp = async () => {
        try {
            setIsLoading(true)
            const response = await vppAPI.getVppList(1)
            processData(response.data)
        } catch (error) {
            console.error(error)
            setIsLoading(false)
            alert('오류가 발생했습니다. 다시 시도해주세요!')
        }
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            // 툴팁 버튼이나 툴팁을 클릭한 경우가 아니라면 툴팁 닫기
            if (
                tooltipState &&
                !tooltipRef.current?.contains(event.target) &&
                !tooltipButtonRef.current?.contains(event.target)
            ) {
                setTooltipState(false)
            }
        }

        // 문서 전체에 이벤트 리스너를 추가
        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [tooltipState])

    useEffect(() => {
        getVpp()
    }, [])

    return (
        <main className="flex h-full flex-col overflow-hidden">
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <div className="flex items-center justify-between border-b-2 border-[#ECECEE] px-6 py-3">
                        <div className="flex items-center gap-2.5">
                            <p className="text-2xl font-bold">VPP</p>
                            <div
                                className={`mx-1 h-4 w-4 rounded-full ${dataList.isFault ? 'bg-[#FF3B30]' : 'bg-[#007AFF]'}`}
                            />
                            <p
                                className={`text-sm text-[#909090] ${dataList.battery ? 'block' : 'hidden'}`}
                            >
                                {dataList.battery}%
                            </p>
                        </div>
                        <div className="flex gap-3">
                            {/*<form*/}
                            {/*    action=""*/}
                            {/*    className="relative w-56 rounded border border-black"*/}
                            {/*>*/}
                            {/*    <input*/}
                            {/*        type="text"*/}
                            {/*        name="vppDetail"*/}
                            {/*        placeholder="vpp search"*/}
                            {/*        value={vppDetail}*/}
                            {/*        onChange={(e) => changeInput(e)}*/}
                            {/*        className="w-[88%] rounded-l px-2 py-1 focus:outline-none"*/}
                            {/*    />*/}
                            {/*    <button*/}
                            {/*        type="submit"*/}
                            {/*        className="absolute right-2 top-0 h-full"*/}
                            {/*    >*/}
                            {/*        <FontAwesomeIcon icon={faMagnifyingGlass} />*/}
                            {/*    </button>*/}
                            {/*</form>*/}
                            <div
                                className="relative z-20 my-auto cursor-pointer"
                                // 마우스 올리면 나타나고 내리면 사라지게
                                // onMouseOver={focuseTooltip}
                                // onMouseOut={focuseTooltip}
                                // onClick={focusTooltip}
                                ref={tooltipButtonRef}
                                onClick={toggleTooltip}
                            >
                                <GoQuestion size={26} />
                                <Tooltip
                                    tooltipState={tooltipState}
                                    data={dataList.category}
                                    ref={tooltipRef}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6 p-6">
                        {dataList.columns.details.map((data, index) => (
                            <VppListsBox key={index} dataList={data} />
                        ))}
                        {/*<ListsBox dataList={dataList.columns} />*/}
                    </div>
                </>
            )}
        </main>
    )
}
