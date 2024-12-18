import { useLocation, useParams } from 'react-router-dom'
import { GoQuestion } from 'react-icons/go'
import Tooltip from '@/components/Tooltip.jsx'
import ListEditBox from '@/components/List-edit-box.jsx'
import { useState } from 'react'

export default function ListEditPage() {
    const location = useLocation()
    const pathname = useParams()
    const category = pathname.category
    const dataList = location.state.dataList
    const [tooltipState, setTooltipState] = useState(false)

    const focusTooltip = () => {
        setTooltipState((prev) => !prev)
    }

    return (
        <div className="flex h-full flex-col overflow-hidden">
            <div className="flex items-center justify-between border-b-2 border-[#ECECEE] px-6 py-3">
                <p className="text-2xl font-bold">{category}</p>
                <div className="flex gap-3">
                    {/*<div*/}
                    {/*    className="relative z-20 my-auto cursor-pointer"*/}
                    {/*    // 마우스 올리면 나타나고 내리면 사라지게*/}
                    {/*    // onMouseOver={focuseTooltip}*/}
                    {/*    // onMouseOut={focuseTooltip}*/}
                    {/*    onClick={focusTooltip}*/}
                    {/*>*/}
                    {/*    <GoQuestion size={26} />*/}
                    {/*    <Tooltip tooltipState={tooltipState} />*/}
                    {/*</div>*/}
                </div>
            </div>
            <div className="p-6">
                <ListEditBox dataList={dataList} />
            </div>
        </div>
    )
}
