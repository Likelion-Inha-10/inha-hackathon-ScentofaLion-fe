import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import NotMobile from 'pages/NotMobile';
import Landing from './../pages/Landing/index';
import Main from '../pages/Main';
import OtherColor from 'pages/OtherColor';
import ColorDetail from 'pages/ColorDetail';
import ScentTest from 'pages/ScentTest';
import TestResult from 'pages/TestResult';
import Login from 'pages/Login';
import SignUp from 'pages/SignUp';
import ProductDetail from 'pages/ProductDetail';
import LastWeek from 'pages/LastWeek';
import LastMain from 'pages/LastMain';
import NextWeek from 'pages/NextWeek';
import NextMain from 'pages/NextMain';
import LoginWarning from '../pages/LoginWarning';
import MyPage from './../pages/MyPage/index';
import Subscribe from 'pages/Subscribe';
import SubscribeDone from '../pages/SubscribeDone/index';
import SelectColor from 'pages/SelectColor';
import SelectProduct from 'pages/SelectProduct/index';
import ReviewLoading from '../pages/ReviewLoading';
import Review from '../pages/Review';

// 라우트명은 kebab-case 로 작성합니다

const Router = () => (
  <BrowserRouter>
    <NotMobile />
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home/:userid" element={<Main />} />
        <Route path="/home/log-in" element={<Login />} />
        <Route path="/home/sign-up" element={<SignUp />} />
        <Route
          path="/home/:userid/other-color/except/:color"
          element={<OtherColor />}
        />
        <Route
          path="/home/:userid/color-detail/:color"
          element={<ColorDetail />}
        />
        <Route path="/home/:userid/scent-test" element={<ScentTest />} />
        <Route
          path="/home/:userid/scent-test/result/:color"
          element={<TestResult />}
        />
        <Route path="/home/:userid/last-week" element={<LastWeek />} />
        <Route path="/home/:userid/last-main" element={<LastMain />} />
        <Route path="/home/:userid/next-week" element={<NextWeek />} />
        <Route path="/home/:userid/next-main" element={<NextMain />} />
        <Route
          path="/home/:userid/product-detail"
          element={<ProductDetail />}
        />
        <Route path="/home/login-warning" element={<LoginWarning />} />
        <Route path="/home/:userid/my-page" element={<MyPage />} />
        <Route path="/home/:userid/subscribe" element={<Subscribe />} />
        <Route
          path="/home/:userid/subscribe/:subprice"
          element={<SelectColor />}
        />
        <Route
          path="/home/:userid/subscribe/:subprice/:color"
          element={<SelectProduct />}
        />
        <Route
          path="/home/:userid/subscribe/:subprice/:color/done"
          element={<SubscribeDone />}
        />
        <Route path="/home/:userid/review" element={<Review />} />
        <Route
          path="/home/:userid/review-loading"
          element={<ReviewLoading />}
        />
      </Routes>
    </AnimatePresence>
  </BrowserRouter>
);

export default Router;
