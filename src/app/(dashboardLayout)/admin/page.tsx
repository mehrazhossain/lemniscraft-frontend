import { useUsersQuery } from "@/redux/api/userApi";

const AdminPage = () => {
  const { data, isLoading } = useUsersQuery({ limit: 100, page: 1 });

  console.log(data);

  return <div>this is admin route</div>;
};

export default AdminPage;
