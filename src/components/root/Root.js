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
          backgroundColor: "rgb(238,174,202)",
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
            fontWeight: 900,
            textDecoration: "none",
            color: "black",
          }}
          to={ROUTES.CONTACTS}
        >
          Contacts
        </NavLink>
        <NavLink
          style={{
            fontWeight: 900,
            textDecoration: "none",
            color: "black",
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
