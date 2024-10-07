const items = [
  {
    Title: "Przyszłość przechowywania w domu",
    Description: "Maksymalizuje efektywność energetyczną i magazynuje do 81 920 watogodzin (16 P) mocy dzięki inteligentnemu systemowi komunikacji i ulepszonemu wielokrotnemu zabezpieczeniu BMS – idealne dla rodzin dbających o środowisko.",
    href: "/products/power-queen-12v-100ah"
  },
  {
    Title: "Przyszłość przechowywania w domu",
    Description: "Maksymalizuje efektywność energetyczną i magazynuje do 81 920 watogodzin (16 P) mocy dzięki inteligentnemu systemowi komunikacji i ulepszonemu wielokrotnemu zabezpieczeniu BMS – idealne dla rodzin dbających o środowisko.",
    href: "/products/power-queen-12v-100ah"
  },
  {
    Title: "Przyszłość przechowywania w domu",
    Description: "Maksymalizuje efektywność energetyczną i magazynuje do 81 920 watogodzin (16 P) mocy dzięki inteligentnemu systemowi komunikacji i ulepszonemu wielokrotnemu zabezpieczeniu BMS – idealne dla rodzin dbających o środowisko.",
    href: "/products/power-queen-12v-100ah"
  },
]

export default function DescriptionsWithGraphic() {
  return (
    <div>
      {items.map((item, index) => {
        const Graphic = () => {
          return <div className="flex flex-col items-center place-content-center bg-ui-bg-paper h-[50vh]"> PLACEHOLDER </div>
        }
        const Description = () => {
          return (
            <div className="flex flex-col items-center gap-y-5 place-content-center m-5 m-y-10">
              <h3 className="text-2xl font-bold text-center">{item.Title}</h3>
              <p className="text-lg text-center">{item.Description}</p>
              <a href={item.href} className="text-lg text-center text-ui-primary-main">Zobacz więcej</a>
            </div>
          )
        }
        return(
        <div key={index} className="grid lg:grid-cols-2 place-content-center">
            {index % 2 === 0 ? (
            <>
              <Graphic/>
              <Description/>
            </>
            ) : (
            <>
              <Description/>
              <Graphic/>
            </>
            )}
        </div>
      )})}
    </div>
  )
}