"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import ActionBar from "@/components/ui/ActionBar";
import { roleOptions } from "@/constants/global";
import { useUpdateUserMutation, useUserQuery } from "@/redux/api/userApi";
import { UpdateUserSchema } from "@/schemas/admin";
import { IUser } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row, message } from "antd";

type IDProps = {
  params: any;
};

const EditPage = ({ params }: IDProps) => {
  const { id } = params;

  const { data: userData } = useUserQuery(id);
  const [updateUser] = useUpdateUserMutation();

  const onSubmit = async (values: any) => {
    message.loading("Updating...");
    console.log({ body: values });

    try {
      await updateUser({ id, body: values });
      message.success("User Updated Successfully!");
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const defaultValues = {
    firstName: userData?.data?.firstName || "",
    lastName: userData?.data?.lastName || "",
    email: userData?.data?.email || "",
    role: userData?.data?.role || "",
    profileImg: userData?.data?.profileImg || "",
    contactNo: userData?.data?.contactNo || "",
    address: userData?.data?.address || "",
  };

  return (
    <div>
      <ActionBar title="Update User Information"></ActionBar>
      <Form
        submitHandler={onSubmit}
        defaultValues={defaultValues}
        resolver={yupResolver(UpdateUserSchema)}
      >
        <div
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
            padding: "15px",
            marginBottom: "10px",
          }}
        >
          <p
            style={{
              fontSize: "18px",
              marginBottom: "10px",
            }}
          >
            Basic Information
          </p>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col
              className="gutter-row"
              span={8}
              style={{
                marginBottom: "10px",
              }}
            >
              <FormInput
                type="text"
                name="firstName"
                size="large"
                label="First Name"
              />
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{
                marginBottom: "10px",
              }}
            >
              <FormInput
                type="text"
                name="lastName"
                size="large"
                label="Last Name"
              />
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{
                marginBottom: "10px",
              }}
            >
              <FormInput type="text" name="email" size="large" label="Email" />
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{
                marginBottom: "10px",
              }}
            >
              <FormSelectField
                size="large"
                name="role"
                options={roleOptions}
                label="Role"
                placeholder="Select"
              />
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{
                marginBottom: "10px",
              }}
            >
              <FormInput
                type="text"
                name="profileImg"
                size="large"
                label="Profile URL"
              />
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{
                marginBottom: "10px",
              }}
            ></Col>
          </Row>
        </div>

        {/* additional info */}
        <div
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
            padding: "15px",
            marginBottom: "10px",
          }}
        >
          <p
            style={{
              fontSize: "18px",
              marginBottom: "10px",
            }}
          >
            Contact Information
          </p>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col
              className="gutter-row"
              span={8}
              style={{
                marginBottom: "10px",
              }}
            >
              <FormInput
                type="text"
                name="contactNo"
                size="large"
                label="Contact Number"
              />
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{
                marginBottom: "10px",
              }}
            >
              <FormInput
                type="text"
                name="address"
                size="large"
                label="Address"
              />
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{
                marginBottom: "10px",
              }}
            ></Col>
          </Row>
        </div>
        <Button style={{ color: "#000" }} htmlType="submit" type="primary">
          Update
        </Button>
      </Form>
    </div>
  );
};

export default EditPage;
