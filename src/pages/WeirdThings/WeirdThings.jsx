import ThingCard from "../../components/ThingCard/ThingCard"
import { Link } from "react-router-dom"

const WeirdThings = (props) => {
  return ( 
    <>
      <h1>Mulder, it's me</h1>
      <Link to="/">Home</Link>

      {props.things.map((thing, idx) => 
        <ThingCard key={idx} thing={thing}/>
      )}

    </>
  )
}

export default WeirdThings;