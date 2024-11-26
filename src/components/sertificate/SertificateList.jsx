import SertificateItem from "./SertificateItem"
import { CircularProgress } from "@mui/material";
import { Grid } from "@mui/material";
import "./SertificateStyle.css";

export default function SertificateList({ listSertificates }) {
  if (!listSertificates.length) {
    return (
      <div className="loading-container">
        <CircularProgress />
        <p>Загрузка сертификатов...</p>
      </div>
    );
  }
    return(
        <>
        <h2 className="text_cert">Список сертификатов</h2>
        <Grid className="grid-container">
            {listSertificates.map((cert) => (
                <SertificateItem cert={cert}/>
            ))}
        </Grid>
        </>
   
    )


}