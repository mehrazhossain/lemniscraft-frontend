import { useUsersQuery } from "@/redux/api/userApi";

const AdminPage = () => {
  const { data, isLoading } = useUsersQuery({ limit: 100, page: 1 });

  return <div>this is admin route</div>;
};

export default AdminPage;
