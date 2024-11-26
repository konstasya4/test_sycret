import { Card, CardContent } from "@mui/material";
import "./SertificateStyle.css";
import { useNavigate } from "react-router-dom";

export default function SertificateItem({ cert }) {
  const navigate = useNavigate();
  let certificate_image = {
    5000: "card-5000",
    10000: "card-10000",
    20000: "card-20000",
    50000: "card-50000",
  };
  const handleNavigate = (path, data) => {
    navigate(path, { state: data });
  };
  const price = parseFloat(cert.PRICE);
  const res_prise = parseFloat(cert.REC_SUM);
  console.log(price);
  return (
    <div className="card">
      <Card className={`card-container ${certificate_image[price]}`}>
        <CardContent className="card-content">
          <div className="name-card">Sycret</div>
          <div className="text-card-container">
            <div className="text-card">Подарочная карта</div>
            <div className="price-text">{price} ₽</div>
            <div className="res-price-container">
              <div className="res-price-text">*Цена по скидке:</div>
              <div className="res-price-text">{res_prise} ₽</div>
            </div>
          </div>
        </CardContent>
      </Card>
      <button
        className="btn-card"
        onClick={() => handleNavigate("/formForPay", { cert: cert})}
      >
        Оформить
      </button>
    </div>
  );
}
