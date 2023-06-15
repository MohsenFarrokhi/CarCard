import '../App.css'

const ImageComponent = ({image}) => {
  return (
      <div>
          <img className='car-img' src={image} alt="RedCar"/>
      </div>
  )
}

export default ImageComponent;