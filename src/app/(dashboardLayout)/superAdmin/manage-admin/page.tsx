import ActionBar from "@/components/ui/ActionBar";
import { Button, Input } from "antd";
import Link from "next/link";

const ManageAdminPage = () => {
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
    </div>
  );
};

export default ManageAdminPage;
