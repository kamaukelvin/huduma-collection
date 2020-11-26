import React, { useContext } from "react";
import { Context } from "context/Context";

const PickupDetails = () => {
  const { next } = useContext(Context);
  return (
    <form id="form">
      <h6 className="py-3">Select your pickup delivery address</h6>

      <div className="form-group">
        <label for="county" className="label">
          County
        </label>
        <select className="form-control" id="county">
          <option value="">Select County</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div className="form-group">
        <label for="sub_county" className="label">
          Sub County
        </label>
        <select className="form-control" id="sub_county">
          <option value="">Select Subcounty</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div className="form-group">
        <label for="division" className="label">
          Division
        </label>
        <select className="form-control" id="division">
          <option value="">Select Division</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div className="form-group">
        <label for="location" className="label">
          Location
        </label>
        <select className="form-control" id="location">
          <option value="">Select Location</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div className="form-group">
        <label for="sub_location" className="label">
          Sub Location
        </label>
        <select className="form-control" id="sub_location">
          <option value="">Select SubLocation</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>

      <div className="form-group">
        <label for="delivery_point" className="label">
          Delivery Point
        </label>
        <select className="form-control" id="delivery_point">
          <option value=""> Select Delivery Point</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-100  btn btn-danger"
      >
        Save
      </button>
    </form>
  );
};

export default PickupDetails;
