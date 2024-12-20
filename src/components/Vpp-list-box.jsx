import Icon from '@/components/Icon.jsx'
import { GoQuestion } from 'react-icons/go'
import Tooltip from '@/components/Tooltip.jsx'
import { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function VppListsBox({ dataList }) {
    // const navigate = useNavigate()
    const pathname = useParams()
    const house = pathname.houseId
    const category = pathname.category
    const [tooltipState, setTooltipState] = useState(false)
    const tooltipRef = useRef(null)
    const tooltipButtonRef = useRef(null)
    const list = dataList.details
    // const description = dataList.description

    // const focusTooltip = () => {
    //     setTooltipState((prev) => !prev)
    // }

    const description = dataList.map(
        (item) =>
            new Object({
                name: item.name,
                description: item.description,
            }),
    )

    const toggleTooltip = () => {
        setTooltipState((prev) => !prev)
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

    return (
        <div className="w-full rounded-md border-2 border-[#D9D9D9]">
            <div className="flex h-12 items-center justify-between rounded-t border-b border-[#D9D9D9] bg-[#F3F3F3] px-4 py-2.5">
                <div className="flex items-center gap-1">
                    {/*<Icon menu={`${dataList.type}`} size={23} />*/}
                    {/*<p className="text-xl font-bold">{dataList.name}</p>*/}
                    {/*<div*/}
                    {/*    className={`mx-1 h-4 w-4 rounded-full ${dataList.isFault ? 'bg-[#FF3B30]' : 'bg-[#007AFF]'}`}*/}
                    {/*/>*/}
                    {/*<p*/}
                    {/*    className={`text-sm text-[#909090] ${dataList.battery ? 'block' : 'hidden'}`}*/}
                    {/*>*/}
                    {/*    {dataList.battery}%*/}
                    {/*</p>*/}
                </div>
                <div className="flex h-full items-center gap-3">
                    <div
                        className="relative my-auto cursor-pointer"
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
            <div className="flex flex-wrap gap-[2%] px-4 py-3">
                {dataList.map((item, index) => (
                    <div
                        key={index}
                        className={`flex w-[40%] items-center justify-between overflow-hidden px-3 pb-1 pt-3`}
                    >
                        <p className="min-w-[20%] overflow-hidden overflow-ellipsis text-xl font-medium text-[#767676]">
                            {item.name}
                        </p>
                        <div className="flex items-baseline gap-1">
                            <p
                                className={`text-nowrap text-3xl font-bold ${
                                    Number.isInteger(item.value)
                                        ? index % 3 === 0
                                            ? 'text-[#32ADE6]'
                                            : index % 3 === 1
                                              ? 'text-[#14AE5C]'
                                              : index % 3 === 2
                                                ? 'text-[#E8B931]'
                                                : ''
                                        : ''
                                }`}
                            >
                                {typeof item.value === 'boolean'
                                    ? item.value.toString()
                                    : item.value}
                            </p>
                            <p className="text-xl">
                                {item.description.match(/\((.*?)\)/)
                                    ? item.description.match(/\((.*?)\)/)[1]
                                    : null}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
