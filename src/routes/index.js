import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './../pages/Landing/index';
import Main from '../pages/Main';
import ScentTest from 'pages/ScentTest';
import TestResult from 'pages/TestResult';
import Login from 'pages/Login';
import SignUp from 'pages/SignUp';

// 라우트명은 kebab-case 로 작성합니다

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Main />} />
      <Route path="/home/scent-test" element={<ScentTest />} />
      <Route path="/home/scent-test/result/:color" element={<TestResult />} />
      <Route path="/home/log-in" element={<Login />} />
      <Route path="/home/signup" element={<SignUp />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
