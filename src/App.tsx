// Libs
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
// Components, Layouts, Pages
import { FreeLayout, HeaderLayout, MainLayout } from './layouts';
// Others
import {
  privateSuperAdminRoutes,
  privateUserRoutes,
  publicRoutes,
  superAdminRoute,
  userRoute,
} from './utils/constants/route';
// Styles, images, icons

type Props = {};

const App = (props: Props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={userRoute.base} element={<Navigate to={userRoute.login} />}></Route>
        <Route
          path={superAdminRoute.base}
          element={<Navigate to={`${superAdminRoute.base}${superAdminRoute.login}`} />}
        ></Route>

        <Route element={<FreeLayout />}>
          {publicRoutes.map((route, index) => {
            const Page = route.component || '';
            return (
              <Route key={index} path={route.path} element={<Page />}>
                {route.children &&
                  route.children.length > 0 &&
                  route.children.map((childRoute, index) => {
                    const ChildComponent = childRoute.component;
                    return (
                      <Route
                        key={index}
                        path={childRoute.path}
                        index={childRoute.index ?? false}
                        element={<ChildComponent />}
                      />
                    );
                  })}
              </Route>
            );
          })}
        </Route>

        <Route path={userRoute.base} element={<HeaderLayout />}>
          {privateUserRoutes.map((route, index) => {
            const Page = route.component || '';
            return (
              <Route key={index} path={route.path} element={<Page />}>
                {route.children &&
                  route.children.length > 0 &&
                  route.children.map((childRoute, index) => {
                    const ChildComponent = childRoute.component;
                    return (
                      <Route
                        key={index}
                        path={childRoute.path}
                        index={childRoute.index ?? false}
                        element={<ChildComponent />}
                      />
                    );
                  })}
              </Route>
            );
          })}
        </Route>

        <Route path={superAdminRoute.base} element={<MainLayout />}>
          {privateSuperAdminRoutes.map((route, index) => {
            const Page = route.component || '';
            return (
              <Route key={index} path={route.path} element={<Page />}>
                {route.children &&
                  route.children.length > 0 &&
                  route.children.map((childRoute, index) => {
                    const ChildComponent = childRoute.component;
                    if (childRoute.index) {
                      return (
                        <Route
                          key={index}
                          index={childRoute.index ?? false}
                          element={<ChildComponent />}
                        />
                      );
                    }

                    return (
                      <Route
                        key={index}
                        path={childRoute.path}
                        index={childRoute.index ?? false}
                        element={<ChildComponent />}
                      />
                    );
                  })}
              </Route>
            );
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
