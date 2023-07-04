import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import FinanceScheme from './datas/Finscheme.json'

function App() {
  
  const SubmitClick = () => {

    HideForm("Main")
    var forms = document.getElementById("formfloat")
    forms.style.display = "block"

    var finschemeID = document.getElementById("finschemeID");
    var finschemeDesc = document.getElementById("finschemeDesc");   
    var selecttag = document.getElementById('Finschemetype');
    var optiontag = document.getElementById('Finschemetype');    
    finschemeID.value = "Nice"
    finschemeDesc.value ="Nice"
  }

  const ShowMain = () => {
    var form = document.getElementById("Main")
       form.style.display = "block"
    var form = document.getElementById("formfloat")
       form.style.display = "none"
  }

  return (
    <div id="MostMain">
        <div id="Main">
        <label><strong>SELECT FINANCIAL SCHEME:</strong></label>
        <select 
            name="Finschemeee" 
            id="Finschemetype">
              <option>--SELECT FINANCE SCHEME--</option>
              {
                FinanceScheme.map((result)=> (<option id={result.ch_finscheme_id} text={result.vc_finscheme_name}>{result.vc_finscheme_name}</option>))
              }
        </select>&nbsp;&nbsp;
        <button onClick={SubmitClick}>SUBMIT</button>
        <br/><br/>
        </div>
        
        <div className="floating-form" id="formfloat">       
                <div className="form-row">
                    <label className="formlabel" for="identification">ID:</label>
                    <input type="text" id="finschemeID" name="identification"></input> <br/>
                </div>
                <div className="form-row">
                    <label className="formlabel" for="description">DESCRIPTION:</label>
                    <input type="text" id="finschemeDesc" name="Description"></input> <br/> <br/>
              
                </div> 
                <button onClick={ShowMain}>Back</button>
        </div>
    
    </div>
    
  )

}

function HideForm(divname){
  var form = document.getElementById(divname);

  form.style.display="none";
}



export default App;
