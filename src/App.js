import { Fragment, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { publicRoutes } from './routes';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes &&
                        publicRoutes.length > 0 &&
                        publicRoutes.map((route, index) => {
                            let Layout = route.layout ? route.layout : Fragment;
                            let Page = route.component;

                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Suspense>
                                                <Page />
                                            </Suspense>
                                        </Layout>
                                    }
                                />
                            );
                        })}
                </Routes>
            </div>
        </Router>
    );
};

export default App;
