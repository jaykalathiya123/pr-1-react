import img from '../../assets/my.png'
const Coma = ({ name , age,email,field,hod}) => {
    return (
        <div>
            <div className="d-flex">
                <div className="cared">

                    <div className="d-flex">
                        <img src={img} alt="hghgh" />
                    </div>
                    <h1>Name:{name}</h1>
                    <h1>age:{age}</h1>
                    <h1>E-mail:{email}</h1>
                    <h1>Field:{field}</h1>
                    <h1>Hobby:{hod}</h1>

                </div>
            </div>

        </div>
    )
}

export default Coma;