import GroupIcon from '@mui/icons-material/Group';
import GppGoodIcon from '@mui/icons-material/GppGood';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const items = [{
        title: "Profesjonalny zespół",
        icon: <GroupIcon  sx={{ fontSize: 70 }}/>,
        description: "Power Queen - założona przez ekspertów od akumulatorów LiFePO4"
    },{
        title: "5 lat gwarancji",
        icon: <GppGoodIcon sx={{ fontSize: 70 }}/>,
        description: "Oferujemy 5-letnią gwarancję i wymianę uszkodzonych akumulatorów."
    },{
        title: "Darmowa wysyłka",
        icon: <LocalShippingIcon sx={{ fontSize: 70 }}/>,
        description: "2-4 dni robocze w DE i 3-7 dni robocze w UE za pośrednictwem DPD/UPS."
    },{
        title: "Całodobowa obsługa klienta",
        icon: <AccessTimeIcon sx={{ fontSize: 70 }}/>,
        description: "Rozwiązanie problemu w ciągu 12-24 godzin (czat online lub e-mail)"
    }

]

export default function Badges() {
    return(
        <div className="grid lg:grid-cols-4 place-content-center my-10">
            {items.map((item, index) => {
                return(
                    <div key={index} className="flex flex-col items-center gap-y-8 place-content-center m-10 max-w-[300px]">
                        {item.icon}
                        <div className='gap-y-3 flex flex-col'>
                            <h3 className="text-2xl font-bold text-center text-yellow-500">{item.title}</h3>
                            <p className="text-lg text-center">{item.description}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}