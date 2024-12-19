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
    const [inputName, setInputName] = useState(dataList.name)
    const [tooltipState, setTooltipState] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const list = dataList.details

    const focusTooltip = () => {
        setTooltipState((prev) => !prev)
    }

    const description = list.map(
        (item) =>
            new Object({
                name: item.name,
                description: item.description,
            }),
    )

    const changeInputValue = (e, index) => {
        const data = [...inputValue]
        data[index].value =
            e.target.type === 'radio'
                ? e.target.value === 'true' // "true" 문자열을 boolean true로 변환
                : e.target.value
        setInputValue(data)
        // const data = { ...input }
        // data.details[index].value = e.target.value
    }

    const processData = () => {
        const details = inputValue.map((item) => ({
            [item.name]: item.value,
        }))

        const data = {
            type: dataList.type
                ? dataList.type
                : category === 'inverter'
                  ? 'Inverter'
                  : 'smartmeter',
            id: dataList.id,
            isFault: dataList.isFault,
            battery: dataList.battery,
            ...Object.assign({}, ...details),
            [`${category}Name`]: inputName,
        }

        return data
    }

    const updateList = async () => {
        try {
            setIsLoading(true)
            const data = processData()
            listAPI.updateList({ category, data })
            setIsLoading(false)
            navigate(`/house/${houseId}/${category}`)
        } catch (error) {
            console.error(error)
            setIsLoading(false)
        }
    }

    const confirmEdit = async (e) => {
        e.preventDefault()
        // 리스트 내용 수정 요청
        updateList()
    }

    const deleteData = async () => {
        try {
            await listAPI.deleteList({
                category: category,
                id: dataList.id,
            })
            // 삭제하고 이전 페이지로 이동
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
                        <input
                            type=""
                            value={inputName}
                            onChange={(e) => setInputName(e.target.value)}
                            className="rounded border border-[#767676] px-2 text-xl font-bold"
                        />
                        {/*<p className="text-xl font-bold">{dataList.name}</p>*/}
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
                            {/* 정해진 입력타입이 boolean이 아니라면 */}
                            {inputValue[index].typeof !== 'Boolean' ? (
                                <input
                                    type={`${inputValue[index].typeof === 'String' ? 'text' : inputValue[index].typeof === 'Integer' || inputValue[index].typeof === 'Float' ? 'number' : ''}`}
                                    name="value"
                                    value={inputValue[index].value ?? ''}
                                    onChange={(e) => changeInputValue(e, index)}
                                    className="w-5 flex-1 rounded border border-[#767676] px-2 text-right text-3xl font-bold"
                                />
                            ) : (
                                // 정해진 입력값이 boolean이라면 true/false 중 선택하도록
                                <fieldset className="flex w-full justify-end gap-1.5 text-2xl">
                                    <input
                                        type="radio"
                                        id="choice1"
                                        name={inputValue[index].name}
                                        value="true"
                                        // 현재 값이 true인지 확인
                                        checked={
                                            inputValue[index].value === true
                                        }
                                        onChange={(e) =>
                                            changeInputValue(e, index)
                                        }
                                    />
                                    <label htmlFor="choice1">true</label>
                                    <input
                                        type="radio"
                                        id="choice2"
                                        name={inputValue[index].name}
                                        value="false"
                                        // 현재 값이 false인지 확인
                                        checked={
                                            inputValue[index].value === false
                                        }
                                        onChange={(e) =>
                                            changeInputValue(e, index)
                                        }
                                    />
                                    <label htmlFor="choice2">false</label>
                                </fieldset>
                            )}
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
