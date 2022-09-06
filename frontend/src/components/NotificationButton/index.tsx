import notificationIcon from "../../assets/notification-icon.svg";
import './styles.css';

function NotificationButton() {
  return (
    <div className="dsmeta-red-btn">
      <img src={notificationIcon} alt="Notification" />
    </div>
  );
}

export default NotificationButton;