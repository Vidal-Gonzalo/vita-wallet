import { useLocation, useNavigate } from 'react-router-dom';

interface SidebarItem {
    label: string;
    path: string;
}

const sidebarItems: SidebarItem[] = [
    { label: 'Inicio', path: '/dashboard' },
    { label: 'Transferir', path: '/transfer' },
    { label: 'Recargar', path: '/recharge' },
    { label: 'Intercambiar', path: '/exchange' },
    { label: 'Perfil', path: '/profile' },
    { label: 'Ayuda', path: '/help' }
];

const Sidebar = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const currentLocation = location.pathname

    return (
        <div className="bg-primaryColor w-1/4 bg-[url('./illustrations/sidebar.svg')] fixed top-0 left-0">
            <ul className='flex flex-col pt-20 h-screen relative'>
                <div className='flex flex-col gap-4  w-3/4'>
                    {sidebarItems.map((item) => (
                        <li
                            key={item.path}
                            className={`text-white pl-20 py-3 cursor-pointer ${currentLocation === item.path
                                ? 'bg-secondaryColor rounded-r-[32.5px]'
                                : ''
                                }`}
                            onClick={() => navigate(item.path)}
                        >
                            {item.label}
                        </li>
                    ))}
                </div>
                <li className='text-white cursor-pointer absolute bottom-20 left-20' onClick={() => navigate("/")}>
                    Cerrar sesión
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
