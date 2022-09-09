import axios from "axios";
import notificationIcon from "../../assets/notification-icon.svg";
import { Sale } from "../../models/sale";
import { BASE_URL } from "../../utils/request";
import './styles.css';

type Props = {
  saleId: number;
}

function handleClick(id: number) {
  axios(`${BASE_URL}/sales/${id}/notification`)
  .then(response => {
    response.data;
  });
}

function NotificationButton({saleId}: Props) {
  return (
    <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
      <img src={notificationIcon} alt="Notification" />
    </div>
  );
}

export default NotificationButton;