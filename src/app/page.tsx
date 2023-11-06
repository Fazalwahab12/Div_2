
import Navbar from './components/Navbar'
import CarSearchInfo from './components/CarSearchInfo'

import DetailedSearchForm from './components/DetailedSearchForm'
import Car from './components/Car'
import Footors from './components/Footors'


export default function Home() {
  return (
    <div>
    <Navbar />
    
    <CarSearchInfo/>
<DetailedSearchForm/>

<Car/>
<Footors/>
</div>
  )
}
