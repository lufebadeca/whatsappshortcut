

const Button = ({countryCode, number, buttonStatus, buttonText})=>{

    return(
        <button className='btn btn-primary fs-4' disabled={buttonStatus}>
            <a href={`https://api.whatsapp.com/send?phone=${countryCode}${number}`} className='custom-link'>{buttonText}</a>
        </button>
    )
};

export default Button;