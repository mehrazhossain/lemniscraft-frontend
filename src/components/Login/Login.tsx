"use client";
import { Col, Row, Button, message } from "antd";
import loginImg from "../../assets/login.png";
import Image from "next/image";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { SubmitHandler } from "react-hook-form";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { useRouter } from "next/navigation";
import { storeUserInfo } from "@/services/auth.service";

type FormValues = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const [userLogin] = useUserLoginMutation();

  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    message.loading("Signing...");
    try {
      const res = await userLogin({ ...data }).unwrap();
      if (res?.token) {
        router.push("/");
        message.success("LoggedIn successfully!");
      }
      storeUserInfo({ accessToken: res?.token });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{
        minHeight: "80vh",
      }}
    >
      <Col sm={12} md={16} lg={12}>
        <Image src={loginImg} width={500} alt="login image" />
      </Col>
      <Col sm={12} md={8} lg={8}>
        <h1 style={{ margin: "15px 0px" }} className="text-3xl">
          Login Your Account
        </h1>
        <div>
          <Form submitHandler={onSubmit}>
            <div>
              <FormInput
                name="email"
                type="text"
                size="large"
                label="Email Address"
              />
            </div>
            <div style={{ margin: "15px 0px" }}>
              <FormInput
                name="password"
                type="password"
                size="large"
                label="Password"
              />
            </div>
            <Button type="primary" htmlType="submit" style={{ color: "black" }}>
              LOGIN
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default LoginPage;
