import { LuHouse } from 'react-icons/lu'

export default function HouseBox({
    id,
    name,
    der,
    homeload,
    inverter,
    smartmeter,
}) {
    const menu = [
        { key: 'der', value: der },
        { key: 'homeload', value: homeload },
        { key: 'inverter', value: inverter },
        { key: 'smartmeter', value: smartmeter },
    ]

    return (
        <div className="p-4 w-[23%] grow-0 flex flex-col rounded-md text-lg cursor-pointer border-[#D9D9D9] border-2 overflow-hidden hover:bg-[#F1F2F4]">
            <div className="flex items-center justify-center w-full">
                <LuHouse className="mr-2" />
                <p className="max-w-[80%] overflow-hidden overflow-ellipsis">
                    {name}
                </p>
            </div>
            <div className="w-full h-24 py-3 box-content">
                <ul>
                    {menu.map(
                        (item) =>
                            item.value !== null && (
                                <li
                                    key={id}
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
