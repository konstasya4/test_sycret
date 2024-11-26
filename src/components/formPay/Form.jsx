import { useState } from "react";
import "./FormStyle.css";
import { Checkbox, FormControlLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { osSale } from "../../services";
import TextInput from "./TextInput";
import PhoneInput from "./PhoneInput";

export default function Form(cert) {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };
  const [formValues, setFormValues] = useState({
    Id: cert.cert.ID,
    TableName: cert.cert.TABLENAME,
    PrimaryKey: cert.cert.PRIMARYKEY,
    Price: cert.cert.PRICE,
    Summa: cert.cert.SUMMA,
    ClientName: "",
    Phone: "",
    Email: "",
    PaymentTypeId: 2,
    UseDelivery: 0,
    DeliveryAddress: "",
    IsGift: 0,
    MsgText: "",
    PName: "",
    PPhone: "",
  });
  const [isForAnother, setIsForAnother] = useState(false);
  const [errors, setErrors] = useState({
    fullName: false,
    phone: false,
    email: false,
  });

  const handleChange = (field, value) => {
    setFormValues({ ...formValues, [field]: value });
    setErrors({ ...errors, [field]: false });
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (path) => {
    const phoneDigits = formValues.Phone.replace(/\D/g, "");
    const pPhoneDigits = formValues.PPhone.replace(/\D/g, "");
    const newErrors = {
      fullName: !formValues.ClientName.trim(),
      phone: phoneDigits.length !== 11 || !formValues.Phone.startsWith("+7"),
      email: !validateEmail(formValues.Email),
      ...(isForAnother && {
        pPhone:
          pPhoneDigits.length !== 11 || !formValues.PPhone.startsWith("+7"),
      }),
    };

    setErrors(newErrors);

    if (!Object.values(newErrors).some((error) => error)) {
      const formattedPhone = phoneDigits.slice(-10);
      const formattedPPhone = pPhoneDigits.slice(-10);
      const updatedFormValues = {
        ...formValues,
        Phone: formattedPhone,
        ...(isForAnother && { PPhone: formattedPPhone }),
      };
      osSale(updatedFormValues);
      navigate(path);
    }
  };

  return (
    <div className="form-container">
      <TextInput
        label="ФИО"
        value={formValues.ClientName}
        onChange={(value) => handleChange("ClientName", value)}
        error={errors.fullName}
        helperText={errors.fullName && "Поле обязательно для заполнения"}
      />

      <PhoneInput
        label="Телефон"
        value={formValues.Phone}
        onChange={(value) => handleChange("Phone", value)}
        error={errors.phone}
        helperText={errors.phone && "Введите корректный номер телефона"}
      />

      <TextInput
        label="Почта"
        value={formValues.Email}
        onChange={(value) => handleChange("Email", value)}
        error={errors.email}
        helperText={errors.email && "Введите корректный email"}
      />

      <TextInput
        label="Сообщение"
        value={formValues.MsgText}
        onChange={(value) => handleChange("MsgText", value)}
        multiline
        rows={4}
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={isForAnother}
            onChange={(e) => setIsForAnother(e.target.checked)}
          />
        }
        label="Покупаю другому человеку"
      />

      {isForAnother && (
        <>
          <TextInput
            label="ФИО получателя"
            value={formValues.PName}
            onChange={(value) => handleChange("PName", value)}
          />
          <PhoneInput
            label="Телефон получателя"
            value={formValues.PPhone}
            onChange={(value) => handleChange("PPhone", value)}
          />
        </>
      )}

      <div className="container-btn">
        <button
          className="btn-back btn"
          onClick={() => handleNavigate("/listCertificates")}
        >
          Назад
        </button>
        <button
          className="btn-pay btn"
          onClick={() => handleSubmit("/payPage")}
        >
          Оплатить
        </button>
      </div>
    </div>
  );
}
