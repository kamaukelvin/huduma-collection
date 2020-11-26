import React, { useContext } from "react";
import { Context } from "context/Context";

const Otp = () => {
  const { next } = useContext(Context);

  return (
    <form id="form" >
      <div className="card-body">
        <h6 className="py-3">Verify you phone number</h6>

        <small>
          A one time password has been sent to your number ending with ***453
        </small>
        <div className="form-group mt-3 mb-5">
          <label htmlFor="otp" className="label">
            One Time Password
          </label>
          <input
            type="text"
            className="form-control"
            id="otp"
            placeholder="0723 333 333"
          />
        </div>
        <button
          type="submit"
          onClick={() => next()}
          class="w-100 btn btn-danger"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default Otp;
