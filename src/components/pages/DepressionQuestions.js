import { useState, useEffect } from "react";

function DepressionQuestions() {
  let username = localStorage.getItem("username");

  const [values, setValues] = useState({
    counselor: "",
    feeling: "",
    triggered: "",
    abuse: "",
    harm: "",
    relationship: "",
    expectation: "",
    continue: "",
  });

  const [showModal, setShowModal] = useState(false);



  useEffect(() => {
    const beforeUnloadHandler = (e) => {
      e.preventDefault();

      
      localStorage.removeItem('username');

      e.returnValue = 'Are you sure you want to leave this page?';
    };

    
    window.addEventListener('beforeunload', beforeUnloadHandler);

    
    return () => {
      window.removeEventListener('beforeunload', beforeUnloadHandler);
    };
  }, []);

  



  if (username === null) {
    alert(
      "username cannot be blank.. you will be redirected to home to type it "
    );

    window.location.href = "/";
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    localStorage.removeItem("username");

    window.location.href = "/";
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div style={{ margin: "50px" }}>
              <h4
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  // color: "red",
                  textAlign: "center",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                }}
              >
                Kindly answer these questions{" "}
                <span style={{ color: "red" }}>{username}</span> and we will
                refer you to therapists...
              </h4>
            </div>

            <form className="contact-form row">
              <fieldset>
                <legend style={{ fontFamily: "cursive" }}>
                  Have you seen a counselor before?
                </legend>
                <div className="form-field col-lg-12">
                  <input
                    type="text"
                    className="input-text js-input"
                    name="counselor"
                    value={values.counselor}
                    onChange={handleChange}
                    required
                  />
                </div>
              </fieldset>

              <fieldset>
                <legend style={{ fontFamily: "cursive" }}>
                  How are you feeling?
                </legend>
                <div className="form-field col-lg-12">
                  <input
                    type="text"
                    className="input-text js-input"
                    name="feeling"
                    value={values.feeling}
                    onChange={handleChange}
                    required
                  />
                </div>
              </fieldset>

              <fieldset>
                <legend style={{ fontFamily: "cursive" }}>
                  {" "}
                  What do you think triggered this?
                </legend>
                <div className="form-field col-lg-12">
                  <input
                    type="text"
                    className="input-text js-input"
                    name="triggered"
                    value={values.triggered}
                    onChange={handleChange}
                    required
                  />
                </div>
              </fieldset>

              <fieldset>
                <legend style={{ fontFamily: "cursive" }}>
                  Ever experienced abuse in your childhood?
                </legend>
                <div className="form-field col-lg-12">
                  <input
                    type="text"
                    className="input-text js-input"
                    name="abuse"
                    value={values.abuse}
                    onChange={handleChange}
                    required
                  />
                </div>
              </fieldset>

              <fieldset>
                <legend style={{ fontFamily: "cursive" }}>
                  Have you contemplated or attempted to harm yourself before? If
                  yes, what stopped you?
                </legend>
                <div className="form-field col-lg-12">
                  <input
                    type="text"
                    className="input-text js-input"
                    name="harm"
                    value={values.harm}
                    onChange={handleChange}
                    required
                  />
                </div>
              </fieldset>

              <fieldset>
                <legend style={{ fontFamily: "cursive" }}>
                  How is your relationship with your parents/wife/siblings?
                </legend>
                <div className="form-field col-lg-12">
                  <input
                    type="text"
                    className="input-text js-input"
                    name="relationship"
                    value={values.relationship}
                    onChange={handleChange}
                    required
                  />
                </div>
              </fieldset>

              <fieldset>
                <legend style={{ fontFamily: "cursive" }}>
                  What do you expect from the counseling process?
                </legend>
                <div className="form-field col-lg-12">
                  <input
                    type="text"
                    className="input-text js-input"
                    name="expectation"
                    value={values.expectation}
                    onChange={handleChange}
                    required
                  />
                </div>
              </fieldset>

              <fieldset>
                <legend style={{ fontFamily: "cursive" }}>
                  Will you continue if it turns out unsettling?
                </legend>
                <div className="form-field col-lg-12">
                  <input
                    type="text"
                    className="input-text js-input"
                    name="continue"
                    value={values.continue}
                    onChange={handleChange}
                    required
                  />
                </div>
              </fieldset>

              {values.abuse === "" &&
 values.continue === "" &&
 values.counselor === "" &&
 values.expectation === "" &&
 values.feeling === "" &&
 values.harm === "" &&
 values.relationship === "" &&
 values.triggered === "" ? null : (
  <button
    type="button"
    className="submit-btn"
    onClick={() => setShowModal(true)}
  >
    Submit
  </button>
)}


              
            </form>
          </div>
        </div>
      </div>

      <div
        className="modal"
        tabIndex="-1"
        role="dialog"
        style={{ display: showModal ? "block" : "none" }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Alert</h5>
              <button
                type="button"
                className="close"
                onClick={() => setShowModal(false)}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>
                We have compiled a list of therapist. Select one and you will
                talk to him/her.
              </p>
              <p>
                They will receive the info about the questions you have answered
                when you click submit
              </p>

              <form onSubmit={handleSubmit}>
                <input type="radio" id="age1" name="age" value="30" />
                <label for="age1">Dr. Feldspar</label>
                <br />
                <input type="radio" id="age2" name="age" value="60" />
                <label for="age2">Dr. Fritatas</label>
                <br />

                <button type="submit" className="btn btn-secondary">
                  Submit
                </button>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setShowModal(false)}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DepressionQuestions;
