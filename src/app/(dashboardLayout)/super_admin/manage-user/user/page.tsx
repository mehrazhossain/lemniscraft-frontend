import { useUsersQuery } from "@/redux/api/userApi";

const ManageUserPage = () => {
  const { data, isLoading } = useUsersQuery(undefined);

  return (
    <div>
      <h1 className="text-3xl">Get Users Page</h1>
    </div>
  );
};

export default ManageUserPage;
