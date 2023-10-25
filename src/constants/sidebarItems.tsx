"use client";
import type { MenuProps } from "antd";
import { UserOutlined, TableOutlined } from "@ant-design/icons";
import { USER_ROLE } from "./role";
import { useRouter } from "next/navigation";

// eslint-disable-next-line react-hooks/rules-of-hooks
export const SidebarItems = (role: string) => {
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

  const adminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: "Service Management",
      key: "/service-management",
      icon: <TableOutlined />,
      onClick: () =>
        router.push(`/${role === USER_ROLE.ADMIN ? "admin" : role}/service`),
    },
  ];

  const superAdminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: "User Management",
      key: "/user-management",
      icon: <TableOutlined />,
      onClick: () =>
        router.push(
          `/${
            role === USER_ROLE.SUPER_ADMIN ? "super_admin" : role
          }/manage-user`
        ),
    },
    {
      label: "Service Management",
      key: "/service-management",
      icon: <TableOutlined />,
      onClick: () =>
        router.push(
          `/${role === USER_ROLE.SUPER_ADMIN ? "super_admin" : role}/service`
        ),
    },
  ];

  if (role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems;
  else if (role === USER_ROLE.ADMIN) return adminSidebarItems;
  else if (role === USER_ROLE.USER) return defaultSidebarItems;
};
