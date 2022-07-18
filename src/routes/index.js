import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Main from "../pages/Main";


// 라우트명은 kebab-case 로 작성합니다

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main/>}/>
        </Routes>
    </BrowserRouter>
);

export default Router;