import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Landing from './../pages/Landing/index';
import Main from '../pages/Main';
import OtherColor from 'pages/OtherColor';
import ColorDetail from 'pages/ColorDetail';
import ScentTest from 'pages/ScentTest';
import TestResult from 'pages/TestResult';

// 라우트명은 kebab-case 로 작성합니다

const Router = () => (
  <BrowserRouter>
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Main />} />
        <Route
          path="/home/other-color/except/:color"
          element={<OtherColor />}
        />
        <Route path="/home/color-detail/:color" element={<ColorDetail />} />
        <Route path="/home/scent-test" element={<ScentTest />} />
        <Route path="/home/scent-test/result/:color" element={<TestResult />} />
      </Routes>
    </AnimatePresence>
  </BrowserRouter>
);

export default Router;
