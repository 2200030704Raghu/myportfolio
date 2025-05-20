import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project? </p>
        <p>Contact me now for a Free consultation.</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:raghuramreddydondeti@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:raghuramreddydondeti@gmail.com">raghuramreddydondeti@gmail.com</a>
        </div>
        <div>
        <a href="tel:+917569522184"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+917569522184">(+91) 7569522184</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}