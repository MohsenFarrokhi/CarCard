import '../App.css'

const ImageComponent = ({image}) => {
  return (
      <div>
          <img className='car-image' src={image} alt="RedCar"/>
      </div>
  )
}

export default ImageComponent;