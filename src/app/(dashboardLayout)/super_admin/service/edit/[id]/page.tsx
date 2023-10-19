"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import ActionBar from "@/components/ui/ActionBar";
import { serviceOptions } from "@/constants/global";
import {
  useServiceQuery,
  useUpdateServiceMutation,
} from "@/redux/api/serviceApi";
import { UpdateUserSchema } from "@/schemas/admin";
import { updateServiceSchema } from "@/schemas/service";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row, message } from "antd";

type IDProps = {
  params: any;
};

const ServiceEditPage = ({ params }: IDProps) => {
  const { id } = params;

  const { data: serviceData } = useServiceQuery(id);
  const [updateService] = useUpdateServiceMutation();

  const onSubmit = async (values: any) => {
    message.loading("Updating...");
    try {
      const res = await updateService({ id, body: values });
      console.log(res);

      message.success("Service Updated Successfully!");
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const defaultValues = {
    title: serviceData?.data?.title || "",
    description: serviceData?.data?.description || "",
    image: serviceData?.data?.image || "",
    price: serviceData?.data?.price || "",
    availability: serviceData?.data?.availability || "",
  };

  return (
    <div>
      <ActionBar title="Service Information"></ActionBar>
      <Form
        submitHandler={onSubmit}
        defaultValues={defaultValues}
        resolver={yupResolver(updateServiceSchema)}
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
          Update
        </Button>
      </Form>
    </div>
  );
};

export default ServiceEditPage;
