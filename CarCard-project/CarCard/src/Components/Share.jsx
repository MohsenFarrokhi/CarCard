import '../App.css'

const Share = ({share}) => {
    return (
        <div>
            <a href="#"> <span className='share'> {share} </span> </a>
        </div>
    )
}

export default Share;