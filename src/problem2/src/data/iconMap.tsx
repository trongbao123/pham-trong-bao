import { ReactElement } from 'react';
import IconAmpLuna from "../assets/icons/IconAmpLuna"
import IconAtom from "../assets/icons/IconAtom"
import IconAxlUsdc from "../assets/icons/IconAxlUsdc"
import IconBlur from "../assets/icons/IconBlur"
import IconBNeo from "../assets/icons/IconBNeo"
import IconBUsd from "../assets/icons/IconBUsd"
import IconEth from "../assets/icons/IconEth"
import IconEvmox from "../assets/icons/IconEvmox"
import IconGmx from "../assets/icons/IconGmx"
import IconIbcx from "../assets/icons/IconIbcx"
import IconIris from "../assets/icons/IconIris"
import IconKuji from "../assets/icons/IconKuji"
import IconLsi from "../assets/icons/IconLsi"
import IconLunia from "../assets/icons/IconLunia"
import IconOkb from "../assets/icons/IconOkb"
import IconOkt from "../assets/icons/IconOkt"
import IconOsmo from "../assets/icons/IconOsmo"
import IconRatom from "../assets/icons/IconRatom"
import IconRswth from "../assets/icons/IconRswth"
import IconStatom from "../assets/icons/IconStatom"
import IconStevMax from "../assets/icons/IconStevMax"
import IconStlunia from "../assets/icons/IconStlunia"
import IconStosmo from "../assets/icons/IconStosmo"
import IconStrd from "../assets/icons/IconStrd"
import IconUsd from "../assets/icons/IconUsd"
import IconUsdc from "../assets/icons/IconUsdc"
import IconSwth from '../assets/icons/IconSwth';
import IconUsc from "../assets/icons/IconUsc"
import IconWbtc from "../assets/icons/IconWbtc"
import IconWsth from "../assets/icons/IconWsth"
import IconYeild from "../assets/icons/IconYeild"
import IconZill from "../assets/icons/IconZill"

interface IconMap {
    [key: string]: ReactElement; // Define the type of iconMap values as ReactElement
}
const iconMap: IconMap = {
    "BLUR": <IconBlur />,
    "bNEO": <IconBNeo />,
    "BUSD": <IconBUsd />,
    "USD": <IconUsd />,
    "ETH": <IconEth />,
    "GMX": <IconGmx />,
    "STEVMOS": <IconStevMax />,
    "LUNA": <IconLunia />,
    "RATOM": <IconRatom />,
    "STRD": <IconStrd />,
    "EVMOS": <IconEvmox />,
    "IBCX": <IconIbcx />,
    "IRIS": <IconIris />,
    "ampLUNA": <IconAmpLuna />,
    "KUJI": <IconKuji />,
    "STOSMO": <IconStosmo />,
    "USDC": <IconUsdc />,
    "axlUSDC": <IconAxlUsdc />,
    "ATOM": <IconAtom />,
    "STATOM": <IconStatom />,
    "OSMO": <IconOsmo />,
    "rSWTH": <IconRswth />,
    "STLUNA": <IconStlunia />,
    "LSI": <IconLsi />,
    "OKB": <IconOkb />,
    "OKT": <IconOkt />,
    "SWTH": <IconSwth />,
    "USC": <IconUsc />,
    "WBTC": <IconWbtc />,
    "wstETH": <IconWsth />,
    "YieldUSD": <IconYeild />,
    "ZIL": <IconZill />,
}

export default iconMap