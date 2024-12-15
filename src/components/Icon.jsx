import {
    TbBatteryAutomotive,
    TbChargingPile,
    TbSolarPanel2,
    TbWashMachine,
} from 'react-icons/tb'
import { MdLight, MdOutlineHvac, MdOutlineWindPower } from 'react-icons/md'
import { PiBatteryFullBold } from 'react-icons/pi'
import { LuContainer } from 'react-icons/lu'
import { CgSmartHomeRefrigerator, CgSmartHomeWashMachine } from 'react-icons/cg'
import { BsSpeedometer2 } from 'react-icons/bs'
import { AiOutlineCloudServer } from 'react-icons/ai'

export default function Icon({ menu, size }) {
    return menu === 'vpp' ? (
        <AiOutlineCloudServer size={size} />
    ) : menu === 'Solar' ? (
        <TbSolarPanel2 size={size} />
    ) : menu === 'Wind' ? (
        <MdOutlineWindPower size={size} />
    ) : menu === 'EV Battery' ? (
        <PiBatteryFullBold size={size} />
    ) : menu === 'ESS' ? (
        <LuContainer size={size} />
    ) : menu === 'HVAC' ? (
        <MdOutlineHvac size={size} />
    ) : menu === 'Refrigerator' ? (
        <CgSmartHomeRefrigerator size={size} />
    ) : menu === 'Lighting' ? (
        <MdLight size={size} />
    ) : menu === 'Washing Machine' ? (
        <TbWashMachine size={size} />
    ) : menu === 'EV Charger' ? (
        <TbChargingPile size={size} />
    ) : menu === 'Dishwasher' ? (
        <CgSmartHomeWashMachine size={size} />
    ) : menu === 'inverter' ? (
        <TbBatteryAutomotive size={size} />
    ) : menu === 'smartmeter' ? (
        <BsSpeedometer2 size={size} />
    ) : (
        <></>
    )
}
