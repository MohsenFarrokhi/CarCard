import ImageComponent from "./ImageComponent.jsx";
import TitleComponent from "./TitleComponent.jsx";
import Description from "./Description.jsx";
import Share from "./Share.jsx";
import Learn from "./Learn.jsx";

const CardComponent = ({image, title, description, share, learn}) => {
    return (
        <div>
            <div className="card-container">
                <div>
                    <ImageComponent image={image}/>
                </div>
                <div>
                    <div>
                        <TitleComponent title={title}/>
                    </div>
                    <div>
                        <Description description={description}/>
                    </div>
                    <div className='learn-share'>
                        <Share share={share}/>
                        <Learn Learn={learn}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardComponent