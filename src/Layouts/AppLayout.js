import { Header, MainLoader } from "../Components/Common";
import React, { useEffect } from "react";
import { LOGIN_PATH } from "../Constants/AppPaths";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import { fetchCurrentUserDetail } from "../Reducers/CurrentUserReducer";
import { isEmptyObject } from "../Helpers/Utility";

const AppLayout = (props) => {
  const { children, handleLogout } = props;
  // const currentUserData = useSelector(state => state.CurrentUserData);
  //TODO uncomment when we have user setup
  // const currentUserLoading = currentUserData?.loading;
  // const tenantLoading = useSelector(state => state.BasicConfigurationData?.loading);
  // const loading = currentUserLoading || tenantLoading
  const loading = false;
  const dispatch = useDispatch();

  //TODO when we have user setup

  // useEffect(() => {
  //     if (props.user) {
  //         isEmptyObject(currentUserData?.user) && dispatch(fetchCurrentUserDetail())
  //         dispatch(fetchTenantDetail())
  //     }
  // }, [props.user]);

  return (
    <>
      {!props.user && <Navigate to={LOGIN_PATH.replace(':source', 'user')}/>}
      <div className="page-wrapper">
        <div className="page-body-wrapper">
          {loading ? (
            <MainLoader show={loading} />
          ) : (
            <>
              <Header handleLogout={handleLogout} />
              <div className="page-body py-24">
                <div className="container-fluid">{children}</div>
              </div>
            </>
          )}
        </div>
          <Toaster/>
      </div>
    </>
  );
};

export default AppLayout;
