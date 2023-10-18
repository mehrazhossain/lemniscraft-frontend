"use client";
import { useState } from "react";
import { Layout, Menu } from "antd";
import { sidebarItems } from "@/constants/sidebarItems";
import { USER_ROLE } from "@/constants/role";
import Image from "next/image";
import { getUserInfo } from "@/services/auth.service";

const Sidebar = () => {
  const { Sider } = Layout;
  const [collapsed, setCollapsed] = useState(false);

  // const role = USER_ROLE.SUPER_ADMIN;
  const { role } = getUserInfo() as any;

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={280}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "sticky",
        left: 0,
        top: 0,
        bottom: 0,
        background: "white",
      }}
    >
      <Menu
        theme="light"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={sidebarItems(role)}
      />
    </Sider>
  );
};

export default Sidebar;
