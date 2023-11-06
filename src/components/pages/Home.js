import { useState } from "react";


function Home() {
  const [name, setName] = useState("");

  const submitName = async (event) => {
    event.preventDefault();

    localStorage.setItem("username", name);

    window.location.href = "/bool_questions";
  };

  return (
    <>
    <section className="get-in-touch">
      <h1 className="title">We Care For You.. </h1>
      <form className="contact-form row" onSubmit={submitName}>
        
        <div className="form-field col-lg-12">
          <input id="message"  placeholder="write your name before submitting" className="input-text js-input" type="text" name="name"
          value={name}
           onChange={(event) => setName(event.target.value)} required />
      
        </div>
        <div className="form-field col-lg-12">
        {name === "" ? "" :    <input className="submit-btn" type="submit" value="Submit" /> }
        </div>
      </form>
    </section>
      
    </>

  );
}

export default Home;
