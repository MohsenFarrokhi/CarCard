import '../App.css'
const TitleComponent = ({title}) => {
    return (
        <div>
            <h1 className={'title'}>
                {title}
            </h1>
        </div>
    )
}

export default TitleComponent;