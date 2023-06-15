import '../App.css'

const TitleComponent = ({title}) => {
    return (
        <div className='title-style'>
            <h1 className={'title'}> {title} </h1>
        </div>
    )
}

export default TitleComponent;