/*
 * SagaDemoPage
 *
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Form, Input, Button } from 'antd';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { changeUsername, loadRepos } from './actions';
import reducer from './reducer';
import saga from './saga';

const key = 'zzdemosaga';

export function SagaDemoPage({
  username,
  loading,
  error,
  repos,
  onSubmitForm,
  onChangeUsername,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    if (username && username.trim().length > 0) onSubmitForm();
  }, []);

  const getVRepos = ({ loading, error, repos }) => {
    if (loading) {
      return <div>loading...</div>;
    }

    if (error !== false) {
      return <div>Something went wrong, please try again!</div>;
    }

    if (repos !== false) {
      return (
        <div>
          {repos.map((item, i) => (
            <p key={item.full_name}>{item.full_name}</p>
          ))}
        </div>
      );
    }

    return null;
  };
  const vRepos = getVRepos({ loading, error, repos });

  const onFinish = values => {
    console.log('Success:', values);
    onSubmitForm();
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="">
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input onChange={onChangeUsername} />
        </Form.Item>
        {vRepos}
      </Form>
    </div>
  );
}

SagaDemoPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};
const mapStateToProps = state => ({
  repos: state?.zzdemosaga?.userData?.repositories || [],
  username: state?.zzdemosaga?.username,
  loading: state?.zzdemosaga?.loading,
  error: state?.zzdemosaga?.error,
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(SagaDemoPage);
