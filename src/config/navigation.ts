export type NavItem = {
  label: string;
  path: string;
};

export const mainMenu: NavItem[] = [
  {
    label: "Products",
    path: "/products",
  },
  {
    label: "People",
    path: "/users",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

export const userMenu: NavItem[] = [
  {
    label: "Profile",
    path: "/profile",
  },
  {
    label: "Settings",
    path: "/setting",
  },
  {
    label: "Inbox",
    path: "/inbox",
  },
];

export const footerMenu: NavItem[] = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Policy",
    path: "/policy",
  },
];
