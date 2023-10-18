import type { MenuProps } from "antd";
import { UserOutlined, ProfileOutlined } from "@ant-design/icons";
import Link from "next/link";

export const sidebarItems = (role: string) => {
  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: "Profile",
      key: "profile",
      icon: <ProfileOutlined />,
      children: [
        {
          label: <Link href={`/${role}/profile`}>My Profile</Link>,
          key: `/${role}/profile`,
        },
      ],
    },
  ];

  const adminSidebarItems: MenuProps["items"] = [
    {
      label: "Profile",
      key: "profile",
      icon: <ProfileOutlined />,
      children: [
        {
          label: <Link href={`/profile`}>My Profile</Link>,
          key: `/${role}/profile`,
        },
      ],
    },
    {
      label: "Manage Users",
      key: "manage-user",
      icon: <UserOutlined />,
      children: [
        {
          label: <Link href={`${role}/manage-user`}>Users</Link>,
          key: `/manage-user`,
        },
      ],
    },
  ];

  const superAdminSidebarItems: MenuProps["items"] = [
    {
      label: "Profile",
      key: "profile",
      icon: <ProfileOutlined />,
      children: [
        {
          label: <Link href={`/profile`}>My Account</Link>,
          key: `/profile`,
        },
      ],
    },
  ];

  if (role === "user") return defaultSidebarItems;
  else if (role === "admin") return adminSidebarItems;
  else if (role === "superAdmin") return superAdminSidebarItems;
};
