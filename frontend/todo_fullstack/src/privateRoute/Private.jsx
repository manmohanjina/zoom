import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

export default function Private({ children }) {
  const admin = useSelector((store) => store.authreducer.isAdmin);
  const navigate = useNavigate();

  if (!admin) {
    alert("not authorised");
    return <Navigate to="/" />;
  } else {
    return children;
  }
}
