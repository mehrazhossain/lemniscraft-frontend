"use client";
import { Col, Row, Button } from "antd";
import signupImg from "../../assets/signup.png";
import Image from "next/image";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useUserSignupMutation } from "@/redux/api/authApi";
import { storeUserInfo } from "@/services/auth.service";
import { message } from "antd";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema } from "@/schemas/user";
import Link from "next/link";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  contactNo: string;
  address: string;
  profileImg: string;
};

const SignupPage = () => {
  const [userSignup] = useUserSignupMutation();
  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      const res = await userSignup({ ...data }).unwrap();
      console.log(res.statusCode);

      if (res?.statusCode === 200) {
        router.push("/login");
      }

      message.success("User Created Successfully!");

      storeUserInfo({ accessToken: res?.token });
    } catch (error) {
      console.log(error);
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
        <Image src={signupImg} width={500} alt="login image" />
      </Col>
      <Col sm={12} md={8} lg={8}>
        <h1 style={{ margin: "15px 0px" }} className="text-3xl">
          Create a New Account
        </h1>
        <p style={{ margin: "15px 0px" }} className="text-xl">
          <span className="text-gray-800">Already have an account?</span>{" "}
          <Link href="/login" className="text-[#92E3A9]">
            Login
          </Link>
        </p>
        <div>
          <Form submitHandler={onSubmit} resolver={yupResolver(userSchema)}>
            <div>
              <FormInput
                name="firstName"
                type="text"
                size="large"
                label="First Name"
                required
              />
            </div>
            <div style={{ margin: "15px 0px" }}>
              <FormInput
                name="lastName"
                type="text"
                size="large"
                label="Last Name"
                required
              />
            </div>
            <div>
              <FormInput
                name="email"
                type="text"
                size="large"
                label="Email Address"
                required
              />
            </div>
            <div style={{ margin: "15px 0px" }}>
              <FormInput
                name="password"
                type="password"
                size="large"
                label="Password"
                required
              />
            </div>
            <div style={{ margin: "15px 0px" }}>
              <FormInput
                name="contactNo"
                type="text"
                size="large"
                label="Contact Number"
                required
              />
            </div>
            <div style={{ margin: "15px 0px" }}>
              <FormInput
                name="address"
                type="text"
                size="large"
                label="Address"
                required
              />
            </div>
            <div style={{ margin: "15px 0px" }}>
              <FormInput
                name="profileImg"
                type="text"
                size="large"
                label="Profile URL"
              />
            </div>
            <Button
              type="primary"
              htmlType="submit"
              style={{ color: "black", background: "#92E3A9" }}
            >
              SIGN UP
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default SignupPage;
