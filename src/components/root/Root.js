import { Outlet, NavLink } from "react-router-dom";

export const ROUTES = {
  CONTACTS: "/contacts",
  APPOINTMENTS: "/appointments",
};

function Root() {
  return (
    <>
      <nav
        style={{
          backgroundColor: "#03a8d8",
          padding: "30px 0px",
          display: "flex",
          justifyContent: "center",
          columnGap: 20,
          textDecoration: "none",
          color: "black",
        }}
      >
        <NavLink
          style={{
            fontWeight: 1000,
            textDecoration: "none",
            color: "white",
          
          }}
          to={ROUTES.CONTACTS}
        >
          Contacts
        </NavLink>
        <NavLink
          style={{
            fontWeight: 1000,
            textDecoration: "none",
            color: "white",
          }}
          to={ROUTES.APPOINTMENTS}
        >
          Appointments
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}

export default Root;
