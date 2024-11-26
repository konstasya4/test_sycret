import SertificatePage from "../components/sertificate/SertificatePage";
import FormPayPage from "../components/formPay/FormPayPage";
import PayPage from "../components/payPage/PayPage";
export const routesPath = [
  { path: "/listCertificates", element: <SertificatePage />, exact: true },
  { path: "/formForPay", element: <FormPayPage />, exact: true },
  { path: "/payPage", element: <PayPage />, exact: true },
  { path: "/*", element: <SertificatePage />, exact: true },
];
