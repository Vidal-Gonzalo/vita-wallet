import { RouteObject, useRoutes } from 'react-router-dom';
import { publicRoutes } from './public';
import { privateRoutes } from './private';
import { Layout } from '../containers';
import { ProtectedRoute } from '../components';

type Route = {
    path: string;
    element: JSX.Element;
};

export function Routes() {
    const parseRouteObjects = (
        routes: Route[],
        isPrivate: boolean = false
    ): RouteObject[] => {
        return routes.map((route) => ({
            path: route.path,
            element: isPrivate ? (
                <ProtectedRoute>{route.element}</ProtectedRoute>
            ) : (
                route.element
            ),
        }));
    };

    const publicRouteObjects = parseRouteObjects(publicRoutes);
    const privateRouteObjects = parseRouteObjects(privateRoutes, true);

    const routes = [
        {
            element: <Layout />,
            children: [...publicRouteObjects],
        },
        {
            element: <Layout />,
            children: [...privateRouteObjects],
        },
    ];

    const allRoutes = useRoutes(routes);

    return <> {allRoutes} </>;
}