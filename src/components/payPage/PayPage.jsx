import "./PayStyle.css";
import { useNavigate } from "react-router-dom";
export default function PayPage() {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <div className="pay">
      <h1>Оплата</h1>
      <button
        className="btn-back btn"
        onClick={() => handleNavigate("/listCertificates")}
      >
        Назад
      </button>
    </div>
  );
}
