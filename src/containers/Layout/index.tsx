import { useLocation } from 'react-router-dom';
import { Sidebar } from '../../components';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
    const location = useLocation();
    const shouldShowSidebar = location.pathname !== '/';

    return (
        <div className={` ${!shouldShowSidebar ? "gap-12 mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-28" : "w-full flex gap-12"}`}>
            {shouldShowSidebar && <Sidebar />}
            <div className={`h-full w-full ${shouldShowSidebar ? "pl-[25%] pt-10 pr-14 ml-14" : "pt-0"}`}>
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;