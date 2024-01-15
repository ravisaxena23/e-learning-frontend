import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { setCountryData } from "../actions/countryActions";
import { setStateData } from "../actions/stateActions";
import { setCityData, setCollegeData } from "../actions";
import { get } from "../http/api";

const CollegeSelectComponent = ({
  countryData,
  setCountryData,
  stateData,
  setStateData,
  cityData,
  setCityData,
  collegeData,
  setCollegeData,
}) => {
  const [selectedCountryValue, setSelectedCountryValue] = useState("");
  const [selectedStateValue, setSelectedStateValue] = useState("");
  const [selectedCityValue, setSelectedCityValue] = useState("");
  const [selectedCollegeValue, setSelectedCollegeValue] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [showStateOptions, setStateShowOptions] = useState(false);
  const [showCityOptions, setCityShowOptions] = useState(false);
  const [showCollegeOptions, setCollegeShowOptions] = useState(false);

  useEffect(() => {
    setSelectedCountryValue("");
    setSelectedStateValue("");
    setSelectedCityValue("");
    setSelectedCollegeValue("");
    if (!countryData.length)
      get("college/countries").then((countryData) => {
        setStateData([]);
        setCityData([]);
        setCollegeData([]);
        setCountryData(countryData);
      });
  }, [countryData]);

  const handleSelect = (value) => {
    setSelectedCountryValue(value);
    setShowOptions(false);

    setSelectedStateValue("");
    setSelectedCityValue("");
    setSelectedCollegeValue("");
    setStateData([]);
    setCityData([]);
    setCollegeData([]);
    get(`college/state?countryID=${value.id}`).then((stateData) => {
      setStateData(stateData);
    });
  };

  const handleCitySelect = (value) => {
    setCityData([]);
    setCollegeData([]);
    get(`college/city?stateID=${value.stateID}`).then((cityData) => {
      setCityData(cityData);
    });
    setSelectedStateValue(value);
    setStateShowOptions(false);
  };

  const handleCollegeSelect = (value) => {
    setCollegeData([]);
    get(`college/college?cityID=${value.cityID}`).then((collegeData) => {
      setCollegeData(collegeData);
    });
    setSelectedCityValue(value);
    setCityShowOptions(false);
  };

  const onSubmit = () => {
    console.log(
      selectedCountryValue,
      selectedStateValue,
      selectedCityValue,
      selectedCollegeValue
    );
  };

  const selectedCollege = (value) => {
    setSelectedCollegeValue(value);
    setCollegeShowOptions(false);
  };

  return (
    <div className="container-xs mt-4">
      <div className="row" style={{ padding: "5px" }}>
        <div className="col-xs-12 col-sm-3">
          <label for="country" style={{ float: "left" }}>
            Select Country
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Select Option"
            value={selectedCountryValue.countryName}
            onClick={() => setShowOptions(!showOptions)}
            id="country"
            autoComplete="false"
          />
          {showOptions && (
            <ul
              className="list-group"
              style={{
                height: "200px",
                overflow: "hidden auto",
                border: "1px solid",
              }}
            >
              {countryData?.map((option, index) => (
                <li
                  key={index}
                  className="list-group-item"
                  onClick={() => handleSelect(option)}
                >
                  {option.countryName}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* state */}
        <div className="col-xs-12 col-sm-3">
          <label for="state" style={{ float: "left" }}>
            Select state
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Select Option"
            value={selectedStateValue.stateName}
            onClick={() => setStateShowOptions(!showStateOptions)}
            id="state"
          />
          {showStateOptions && stateData.length ? (
            <ul
              className="list-group"
              style={{
                height: "200px",
                overflow: "hidden auto",
                border: "1px solid",
              }}
            >
              {stateData?.map((option, index) => (
                <li
                  key={index}
                  className="list-group-item"
                  onClick={() => handleCitySelect(option)}
                >
                  {option.stateName}
                </li>
              ))}
            </ul>
          ): ''}
        </div>

        {/* city */}
        <div className="col-xs-12 col-sm-3">
          <label for="city" style={{ float: "left" }}>
            Select city
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Select Option"
            value={selectedCityValue.cityName}
            onClick={() => setCityShowOptions(!showCityOptions)}
            id="city"
            autoComplete="false"
          />
          {showCityOptions && cityData.length ? (
            <ul
              className="list-group"
              style={{
                height: "200px",
                overflow: "hidden auto",
                border: "1px solid",
              }}
            >
              {cityData?.map((option, index) => (
                <li
                  key={index}
                  className="list-group-item"
                  onClick={() => handleCollegeSelect(option)}
                >
                  {option.cityName}
                </li>
              ))}
            </ul>
          ) : ''}
        </div>

        {/* college */}
        <div className="col-xs-12 col-sm-3">
          <label for="college" style={{ float: "left" }}>
            Select college
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Select Option"
            value={selectedCollegeValue.collegeName}
            onClick={() => setCollegeShowOptions( collegeData.length && !showCollegeOptions)}
            id="college"
            autoComplete="false"
          />
          {showCollegeOptions && collegeData.length ? (
            <ul
              className="list-group"
              style={{
                height: "200px",
                overflow: "hidden auto",
                border: "1px solid",
              }}
            >
              {collegeData?.map((option, index) => (
                <li
                  key={index}
                  className="list-group-item"
                  onClick={() => selectedCollege(option)}
                >
                  {option.collegeName}
                </li>
              ))}
            </ul>
          ): ''}
        </div>
      </div>

      <div className="row">
        <div className="col-xs-12 col-sm-12 mt-4">
          <button
            type="button"
            class="btn btn-dark"
            onClick={() => onSubmit()}
            disabled={!selectedCollegeValue.collegeID}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  countryData: state.country.data,
  stateData: state.state.data,
  cityData: state.city.data,
  collegeData: state.college.data,
});

const mapDispatchToProps = {
  setCountryData,
  setStateData,
  setCityData,
  setCollegeData,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CollegeSelectComponent);
