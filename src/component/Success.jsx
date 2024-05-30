import { useEffect, useState } from "react";
import Axios from "../utils/axios";
import "../App.css";
import { useLocation, useParams } from "react-router-dom";
import Loader from "./Loader";
import { toast } from "sonner";

const Success = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);

  const referenceCode = urlParams.get("reference");
  console.log(referenceCode)
  
  useEffect(() => {
    const ApiRequest = async () => {
      try {
        setLoading(true);
        if (!referenceCode)
          return toast.warning("Transaction Reference Code not provided.");
        const response = await Axios.get(`/verify-payment/${referenceCode}`);
        if (response.data.status == "ok") {
          setData(true);
          return toast.success("Cash deposit successfull")
        }
      } catch (err) {
        
        setData(false);
        setLoading(false);
        setError(err);
        if(err?.code == "ERR_NETWORK") return toast.info("No internet connection.");

        return toast.error("Transaction failed, error occured")
      } finally {
        setLoading(false);
      }
    };
    ApiRequest();
  }, []);

  return (
    <div className="success-screen">
      <div className="success_container">
        {data && (
          <>
            <h3 className="payment-successful">Deposit Successfull</h3>
            <button id="success_button" type="button">
              Go Home
            </button>
          </>
        )}
        {loading && <Loader />}
        {error && <h3 className="payment-successful">Deposit Failed</h3>}
      </div>
    </div>
  );
};

export default Success;
