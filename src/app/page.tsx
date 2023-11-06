
import Navbar from './components/Navbar'
import CarSearchInfo from './components/CarSearchInfo'
import Footor from './components/Footor'
import DetailedSearchForm from './components/DetailedSearchForm'
import Car from './components/Car'


export default function Home() {
  return (
    <div>
    <Navbar />
    
    <CarSearchInfo/>
<DetailedSearchForm/>

<Car/>
</div>
  )
}
