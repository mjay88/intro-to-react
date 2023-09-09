import Property from './Property';
import "./PropertyList.css"
function PropertyList({properties}) {
  return (
     <ul className='PropertyList'>
      {properties.map((property) => (
        <Property key={property.id} {...property}/>
      ))}
     </ul> 
    )
}

export default PropertyList
