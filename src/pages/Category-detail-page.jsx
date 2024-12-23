import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { GoQuestion } from 'react-icons/go'
import Tooltip from '@/components/Tooltip.jsx'
import { useEffect, useRef, useState } from 'react'
import AddListModal from '@/components/Add-list-modal.jsx'
import { useParams } from 'react-router-dom'
import ListsBox from '@/components/List-box.jsx'
import { useSelector } from 'react-redux'
import listAPI from '@/api/list.js'
import Loading from '@/components/Loading.jsx'

export default function CategoryDetailPage() {
    const houseId = useSelector((state) => state.houseSlice.houseId)
    const pathname = useParams()
    const category = pathname.category

    const [categoryName, setCategoryName] = useState('')
    const [tooltipState, setTooltipState] = useState(false)
    const tooltipRef = useRef(null)
    const tooltipButtonRef = useRef(null)
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [dataList, setDataList] = useState([])
    const [description, setDescription] = useState([])

    const changeInput = (e) => {
        setCategoryName(e.target.value)
    }

    // 툴팁 활성화/비활성화
    const focusTooltip = () => {
        setTooltipState((prev) => !prev)
    }

    const toggleTooltip = () => {
        setTooltipState((prev) => !prev)
    }

    // 모달 열기
    const modalOpen = () => {
        setIsModalVisible(true)
    }

    // 모달 닫기
    const modalClose = () => {
        setIsModalVisible(false)
    }

    const exampleObj = [
        {
            id: 1,
            name: 'der1',
            type: 'Solar',
            battery: 55,
            isFault: false,
            list_description: '태양광 발전 시스템 설명...',
            list: [
                {
                    id: 1,
                    column_name: 'aggregatedCapacity',
                    column_description: '발전 용량 정보(%)',
                    column_value: 24,
                },
                {
                    id: 2,
                    column_name: 'availableStorage',
                    column_description: '발전  효율(kWh)',
                    column_value: 200,
                },
                {
                    id: 3,
                    column_name: 'batteryEfficiency',
                    column_description: '발전  효율(ml)',
                    column_value: 9,
                },
                {
                    id: 4,
                    column_name: 'dispatchableEnergy',
                    column_description: '발전  효율',
                    column_value: '2025-01-2',
                },
                {
                    id: 5,
                    column_name: 'capacityFactor',
                    column_description: '발전  효율',
                    column_value: 400,
                },
                {
                    id: 6,
                    column_name: 'forecastedLoad',
                    column_description: '발전  효율',
                    column_value: '12PM',
                },
                {
                    id: 7,
                    column_name: 'responseTime',
                    column_description: '발전  효율',
                    column_value: 500,
                },
            ],
        },
        {
            id: 1,
            type: 'Wind',
            name: 'der2',
            battery: 30,
            isFault: true,
            list_description: '태양광 발전 시스템 설명...',
            list: [
                {
                    id: 1,
                    column_name: 'aggregatedCapacity',
                    column_description: '발전 용량 정보(%)',
                    column_value: 90,
                },
                {
                    id: 2,
                    column_name: 'availableStorage',
                    column_description: '발전  효율(kWh)',
                    column_value: 20,
                },
                {
                    id: 3,
                    column_name: 'batteryEfficiency',
                    column_description: '발전  효율(ml)',
                    column_value: 90,
                },
                {
                    id: 4,
                    column_name: 'dispatchableEnergy',
                    column_description: '발전  효율',
                    column_value: '40.712776, -74.005974',
                },
                {
                    id: 5,
                    column_name: 'capacityFactor',
                    column_description: '발전  효율',
                    column_value: 'Yes',
                },
                {
                    id: 6,
                    column_name: 'forecastedLoad',
                    column_description: '발전  효율',
                    column_value: 120,
                },
                {
                    id: 7,
                    column_name: 'responseTime',
                    column_description: '발전  효율',
                    column_value: 'No',
                },
            ],
        },
        {
            id: 1,
            type: 'EV Battery',
            name: 'der3',
            battery: 60,
            isFault: false,
            list_description: '태양광 발전 시스템 설명...',
            list: [
                {
                    id: 1,
                    column_name: 'aggregatedCapacity',
                    column_description: '발전 용량 정보(%)',
                    column_value: 90,
                },
                {
                    id: 2,
                    column_name: 'availableStorage',
                    column_description: '발전  효율(kWh)',
                    column_value: 20,
                },
                {
                    id: 3,
                    column_name: 'batteryEfficiency',
                    column_description: '발전  효율(ml)',
                    column_value: 90,
                },
                {
                    id: 4,
                    column_name: 'dispatchableEnergy',
                    column_description: '발전  효율',
                    column_value: '40.71, -74.074',
                },
                {
                    id: 5,
                    column_name: 'capacityFactor',
                    column_description: '발전  효율',
                    column_value: 'Yes',
                },
                {
                    id: 6,
                    column_name: 'forecastedLoad',
                    column_description: '발전  효율',
                    column_value: 120,
                },
                {
                    id: 7,
                    column_name: 'responseTime',
                    column_description: '발전  효율',
                    column_value: 'No',
                },
            ],
        },
        {
            id: 1,
            type: 'ESS',
            name: 'der4',
            battery: 60,
            isFault: false,
            list_description: '태양광 발전 시스템 설명...',
            list: [
                {
                    id: 1,
                    column_name: 'aggregatedCapacity',
                    column_description: '발전 용량 정보(%)',
                    column_value: 90,
                },
                {
                    id: 2,
                    column_name: 'availableStorage',
                    column_description: '발전  효율(kWh)',
                    column_value: 20,
                },
                {
                    id: 3,
                    column_name: 'batteryEfficiency',
                    column_description: '발전  효율(ml)',
                    column_value: 90,
                },
                {
                    id: 4,
                    column_name: 'dispatchableEnergy',
                    column_description: '발전  효율',
                    column_value: 40,
                },
                {
                    id: 5,
                    column_name: 'capacityFactor',
                    column_description: '발전  효율',
                    column_value: 'Yes',
                },
                {
                    id: 6,
                    column_name: 'forecastedLoad',
                    column_description: '발전  효율',
                    column_value: 120,
                },
                {
                    id: 7,
                    column_name: 'responseTime',
                    column_description: '발전  효율',
                    column_value: 'No',
                },
            ],
        },
    ]

    const getList = async (homeId, category) => {
        try {
            setIsLoading(true)
            const response = await listAPI.getList(homeId, category)
            setDataList(response.data.columns)
            setDescription(response.data.category)
            setIsLoading(false)
        } catch (error) {
            console.error(error)
        }
    }

    const updateList = async () => {
        await getList(houseId, category)
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
        getList(houseId, category)
    }, [category, houseId])

    // parameter가 바뀌면 입력한 값 초기화
    useEffect(() => {
        setCategoryName('')
    }, [category])

    return (
        <div className="flex h-full flex-col">
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <div className="flex items-center justify-between border-b-2 border-[#ECECEE] px-6 py-3">
                        <p className="text-2xl font-bold">{category}</p>
                        <div className="flex gap-3">
                            <form
                                action=""
                                className="relative w-56 rounded border border-black"
                            >
                                <input
                                    type="text"
                                    name="vppDetail"
                                    placeholder={`${category} search`}
                                    value={categoryName}
                                    onChange={(e) => changeInput(e)}
                                    className="w-[88%] rounded-l px-2 py-1 focus:outline-none"
                                />
                                <button
                                    type="submit"
                                    className="absolute right-2 top-0 h-full"
                                >
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </button>
                            </form>
                            <button
                                className="rounded-md border-2 border-[#D9D9D9] px-4 hover:bg-[#F1F2F4]"
                                onClick={() => modalOpen()}
                            >
                                {category} 추가
                            </button>
                            <div
                                className="relative z-20 my-auto cursor-pointer"
                                // 마우스 올리면 나타나고 내리면 사라지게
                                // onMouseOver={focuseTooltip}
                                // onMouseOut={focuseTooltip}
                                ref={tooltipButtonRef}
                                onClick={toggleTooltip}
                            >
                                <GoQuestion size={26} />
                                <Tooltip
                                    tooltipState={tooltipState}
                                    data={description}
                                    ref={tooltipRef}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6 p-6">
                        {dataList.map((item, i) => (
                            <ListsBox dataList={item} key={i} />
                        ))}
                    </div>
                </>
            )}
            {isModalVisible && (
                <AddListModal
                    closeModal={modalClose}
                    category={category}
                    onSuccess={updateList}
                />
            )}
        </div>
    )
}
