/*
 * Demo
 *
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import App from 'zzdemos/pages/App';
import { loadServerData } from './actions';
import reducer from './reducer';
import saga from './saga';

const key = 'zzdemoapp';

export function Demo({ loading, error, serverData, getServerData }) {
  console.log('Demo------------------------Demo');
  console.log('loading, error, serverData', loading, error, serverData);

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    /**
     * 在这里做一些初始化操作，这些操作可能有副作用，
     * 所以使用 useEffect saga 等来处理，并将结果
     * 放到session或者redux中；
     * */
    getServerData();
  }, []);

  return <App />;
}
Demo.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  serverData: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  getServerData: PropTypes.func,
};
const mapStateToProps = state => ({
  serverData: state?.zzdemoapp?.serverData || {},
  loading: state?.zzdemoapp?.loading,
  error: state?.zzdemoapp?.error,
});

export function mapDispatchToProps(dispatch) {
  return {
    getServerData: () => {
      dispatch(loadServerData());
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Demo);
