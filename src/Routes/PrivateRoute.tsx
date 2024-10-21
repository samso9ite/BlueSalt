import { ReactElement } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { RootState } from "../Store";
import { AUTH_PATHS, BASE_PATHS } from "../Constant/path";

type Props = {
  children: ReactElement;
};

const PrivateRoute = ({ children }: Props) => {
    console.log("This ran efficientyl");
    
  const location = useLocation();
  const { isLoggedIn } = useSelector((state: RootState) => state.account);

  if (!isLoggedIn) {
    console.log("This is working");
    
    return (
      <Navigate
        to={`/${BASE_PATHS.AUTH}/${AUTH_PATHS.SIGNIN}`}
        state={{ from: location }}
        replace
      />
    );
  } else return children;
};

export default PrivateRoute;
