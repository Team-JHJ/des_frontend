import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { GoQuestion } from 'react-icons/go'
import ListsBox from '@/components/List-box.jsx'
import Tooltip from '@/components/Tooltip.jsx'

export default function VppPage() {
    const [vppDetail, setVppDetail] = useState('')
    const [tooltipState, setTooltipState] = useState(false)
    const [dataList, setDataList] = useState({})

    const changeInput = (e) => {
        setVppDetail(e.target.value)
    }

    const focusTooltip = () => {
        setTooltipState((prev) => !prev)
    }

    const exampleObj = [
        {
            id: 1,
            name: 'VPP',
            type: 'vpp',
            battery: null,
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
            list_name: 'VPP',
            type: 'vpp',
            name: 'vpp',
            battery: null,
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
    ]

    // 데이터 처리
    const processData = (example) => {
        let result = []
        example.map((item) => {
            const prevData = { ...item, ['name']: 'vpp', ['type']: 'vpp' }
            console.log(prevData)
            result.push(prevData)
        })
        console.log(result)
        setDataList(result)
    }

    useEffect(() => {
        processData(exampleObj)
    }, [])

    return (
        <main className="flex h-full flex-col overflow-hidden">
            <div className="flex items-center justify-between border-b-2 border-[#ECECEE] px-6 py-3">
                <p className="text-2xl font-semibold">VPP</p>
                <div className="flex gap-3">
                    <form
                        action=""
                        className="relative w-56 rounded border border-black"
                    >
                        <input
                            type="text"
                            name="vppDetail"
                            placeholder="vpp search"
                            value={vppDetail}
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
                    <div
                        className="relative z-20 my-auto cursor-pointer"
                        // 마우스 올리면 나타나고 내리면 사라지게
                        // onMouseOver={focuseTooltip}
                        // onMouseOut={focuseTooltip}
                        onClick={focusTooltip}
                    >
                        <GoQuestion size={26} />
                        <Tooltip tooltipState={tooltipState} />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-6 p-6">
                {exampleObj.map((item, i) => (
                    <ListsBox dataList={item} key={i} />
                ))}
            </div>
        </main>
    )
}
