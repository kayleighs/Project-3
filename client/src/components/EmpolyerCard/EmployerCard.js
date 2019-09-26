import React from 'react';
import './employerCard.css';
import Button from '../Buttons/Button';
import DMicon from './DMicon/DM-Icon.png';
import Gravatar from 'react-gravatar';
import ReactModal from 'react-modal';

function EmployerCard(props) {

  return (
    
    <div className="Grid-Employer-Card">

      {/*This section holds user image, first & last name and bussiness name*/}
      {/*========================================================================*/}
      <div className="Item-Employer-Card-1 Item">
        <Gravatar email={props.email} id="EmployerImg" alt={props.id} />
        <p className="ks-container color-1-red">Employer</p>
        <p className="ks-container color-2-yellow">{props.username}</p>
        <p className="ks-container color-3-blue">{props.email}</p>
      </div>
    
      {/*This section gives a list of positions that need to be filled*/}
      {/*========================================================================*/}
      <div className="Item-Employer-Card-2 Item ks-container color-2-yellow">
        <h2>Seeking:</h2>
        {props.seeking}
      </div>

      {/*Badge and DM section*/}
      {/*========================================================================*/}
      <div className="Item-Employer-Card-3 Item">
      
        <div className="Item-3-Grid-1 ks-container">
          <h2 className="Item-3-Grid2-1">Badges:</h2>

          <div className="Item-3-Grid2-2">
            <div class="div1 badge-icon"> </div>
            <div class="div2 badge-icon"> </div>
            <div class="div3 badge-icon"> </div>
            <div class="div4 badge-icon"> </div>
            <div class="div5 badge-icon"> </div>
            <div class="div6 badge-icon"> </div>
            <div class="div7 badge-icon"> </div>
            <div class="div8 badge-icon"> </div>
            <div class="div9 badge-icon"> </div>
            <div class="div10 badge-icon"> </div>
            <div class="div11 badge-icon"> </div>
            <div class="div12 badge-icon"> </div>
            <div class="div13 badge-icon"> </div>
            <div class="div14 badge-icon"> </div>
            <div class="div15 badge-icon"> </div>
            <div class="div16 badge-icon"> </div>
            <div class="div17 badge-icon"> </div>
            <div class="div18 badge-icon"> </div>
          </div>
          

        </div>
        <img className="DM-Img" alt="Direct Message Icon" src={DMicon}></img>

      </div>

      {/*This section gives a location of where the employer is based out of and a map of that location.*/}
      {/*NOTE! the current map image is a placeholder*/}
      {/*This Item holds a Nested Grid!*/}
      {/*========================================================================*/}
      <div className="Item-Employer-Card-4 Item">  
        
        <div className="Item-4-Grid-1">
          <h2>{props.address}</h2>
        </div>
        <div className="Item-4-Grid-2">
          <img id="MapImg" src={props.location} alt={props.id}></img>  
        </div>  
       
      </div>

      {/*This section holds the about information of the business/employer*/}
      {/*========================================================================*/}
      <div className="Item-Employer-Card-5 Item ks-container color-1-red">
        <h2>About Us:</h2>
          {props.statement}
      </div>

      {/*This section holds two buttons.*/} 
      {/*Button num1 displays the employer's current job postings.*/} 
      {/*Button num2 creates a new job posting.*/}
      {/*========================================================================*/}
      <div className="Item-Employer-Card-6 Item">
        <button className="Item-6-Grid-1 button-style"><p>Current Jobs</p></button>
        <button className="Item-6-Grid-2 button-style"  onClick={() => this.props.showJobPostForm()}>Create Job</button>
      </div>

    </div>
   
  );
}

export default EmployerCard;