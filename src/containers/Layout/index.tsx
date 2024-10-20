import { useLocation } from 'react-router-dom';
import { Sidebar } from '../../components';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
    const location = useLocation();
    const shouldShowSidebar = location.pathname !== '/';

    return (
        <div className={`h-screen ${!shouldShowSidebar && "flex mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-28"}`}>
            {shouldShowSidebar && <Sidebar />}
            <div className='h-full'>
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;