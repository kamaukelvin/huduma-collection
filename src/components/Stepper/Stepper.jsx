import { Steps } from "antd";
import { useContext } from "react";
import { Context } from "context/Context";
import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import {Link} from 'react-router-dom'
import {
  PhoneOutlined,
  SafetyCertificateOutlined,
  PushpinOutlined,
  FileDoneOutlined,
  DoubleLeftOutlined 
} from "@ant-design/icons";
import VerifyPhone from "./verifyPhone/VerifyPhoneWrapper";
import Otp from "./otp/OtpWrapper";
import CaptureDetails from "./captureDetails/CaptureDetailsWrapper";
import Pickup from "./pickUp/PickupDetailsWrapper";
import Search from 'components/search/SearchWrapper'

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
  const { current,setCurrent, prev } = useContext(Context);
  const { Step } = Steps;
 

  const onChange = (current) => {
    console.log("onChange:", current);
    setCurrent(current);
  };

  return (
    <div>
      <Search/>

    </div>
    //   <div className="content">
    // <div className="container">
    //   <Header />
    //   <div className="card col-md-8 offset-md-2 p-xs-0 p-sm-4">
    //     <div className="card-body">
    //     {current > 0 && <Link className="float-right text-success pb-3" onClick={()=>prev()}><DoubleLeftOutlined /> <span className="pt-2">Back</span></Link>}
    //       <Steps current={current} onChange={onChange}>
    //         {steps.map((item) => (
             
    //           <Step key={item.title} title={item.title} icon={item.icon} />
              
    //         ))}
    //       </Steps>
    //       <div className="steps-content">{steps[current].content}</div>
    //     </div>
    //   </div>
    //   <Footer/>
    //= </div>
  
    // </div>
  );
};

export default Stepper;
