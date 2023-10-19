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
import { useServicesQuery } from "@/redux/api/serviceApi";

const ManageServicePage = () => {
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

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

  const { data: responseData, isLoading } = useServicesQuery({ ...query });

  const servicesData = responseData?.users?.data;

  const [deleteUser] = useDeleteUserMutation();

  const columns = [
    {
      title: "Service Title",
      dataIndex: "title",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Status",
      dataIndex: "availability",
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
              onClick={() => deleteHandler(data?.id)}
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
    setPage(page);
    setSize(pageSize);
  };

  const deleteHandler = async (id: string) => {
    message.loading("Deleting...");
    try {
      await deleteUser(id);
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
    <div className="mt-5">
      <ActionBar title="Service Management">
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
          <Link href="service/create">
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
        dataSource={servicesData?.data}
        pageSize={size}
        totalPages={servicesData?.meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
    </div>
  );
};

export default ManageServicePage;
