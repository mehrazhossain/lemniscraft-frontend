"use client";
import type { MenuProps } from "antd";
import { UserOutlined, TableOutlined } from "@ant-design/icons";
import { USER_ROLE } from "./role";
import { useRouter } from "next/navigation";

export const sidebarItems = (role: string) => {
  const router = useRouter();

  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: "Profile",
      key: "profile",
      icon: <UserOutlined />,
      children: [
        {
          label: "Account Profile",
          key: "/profile",
          onClick: () => router.push("/profile"),
        },
      ],
    },
  ];

  const commonAdminSidebarItems: MenuProps["items"] = [
    {
      label: "Manage Users",
      icon: <TableOutlined />,
      key: "/manage-user",
      onClick: () =>
        router.push(
          `/${role === USER_ROLE.SUPER_ADMIN ? "superAdmin" : role}/manage-user`
        ),
    },
  ];

  const adminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    ...commonAdminSidebarItems,
    {
      label: "Manage Services",
      key: "manage-services",
      icon: <TableOutlined />,
      children: [],
    },
  ];

  const superAdminSidebarItems: MenuProps["items"] = [
    ...adminSidebarItems,
    {
      label: "Manage Admin",
      key: "/manage-admin",
      icon: <TableOutlined />,
      onClick: () =>
        router.push(
          `/${
            role === USER_ROLE.SUPER_ADMIN ? "super_admin" : role
          }/manage-admin`
        ),
    },
  ];

  if (role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems;
  else if (role === USER_ROLE.ADMIN) return adminSidebarItems;
  else if (role === USER_ROLE.USER) return defaultSidebarItems;
};
