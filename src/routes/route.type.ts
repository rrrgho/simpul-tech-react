interface IRoutes {
  path: string;
  component: JSX.Element;
  noAuth?: boolean;
  noLayout?: boolean;
}

export type { IRoutes };
