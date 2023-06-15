import '../App.css'

const ImageComponent = ({image}) => {
  return (
      <div>
          <img className='car_img' src={image} alt="RedCar"/>
      </div>
  )
}

export default ImageComponent;