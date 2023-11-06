
import Navbar from './components/Navbar'
import CarSearchInfo from './components/CarSearchInfo'
import Footor from './components/Footor'
import DetailedSearchForm from './components/DetailedSearchForm'
import Squarebox from './components/Square_box'

export default function Home() {
  return (
    <div>
    <Navbar />
    
    <CarSearchInfo/>
<DetailedSearchForm/>

{/* <div className="absolute top-[1205px] left-[400px] w-[148px] h-[21px]">
       <Squarebox name={'fazal'}/>
      </div> */}
    </div>
  )
}
