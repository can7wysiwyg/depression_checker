import { useState } from "react"

function BoolQuestions() {
    let username = localStorage.getItem("username")
    const [question1, setQuestion1] = useState("");
    const [question2, setQuestion2] = useState("");
    const [question3, setQuestion3] = useState("");

    



const handleQuestion1 = (event) => {
    setQuestion1(event.target.value);

  };

  const handleQuestion2 = (event) => {
    setQuestion2(event.target.value);
  };

  const handleQuestion3 = (event) => {
    setQuestion3(event.target.value);
  };



const submitQuestions = async(event) => {
    event.preventDefault();

    if(question1 === "true" && question2 === "true" && question3 === "true" ) {

        window.location.href = "/depression_questions"
    } 
    if(question1 === "false" && question2 === "true" && question3 === "true" ) {

        window.location.href = "/depression_questions"
    }

    if(question1 === "true" && question2 === "false" && question3 === "true" ) {

        window.location.href = "/depression_questions"
    }

    if(question1 === "true" && question2 === "true" && question3 === "false" ) {

        window.location.href = "/depression_questions"
    } 

    else if(question1 === "false" && question2 === "false" && question3 === "false" ) {

        window.location.href = "/talk_to_friends"
    }

    else if(question1 === "true" && question2 === "false" && question3 === "false" ) {

        window.location.href = "/talk_to_friends"
    }

    else if(question1 === "false" && question2 === "true" && question3 === "false" ) {

        window.location.href = "/talk_to_friends"
    }

    else if(question1 === "false" && question2 === "false" && question3 === "true" ) {

        window.location.href = "/talk_to_friends"
    }

    

}



    return(<>
    
    
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div style={{margin: "50px"}}>

          <h5 style={{ 
  fontSize: "24px",
  fontWeight: "bold",
  // color: "red",
  textAlign: "center",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
}}>
  We empathize with what you are going through, <span style={{ color: "blue" }}>{username}</span>
</h5>

        
          <hr></hr>
          </div>

          <form onSubmit={submitQuestions} >
            <fieldset>
              <legend>Have you lost interest in things you like?</legend>
              <label>
                <input
                  type="radio"
                  name="question1"
                  value="true"
                  checked={question1 === "true"}
                  onChange={handleQuestion1}
                />
                true
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="question1"
                  value="false"
                  checked={question1 === "false"}
                  onChange={handleQuestion1}
                />
                false
              </label>
            </fieldset>

            <fieldset>
              <legend>Are you getting enough sleep?</legend>
              <label>
                <input
                  type="radio"
                  name="question2"
                  value="true"
                  checked={question2 === "true"}
                  onChange={handleQuestion2}
                />
                true
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="question2"
                  value="false"
                  checked={question2 === "false"}
                  onChange={handleQuestion2}
                />
                false
              </label>
            </fieldset>

            <fieldset>
              <legend>Have there been any changes in your life?</legend>
              <label>
                <input
                  type="radio"
                  name="question3"
                  value="true"
                  checked={question3 === "true"}
                  onChange={handleQuestion3}
                />
                true
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="question3"
                  value="false"
                  checked={question3 === "false"}
                  onChange={handleQuestion3}
                />
                false
              </label>
            </fieldset>

            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>

     
    </>)
}

export default BoolQuestions