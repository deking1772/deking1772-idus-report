import Report1 from "@/pages/Report1";
import Report2 from "@/pages/Report2";

const routes = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/report1",
    name: "Report1",
    component: Report1,
  },
  {
    path: "/report2",
    name: "Report2",
    component: Report2,
  },
];

export default routes;
