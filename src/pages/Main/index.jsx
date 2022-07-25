import { connect } from 'react-redux';

const Main = (state) => <>{state.value}</>;

const mapStateToProps = (state) => {
  console.log(state.counter.step);
  return {
    value: state.counter.step,
  };
};

export default connect(mapStateToProps)(Main);
