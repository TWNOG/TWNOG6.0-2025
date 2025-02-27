import type { FC, ReactNode } from "react";

const Layout: FC<{
  detail: ReactNode,
  children: ReactNode,
}> = ({ detail, children }) => (
  <>
    {detail}
    {children}
  </>
);

export default Layout;