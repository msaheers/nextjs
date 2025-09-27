import FirstComponent from "@/components/FirstComponent"
import ComponentWithProp from "@/components/ComponentWithProp"
import ComponentWithManyProps from "@/components/ComponentsWithManyProps"
import ComponentWithCondition from "@/components/ComponentWithCondition"
import ComponentWithMap from "@/components/ComponentWithMap"
import ComponentWithEvents from "@/components/ComponentWithEvents"
import ComponentWithState from "@/components/ComponentWithState"
import ComponentsWithUseEffect from "@/components/ComponentsWithUseEffect"
import ComponenteComFormik from "@/components/ComponentWithFormik"



export default function Home() {
  return (
    <div className="min-h-screen bg-yellow-400 flex flex-col items-center
justify-center">
<h1 className="text-7xl font-bold text-black">Hello! 😊</h1>
<FirstComponent/>
<ComponentWithProp/>
<ComponentWithManyProps title="Components with propies" cor="yellow" nome="Mishal" Career=" Junior Full Stack Developer"/>
<ComponentWithCondition/>
<ComponentWithMap/>
<ComponentWithEvents/>
<ComponentWithState/>
<ComponentsWithUseEffect/>
<ComponenteComFormik/>








 </div>
) }