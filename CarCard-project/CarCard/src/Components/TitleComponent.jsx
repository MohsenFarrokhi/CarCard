import '../App.css'

const TitleComponent = ({title}) => {
    return (
        <div className='title_style'>
            <h1 className={'title'}> {title} </h1>
        </div>
    )
}

export default TitleComponent;