"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import { roleOptions, serviceOptions } from "@/constants/global";
import { useCreateServiceMutation } from "@/redux/api/serviceApi";
import { adminSchema } from "@/schemas/admin";
import { createServiceSchema } from "@/schemas/service";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";

const CreateServicePage = () => {
  const [createService] = useCreateServiceMutation();
  const router = useRouter();

  const onSubmit = async (values: any) => {
    message.loading("Creating...");
    try {
      const res = await createService({ ...values }).unwrap();
      if (res?.statusCode === 200) {
        router.push("/super_admin/service");
        message.success("Service created successfully!");
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <div className="ml-5 mt-5">
      <div>
        <Form
          submitHandler={onSubmit}
          resolver={yupResolver(createServiceSchema)}
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
              Service Information
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
                  name="title"
                  size="large"
                  label="Service Title"
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
                  name="description"
                  size="large"
                  label="Service Description"
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
                  name="image"
                  size="large"
                  label="Service Banner URL"
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
                  type="number"
                  name="price"
                  size="large"
                  label="Service Price"
                />
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
                  name="availability"
                  options={serviceOptions}
                  label="Availability Status"
                  placeholder="Select"
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
            Create
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CreateServicePage;
