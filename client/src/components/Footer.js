import {
  Facebook,
  Instagram,
  MailOutline,
  Payment,
  Phone,
  Room,
  Twitter,
  YouTube,
} from "@material-ui/icons";
import "./main.scss";

const Footer = () => {
  return (
    <div className="foot_container">
      <div className="foot_left">
        <h1>John Store</h1>
        <div className="foot_desc">
          Cristiano Ronaldo Virat Kohli Rohit Sharma MS Dhoni
        </div>
        <div className="foot_social">
          <div className="social_icon">
            <Facebook color="3B5999" />
          </div>
          <div className="social_icon">
            <Instagram />
          </div>
          <div className="social_icon">
            <Twitter />
          </div>
          <div className="social_icon">
            <YouTube />
          </div>
        </div>
      </div>
      <div className="foot_center">
        <h1>Useful Links</h1>
        <div className="foot_list">
          <div className="foot_listItem">Home</div>
          <div className="foot_listItem">Cart</div>
          <div className="foot_listItem">Woman Fashion</div>
          <div className="foot_listItem">Men Fashion</div>
          <div className="foot_listItem">Accessories</div>
          <div className="foot_listItem">My Account</div>
          <div className="foot_listItem">Order Tracking</div>
          <div className="foot_listItem">Wishlist</div>
        </div>
      </div>
      <div className="foot_right">
        <h1>Contact</h1>
        <div className="contactItem">
          <Room />
        </div>
        <div className="contactItem">
          <MailOutline />
        </div>
        <div className="contactItem">
          <Phone /> 999
        </div>
        <div className="contactItem">
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
