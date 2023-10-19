"use client";
import ActionBar from "@/components/ui/ActionBar";
import ReusableTable from "@/components/ui/ReusableTable";
import { Button, Input } from "antd";
import Link from "next/link";

const ManageAdminPage = () => {
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    console.log(order, field);
  };

  const onPaginationChange = (page: number, pageSize: number) => {
    console.log("page:", page, "pageSize:", pageSize);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      sorter: (a: any, b: any) => a.age - b.age,
    },
    {
      title: "Action",
      render: function (data: any) {
        return (
          <Button onClick={() => console.log(data)} type="primary" danger>
            X
          </Button>
        );
      },
    },
  ];

  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
    },
    {
      key: "2",
      name: "John",
      age: 42,
    },
  ];

  return (
    <div>
      <ActionBar title="Admin List">
        <div>
          <Link href="manage-admin/create">
            <Button style={{ color: "#000" }} type="primary">
              Admin Create
            </Button>
          </Link>
        </div>
      </ActionBar>

      <ReusableTable
        loading={false}
        columns={columns}
        dataSource={dataSource}
        pageSize={5}
        totalPages={10}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
    </div>
  );
};

export default ManageAdminPage;
