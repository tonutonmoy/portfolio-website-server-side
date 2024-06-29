import { Router } from "express";
import { UserRoutes } from "../modules/user/auth.route";
import { SkillsRoutes } from "../modules/skills/skills.route";
import { ProjectsRoutes } from "../modules/projects/projects.route";
import { ExperienceRoutes } from "../modules/experience/experience.route";
import { BlogsRoutes } from "../modules/blogs/blogs.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: UserRoutes,
  },
  {
    path: "/skills",
    route: SkillsRoutes,
  },
  {
    path: "/projects",
    route: ProjectsRoutes,
  },
  {
    path: "/experience",
    route: ExperienceRoutes,
  },
  {
    path: "/blogs",
    route: BlogsRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
