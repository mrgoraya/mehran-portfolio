import { Routes } from "react-router-dom";
import { Route } from "react-router";

import { routes } from "./routes";
import AboutMe from "../pages/aboutMe";
import Blog from "../pages/blog";
import ContactMe from "../pages/contactMe";
import HomePage from "../pages/home";
import Portfolio from "../pages/portfolio";
import Services from "../pages/services";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={routes.Home} element={<HomePage />} />
      <Route path={routes.AboutMe} element={<AboutMe />} />
      <Route path={routes.Services} element={<Services />} />
      <Route path={routes.Portfolio} element={<Portfolio />} />
      <Route path={routes.Blogs} element={<Blog />} />
      <Route path={routes.ContactMe} element={<ContactMe />} />
      <Route path={"/"} element={<HomePage />} />
    </Routes>
  );
};

export default AppRoutes;
