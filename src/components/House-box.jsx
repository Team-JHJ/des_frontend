import { LuHouse } from 'react-icons/lu'
import { useNavigate } from 'react-router-dom'

export default function HouseBox({
    id,
    name,
    der,
    homeload,
    inverter,
    smartmeter,
}) {
    const navigate = useNavigate()
    const menu = [
        { key: 'der', value: der },
        { key: 'homeload', value: homeload },
        { key: 'inverter', value: inverter },
        { key: 'smartmeter', value: smartmeter },
    ]

    // 해당 집 정보페이지로 이동
    const navigateHouse = (id) => {
        navigate(`/house/${id}/der`)
    }

    return (
        <div
            className="flex w-[23%] grow-0 cursor-pointer flex-col overflow-hidden rounded-md border-2 border-[#D9D9D9] p-4 text-lg hover:bg-[#F1F2F4]"
            onClick={() => navigateHouse(id)}
        >
            <div className="flex w-full items-center justify-center">
                <LuHouse className="mr-2" />
                <p className="max-w-[80%] overflow-hidden overflow-ellipsis">
                    {name}
                </p>
            </div>
            <div className="box-content h-24 w-full py-3">
                <ul>
                    {menu.map(
                        (item, index) =>
                            item.value !== null && (
                                <li
                                    key={index}
                                    className="flex w-full items-center gap-x-2"
                                >
                                    <div
                                        className={`h-4 w-4 rounded-full ${item.value ? 'bg-[#FF3B30]' : 'bg-[#007AFF]'}`}
                                    />
                                    <p>{item.key}</p>
                                </li>
                            ),
                    )}
                </ul>
            </div>
        </div>
    )
}
