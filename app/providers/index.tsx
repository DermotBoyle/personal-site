import { SideMenuProvider } from "./sidemenu"

const Providers = ({ children }: {
    children: React.ReactNode
  }) => {
    return (
        <SideMenuProvider>
            {children}
        </SideMenuProvider>
    )
}

export default Providers