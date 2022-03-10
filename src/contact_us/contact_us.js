import './contact_us.css'
import icon from '../assets/img/contact_us_icon.png'

const ContactUs = () => {
    return (
        <div className="ContactUs">
            <img src={icon}></img>
            <h2>CONTACT US</h2>
            <ul>
                <li>No Telp: 0895633098496</li>
                <li>Email: malvinoaustintanura@gmail.com</li>
            </ul>
        </div>
    );
}

export default ContactUs;