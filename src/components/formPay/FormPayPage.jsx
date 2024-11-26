import { useLocation } from "react-router-dom";
import Form from "./Form";
import "./FormStyle.css";
export default function FormPayPage() {
  const location = useLocation();
  const certData = location.state;
  return (
    <div className="form body-background">
      <div className="text-form">{certData.cert.NAME}</div>
      <div>
        <Form cert={certData.cert}/>
      </div>
    </div>
  );
}
