// 对 antd 中的 menu 进行一层包装，并且实现权限验证
import { Menu, Icon } from 'antd';
import Link from 'umi/link';
import { connect } from 'dva';

const LvMenu = ({ menus, user, match }) => {
  // 处理左侧菜单是否可以看见
  const newMenus = menus;
  // const newMenus = menus.filter(menu => {
  //   // if (!menu.role) {
  //   //   // 说明不需要任何权限
  //   //   return true;
  //   // } else {
  //   //   return user.roles.includes(menu.role);
  //   // }
  //   return user.roles.includes(menu.role) || !menu.role;
  // });

  // 计算当前需要高亮的 Menu.Item 与需要默认展开的 Menu.SubMenu
  const path = match.path;
  const AllMenuItems = [];
  menus.forEach(item => {
    if (item.children) {
      AllMenuItems.push(...item.children);
    } else {
      AllMenuItems.push(item);
    }
  });
  const curMenuItem = AllMenuItems.find(item => item.href === path);
  let selectedKeys = [`${curMenuItem.id}`];
  let openKeys = [`${curMenuItem.id.split('-')[0]}`];

  return (
    <Menu theme="dark" mode="inline" defaultOpenKeys={openKeys} defaultSelectedKeys={selectedKeys}>
      {newMenus.map(item => {
        // 判断当前循环的item是否是一个subMenu
        if (item.children) {
          return (
            <Menu.SubMenu
              key={item.id}
              title={
                <span>
                  <Icon type={item.icon} />
                  <span>{item.name}</span>
                </span>
              }
            >
              {item.children.map(item => {
                return (
                  <Menu.Item key={item.id}>
                    <Link to={item.href}>
                      <Icon type={item.icon} />
                      <span>{item.name}</span>
                    </Link>
                  </Menu.Item>
                );
              })}
            </Menu.SubMenu>
          );
        } else {
          return (
            <Menu.Item key={item.id}>
              <Link to={item.href}>
                <Icon type={item.icon} />
                <span>{item.name}</span>
              </Link>
            </Menu.Item>
          );
        }
      })}
    </Menu>
  );
};

export default connect(
  ({ global }) => ({
    menus: global.menus,
    user: global.user,
  }),
  null,
)(LvMenu);
