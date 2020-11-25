import { Steps } from "antd";
import { useContext } from "react";
import { Context } from "context/Context";
import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import {
  PhoneOutlined,
  SafetyCertificateOutlined,
  PushpinOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";
import VerifyPhone from "./verifyPhone/VerifyPhoneWrapper";
import Otp from "./otp/OtpWrapper";
import CaptureDetails from "./captureDetails/CaptureDetailsWrapper";
import Pickup from "./pickUp/PickupDetailsWrapper";

const steps = [
  {
    title: "Contact",
    content: <VerifyPhone />,
    icon: <PhoneOutlined />,
  },
  {
    title: "Verfication",
    content: <Otp />,
    icon: <SafetyCertificateOutlined />,
  },
  {
    title: "Details",
    content: <CaptureDetails />,
    icon: <FileDoneOutlined />,
  },
  {
    title: "Pickup Address ",
    content: <Pickup />,
    icon: <PushpinOutlined />,
  },
];

const Stepper = () => {
  const { current,setCurrent } = useContext(Context);
  const { Step } = Steps;
 

  const onChange = (current) => {
    console.log("onChange:", current);
    setCurrent(current);
  };

  return (
      <>
    <div className="container">
      <Header />
      <div className="card col-md-8 offset-md-2">
        <div className="card-body">
          <Steps current={current} onChange={onChange}>
            {steps.map((item) => (
              <Step key={item.title} title={item.title} icon={item.icon} />
            ))}
          </Steps>
          <div className="steps-content">{steps[current].content}</div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Stepper;
