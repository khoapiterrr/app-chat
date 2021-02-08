export default interface IRoute {
  path: string;
  exact?: boolean | null;
  loader: any;
  menu?: boolean | null;
  label?: string | null;
  permissionRequired?: boolean | null;
  icon?: string | null;
}
