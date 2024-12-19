import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { GoQuestion } from 'react-icons/go'
import ListsBox from '@/components/List-box.jsx'
import Tooltip from '@/components/Tooltip.jsx'
import vppAPI from '@/api/vpp.js'
import { useDispatch } from 'react-redux'
import { setHouse } from '@/store/house-slice.js'
import Loading from '@/components/Loading.jsx'

export default function VppPage() {
    const [vppDetail, setVppDetail] = useState('')
    const [tooltipState, setTooltipState] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [dataList, setDataList] = useState({
        columns: {
            details: [], // 필요한 초기 구조 설정
        },
    })

    const changeInput = (e) => {
        setVppDetail(e.target.value)
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
            // console.log(response.data)
            processData(response.data)
            // setIsLoading(false)
        } catch (error) {
            console.error(error)
            setIsLoading(false)
            alert('오류가 발생했습니다. 다시 시도해주세요!')
        }
    }

    useEffect(() => {
        getVpp()
    }, [])

    // useEffect(() => {
    //     if (dataList?.columns?.details) {
    //         // details까지 있는지 확인
    //         setIsLoading(false)
    //     }
    // }, [dataList])

    return (
        <main className="flex h-full flex-col overflow-hidden">
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <div className="flex items-center justify-end border-b-2 border-[#ECECEE] px-6 py-3">
                        {/*<p className="text-2xl font-bold">VPP</p>*/}
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
                                onClick={focusTooltip}
                            >
                                <GoQuestion size={26} />
                                <Tooltip
                                    tooltipState={tooltipState}
                                    data={dataList.category}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6 p-6">
                        <ListsBox dataList={dataList.columns} />
                    </div>
                </>
            )}
        </main>
    )
}
