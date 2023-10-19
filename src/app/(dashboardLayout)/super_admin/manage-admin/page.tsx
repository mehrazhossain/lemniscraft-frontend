"use client";
import ActionBar from "@/components/ui/ActionBar";
import ReusableTable from "@/components/ui/ReusableTable";
import { useUsersQuery } from "@/redux/api/userApi";
import { Button } from "antd";
import Link from "next/link";
import { useState } from "react";
import { DeleteFilled, EditFilled, EyeFilled } from "@ant-design/icons";

const ManageAdminPage = () => {
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  const { data: responseData, isLoading } = useUsersQuery({ ...query });

  const usersData = responseData?.users.data;

  const columns = [
    {
      title: "Name",
      dataIndex: "firstName",
      render: (text: any, record: { firstName: any; lastName: any }) =>
        `${record.firstName} ${record.lastName}`,
    },
    {
      title: "Role",
      dataIndex: "role",
    },
    {
      title: "CreatedAt",
      dataIndex: "createdAt",
      sorter: true,
    },
    {
      title: "Action",
      render: function (data: any) {
        return (
          <>
            <Button onClick={() => console.log(data)} type="primary">
              <EyeFilled />
            </Button>
            <Button
              style={{ margin: "0px 5px" }}
              onClick={() => console.log(data)}
              type="primary"
            >
              <EditFilled />
            </Button>
            <Button onClick={() => console.log(data)} type="primary" danger>
              <DeleteFilled />
            </Button>
          </>
        );
      },
    },
  ];

  const onPaginationChange = (page: number, pageSize: number) => {
    console.log("Page:", page, "PageSize:", pageSize);
    setPage(page);
    setSize(pageSize);
  };
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    // console.log(order, field);
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  return (
    <div>
      <ActionBar title="Admin List">
        <Link href="manage-admin/create">
          <Button style={{ color: "#000" }} type="primary">
            Admin Create
          </Button>
        </Link>
      </ActionBar>

      <ReusableTable
        loading={isLoading}
        columns={columns}
        dataSource={usersData?.data}
        pageSize={size}
        totalPages={usersData?.meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
    </div>
  );
};

export default ManageAdminPage;
