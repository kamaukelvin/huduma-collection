import React, { useState } from "react";
import Search from "./Search";
import {Modal, Form, Button, Select} from 'antd'

const SearchWrapper = () => {
  const [keyword, setKeyword] = useState(null);
  const [modalVisible,setModalVisible] = useState(false)
  const { Option } = Select;

  const columns = [
    {
      title: "Bio Data",
      dataIndex: "name",
    },
    {
      title: "",
      dataIndex: "description",
    },
    {
      title: "",

      render: (text, record) => (
          <div>
{text.name==="Current delivery address" && <button
            onClick={() => setModalVisible(true)}
            className="w-100 btn btn-sm btn-danger"
          >
            {"Edit"}
          </button>}
          </div>

      )
         
          
     
      
    },
  ];

  //   data from api
  const data = [
    {
      key: "1",
      name: "Full Name",
      description: "John Smith",
    },

    {
      key: "2",
      name: "National Id Number",
      description: "123456789",
    },
    {
      key: "3",
      name: "Telephone Number",
      description: "0720 333 444",
    },
    {
      key: "4",
      name: "Gender",
      description: "Male",
    },
    {
      key: "5",
      name: "Current delivery address",
      description: "MWS-MSA Kisauni",
    },
  ];

  //   Search function here
  const onSearch = (value) => setKeyword(value);

//   submit form
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div>
            <Modal
          title="Update Address"
          centered
          visible={modalVisible}
          okButtonProps={{
            children: "Custom OK"
          }}
          onOk={() => setModalVisible(false)}
          onCancel={() => setModalVisible(false)}
          okText="Update Address" 
          cancelType="danger"
          
          
        >

<Form
      name=""
      className="login-form"
      layout="vertical"
      onFinish={onFinish}
    >
      <Form.Item
        name="Sub-County"
        label="Sub-County"
      >
          <Select defaultValue="" >
      <Option value="">Select Sub-County</Option>
      <Option value="nairobi">Nairobi</Option>
    </Select>
      </Form.Item>
      <Form.Item
        name="collectionPoint"
        label="Collection Point"
      >
          <Select defaultValue="" >
      <Option value="">Select Collection Point</Option>
      <Option value="nairobi">Nairobi</Option>
    </Select>
      </Form.Item>
      <Form.Item
        name="County"
        label="County"
      >
          <Select defaultValue="" >
      <Option value="">Select County</Option>
      <Option value="nairobi">Nairobi</Option>
    </Select>
      </Form.Item>
  

     
    </Form>
         
        </Modal>
      <Search
        columns={columns}
        data={data}
        onSearch={onSearch}
        keyword={keyword}
      />
    </div>
  );
};

export default SearchWrapper;
