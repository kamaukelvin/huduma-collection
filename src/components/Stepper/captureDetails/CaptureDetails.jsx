import React, { useContext } from "react";
import DatePicker from "react-datepicker";
import { Context } from "context/Context";

const CaptureDetails = ({ startDate, setStartDate }) => {
  const { next } = useContext(Context);

  return (
    <form id="form ">
      <div className="card-body">
        <h6 className="py-3">Capture Details</h6>

        <div className="form-group">
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="example@email.com"
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstName" className="label">
            First name as in the ID
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            placeholder=""
          />
        </div>
        <div className="form-group">
          <label htmlFor="id_number" className="label">
            National ID Number
          </label>
          <input
            type="text"
            className="form-control"
            id="id_number"
            placeholder="1234567"
          />
        </div>
        <div className="form-group mb-5">
          <label htmlFor="yob" className="d-block label">
            Year of birth
          </label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            style={{ width: "100%" }}
          />
        </div>
        <button
          type="submit"
          onClick={() => next()}
          className="w-100 btn btn-danger"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default CaptureDetails;
