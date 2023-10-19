"use client";
import ReusableBreadcrumb from "@/components/ui/ReusableBreadcrumb";
import { getUserInfo } from "@/services/auth.service";

const page = () => {
  const { role } = getUserInfo() as any;

  return (
    <div>
      <ReusableBreadcrumb
        items={[
          {
            label: `${role}`,
            link: `/${role}`,
          },
          {
            label: `manage-user`,
            link: `/${role}/manage-user`,
          },
        ]}
      />
      <h1 className="text-3xl">hello from user</h1>
    </div>
  );
};

export default page;
