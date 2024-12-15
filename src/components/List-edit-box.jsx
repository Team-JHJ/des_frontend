import Icon from '@/components/Icon.jsx'
import { GoQuestion } from 'react-icons/go'
import Tooltip from '@/components/Tooltip.jsx'
import { useState } from 'react'

export default function ListEditBox({ dataList }) {
    const [inputValue, setInputValue] = useState(dataList.list)
    const [tooltipState, setTooltipState] = useState(false)

    const focusTooltip = () => {
        setTooltipState((prev) => !prev)
    }

    console.log(inputValue)

    // const description = dataList.list.map(
    //     (item, index) => item.column_description,
    // )

    const description = dataList.list.map(
        (item, index) =>
            new Object({
                name: item.column_name,
                description: item.column_description,
            }),
    )

    const description2 = dataList.list.map((item, index) => item.column_name)

    console.log(description)
    console.log(description2)

    // console.log(dataList)

    const confirmEdit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="w-full rounded-md border-2 border-[#D9D9D9]">
            <form action="" onSubmit={confirmEdit}>
                <div className="flex h-12 items-center justify-between rounded-t border-b border-[#D9D9D9] bg-[#F3F3F3] px-4 py-2.5">
                    <div className="flex items-center gap-1">
                        <Icon menu={`${dataList.type}`} size={23} />
                        <p className="text-xl font-semibold">{dataList.name}</p>
                        <div
                            className={`mx-1 h-4 w-4 rounded-full ${dataList.isFault ? 'bg-[#FF3B30]' : 'bg-[#007AFF]'}`}
                        />
                        <p
                            className={`text-sm text-[#909090] ${dataList.battery ? 'block' : 'hidden'}`}
                        >
                            {dataList.battery}%
                        </p>
                    </div>
                    <div className="flex h-full items-center gap-3">
                        <button
                            type="button"
                            className="cancel-btn h-full px-4 text-sm"
                            // onClick={() => {
                            //
                            // }}
                        >
                            삭제
                        </button>
                        <button
                            type="submit"
                            className="cancel-btn h-full px-4 text-sm"
                        >
                            수정 완료
                        </button>
                        <div
                            className="relative my-auto cursor-pointer"
                            // 마우스 올리면 나타나고 내리면 사라지게
                            // onMouseOver={focuseTooltip}
                            // onMouseOut={focuseTooltip}
                            onClick={focusTooltip}
                        >
                            <GoQuestion size={26} />
                            <Tooltip
                                tooltipState={tooltipState}
                                data={description}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-between px-4 py-3">
                    {dataList.list.map((item, index) => (
                        <div
                            key={index}
                            className={`flex w-[32%] items-baseline justify-between gap-3 overflow-hidden border-b border-[#C7C7CC] px-3 pb-1 pt-3 ${
                                dataList.list.length % 3 === 0 &&
                                index >= dataList.list.length - 3
                                    ? 'border-b-0 pb-0'
                                    : dataList.list.length % 3 === 2 &&
                                        index >= dataList.list.length - 2
                                      ? 'border-b-0 pb-0'
                                      : dataList.list.length % 3 === 1 &&
                                          index >= dataList.list.length - 1
                                        ? 'border-b-0 pb-0'
                                        : ''
                            }`}
                        >
                            <p className="text-xl font-medium text-[#767676]">
                                {item.column_name}
                            </p>
                            <input
                                type=""
                                name="value"
                                value={inputValue[index].column_value}
                                onChange={(e) =>
                                    setInputValue(e.currentTarget.value)
                                }
                                className="w-5 flex-1 rounded border border-[#767676] px-2 text-right text-3xl font-semibold"
                            />
                            <p
                                className={`text-xl ${item.column_description.match(/\((.*?)\)/) ? 'block' : 'hidden'}`}
                            >
                                {item.column_description.match(/\((.*?)\)/)
                                    ? item.column_description.match(
                                          /\((.*?)\)/,
                                      )[1]
                                    : null}
                            </p>
                        </div>
                    ))}
                </div>
            </form>
        </div>
    )
}
