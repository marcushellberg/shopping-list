import { Route } from "@vaadin/router";
import "./views/main/main-view";
import "./views/list/list-view";

export const routes: Route[] = [
  {
    path: "",
    component: "main-view",
    children: [
      {
        path: "",
        component: "list-view",
      },
      {
        path: "list",
        component: "list-view",
      },
      {
        path: "overview",
        component: "overview-view",
        action: async () => {
          await import("./views/overview/overview-view");
        },
      },
    ],
  },
];
