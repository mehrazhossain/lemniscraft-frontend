"use client";
import ActionBar from "@/components/ui/ActionBar";
import ReusableTable from "@/components/ui/ReusableTable";
import { useDeleteUserMutation, useUsersQuery } from "@/redux/api/userApi";
import { Button, Input, message } from "antd";
import Link from "next/link";
import { useState } from "react";
import { DeleteFilled, EditFilled, ReloadOutlined } from "@ant-design/icons";
import { useDebounced } from "@/redux/hooks";
import dayjs from "dayjs";
import ReusableModal from "@/components/ui/ReusableModal";

const ManageAdminPage = () => {
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [adminId, setAdminId] = useState<string>("")

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  // query["searchTerm"] = searchTerm;

  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedTerm) {
    query["searchTerm"] = debouncedTerm;
  }

  const { data: responseData, isLoading } = useUsersQuery({ ...query });
  const [deleteUser] = useDeleteUserMutation();

  const usersData = responseData?.users?.data;

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
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
      sorter: true,
    },
    {
      title: "Action",
      render: function (data: any) {
        return (
          <>
            <Link href={`/super_admin/manage-admin/edit/${data?.id}`}>
              <Button
                style={{ margin: "0px 5px" }}
                onClick={() => console.log()}
                type="primary"
              >
                <EditFilled />
              </Button>
            </Link>
            <Button
              onClick={() => {
                setOpen(true);
                setAdminId(data?.id)
              }}
              type="primary"
              danger
            >
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

  const deleteAdminHandler = async (id: string) => {
    try {
      await deleteUser(id);
      setOpen(false)
      message.loading("Deleting...");
      message.success("User Deleted Successfully!");
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    // console.log(order, field);
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  const resetFilters = () => {
    setSortBy("");
    setSortOrder("");
    setSearchTerm("");
  };

  return (
    <div>
      <ActionBar title="User Management">
        <Input
          style={{ width: "20%" }}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          type="text"
          size="large"
          placeholder="Search"
        />

        <div>
          <Link href="manage-admin/create">
            <Button style={{ color: "#000" }} type="primary">
              Create
            </Button>
          </Link>
          {(!!sortBy || !!sortOrder || !!searchTerm) && (
            <Button
              onClick={resetFilters}
              style={{ margin: "0px 10px" }}
              type="primary"
            >
              <ReloadOutlined />
            </Button>
          )}
        </div>
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
      <ReusableModal
      title="Remove admin"
      isOpen={open}
      closeModal={()=>setOpen(false)}
      handleOk={()=>deleteAdminHandler(adminId)}
      >
        <p className="my-5">Do you want to remove this admin?</p>
      </ReusableModal>
    </div>
  );
};

export default ManageAdminPage;
