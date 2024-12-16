import Icon from '@/components/Icon.jsx'
import { GoQuestion } from 'react-icons/go'
import Tooltip from '@/components/Tooltip.jsx'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import listAPI from '@/api/list.js'

export default function ListEditBox({ dataList }) {
    const navigate = useNavigate()
    const params = useParams()
    const category = params.category
    const houseId = params.houseId
    const [inputValue, setInputValue] = useState(dataList.details)
    const [tooltipState, setTooltipState] = useState(false)
    const list = dataList.details
    console.log(dataList.id)

    const focusTooltip = () => {
        setTooltipState((prev) => !prev)
    }

    // console.log(dataList)

    // const description = dataList.list.map(
    //     (item, index) => item.column_description,
    // )

    console.log(typeof inputValue[2].value)
    // console.log(inputValue)

    const description = list.map(
        (item) =>
            new Object({
                name: item.name,
                description: item.description,
            }),
    )

    const changeInputValue = (e, index) => {
        const data = [...inputValue]
        data[index].value = e.target.value
        setInputValue(data)
    }

    const confirmEdit = (e) => {
        e.preventDefault()
    }

    const deleteData = async () => {
        // console.log(list)
        try {
            const response = await listAPI.deleteList({
                category: category,
                id: dataList.id,
            })
            console.log(response.data)
            navigate(-1)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="w-full rounded-md border-2 border-[#D9D9D9]">
            <form action="" onSubmit={confirmEdit}>
                <div className="flex h-12 items-center justify-between rounded-t border-b border-[#D9D9D9] bg-[#F3F3F3] px-4 py-2.5">
                    <div className="flex items-center gap-1">
                        <Icon menu={`${dataList.type}`} size={23} />
                        <p className="text-xl font-bold">{dataList.name}</p>
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
                            onClick={() => {
                                deleteData()
                            }}
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
                <div className="flex flex-wrap gap-[2%] px-4 py-3">
                    {list.map((item, index) => (
                        <div
                            key={index}
                            className={`flex w-[32%] items-baseline justify-between gap-3 overflow-hidden border-b border-[#C7C7CC] px-3 pb-1 pt-3 ${
                                list.length % 3 === 0 &&
                                index >= list.length - 3
                                    ? 'border-b-0 pb-0'
                                    : list.length % 3 === 2 &&
                                        index >= list.length - 2
                                      ? 'border-b-0 pb-0'
                                      : list.length % 3 === 1 &&
                                          index >= list.length - 1
                                        ? 'border-b-0 pb-0'
                                        : ''
                            }`}
                        >
                            <p className="text-xl font-medium text-[#767676]">
                                {item.name}
                            </p>
                            <input
                                type="" /*{typeof inputValue[index].value}*/
                                name="value"
                                value={inputValue[index].value}
                                onChange={(e) => changeInputValue(e, index)}
                                className="w-5 flex-1 rounded border border-[#767676] px-2 text-right text-3xl font-bold"
                            />
                            <p
                                className={`text-xl ${item.description.match(/\((.*?)\)/) ? 'block' : 'hidden'}`}
                            >
                                {item.description.match(/\((.*?)\)/)
                                    ? item.description.match(/\((.*?)\)/)[1]
                                    : null}
                            </p>
                        </div>
                    ))}
                </div>
            </form>
        </div>
    )
}
