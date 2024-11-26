import { osGetGoodList } from "../../services";
import { useState, useEffect } from "react";
import SertificateList from "./SertificateList";
import "./SertificateStyle.css";

export default function SertificatePage() {
  const [listSertificate, setListSertificate] = useState([]);
  useEffect(() => {
    const fetchSerticateData = async () => {
      try {
        const response = await osGetGoodList();
        console.log(response);
        setListSertificate(response);
      } catch (error) {
        console.error("Error fetching service:", error);
      }
    };
    fetchSerticateData();
  }, []);

  return (
    <div className="body-background">
      <div>
        <div className="title_cert">Дарите подарки для самых близких</div>
      </div>
      <SertificateList listSertificates={listSertificate} />
    </div>
  );
}
