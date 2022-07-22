import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/Main';
import ScentTest from 'pages/ScentTest';

// 라우트명은 kebab-case 로 작성합니다

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/home/scent-test" element={<ScentTest />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
