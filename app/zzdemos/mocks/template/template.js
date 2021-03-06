import Mock from 'mockjs';
import configs from 'configs';

Mock.mock(`${configs.rootApi}/template`, 'get', () => {
  const data = Mock.mock({
    code: 0,
    data: [
      {
        full_name: '@CNAME', // 随机生成中文人名
        user_id: 1000234234001,
        username: 'zhangsan',
      },
    ],
    msg: 'success',
  });
  console.log('mockUrl', '/template');
  console.log('mock', data);
  return data;
});
