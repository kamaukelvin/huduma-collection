import React, {useState} from "react";
import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import { Input, Table, Select } from "antd";
import Seo from "assets/images/seo.png";
import { FaSistrix } from 'react-icons/fa'

const Search = ({ columns, data, onSearch, keyword }) => {
  const { Search } = Input;
  const { Option } = Select;



  return (
    <div className="content">
      <div className="container">
        <Header />
        <div className="card col-md-8 offset-md-2 p-xs-0 p-sm-4">
          <div className="card-body">
            <h5 className="text-muted text-center pb-3">
              National Id/ Document Serial Number
            </h5>
 
          

      <Input.Group compact>
      <Select size="large" defaultValue="id_number">
        <Option value="id_number">National Id</Option>
        <Option value="serial">Serial No.</Option>
      </Select>
      <Search
              placeholder="input search keyword"
              enterButton
              size="large"
              onSearch={onSearch}
              style={{width:"80%"}}
 />
    </Input.Group>
      
            {keyword === null ? (
              <div>
                <div className="d-flex flex-wrap justify-content-center mt-5">
                  <img src={Seo} alt="icon" />
                </div>

                <p className="text-center text-blue pt-3">
                  Search by the National ID or Document Serial No.
                </p>
              </div>
            ) : (
              <Table
                columns={columns}
                dataSource={data}
                className="mt-5"
                // bordered
                pagination={false}
              />
            )}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Search;
