interface IRoutes {
  path: string;
  component: JSX.Element;
  noLayout: boolean;
}

interface IAuthenticated {
  user_id: number | undefined;
  name: string;
  access_token: string | undefined;
  is_authenticate: boolean;
}

export type { IRoutes, IAuthenticated };
