import React, { useContext } from "react";
import { Context } from "context/Context";

const VerifyPhone = () => {
  const { next } = useContext(Context);
  return (
    <form id="form clearfix" className="mt-3" onSubmit={() => next()}>
      <h6 className=" py-3">
        Enter the phone number you used to register for Huduma Namba
      </h6>
      <div className="form-group mb-5">
        <label htmlFor="phone" className="label">
          Enter your phone Number
        </label>
        <input
          type="text"
          className="form-control"
          id="phone"
          placeholder="0723 333 333"
        />
      </div>
      <button
        type="submit"
        onClick={() => next()}
        class="w-100  btn btn-danger "
      >
        Verify
      </button>
    </form>
  );
};

export default VerifyPhone;
