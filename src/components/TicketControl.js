import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import Documenting from './Documenting';
import Pair from './Pair';
import DebugLesson from './DebugLesson';

class TicketControl extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      debugVisibleOnPage: false,  // // on page load this is false -- we know the debug page is not visible
      // formVisibleOnPage: false,   // on page load this is false -- we know the form is not visible
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    
    if (this.state.count < 3) {
      this.setState(prevState => ({
        count: prevState.count + 1 // update the Count to +1 of its previous value

        // if (!prevState.debugVisibleOnPage)
        //   formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    } else {
      this.setState(prevState => ({
        debugVisibleOnPage: !prevState.debugVisibleOnPage
      }));
    }
  }


  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.count === 0) {    /// if the current visible state is that the debug page is visible 
      currentlyVisibleState = <DebugLesson /> // debug is our current visible state
      buttonText = "Yes";  // and the button is this
    } else if (this.state.count === 1) {
      currentlyVisibleState = <Pair/>
      buttonText = "Yes 2";
    } else if (this.state.count === 2) {
      currentlyVisibleState = <Documenting/>
      buttonText = "Yes 3";
    } else if (this.state.debugVisibleOnPage) { // if the current state is form is visible
      currentlyVisibleState = <NewTicketForm/>  // show NewTicketForm
      buttonText = "return to ticket form";  // our new button
    } else {
      currentlyVisibleState = <TicketList />  /// otherwise it should be ticketlist
      buttonText = "Add Ticket";  // and this is our button
    }
    return (
      <React.Fragment>
        {currentlyVisibleState} {/*this pulls our current visible state*/}
        <button onClick = {this.handleClick}>{buttonText}</button>  {/*handle click and whatever relevant buttontext*/}
      </React.Fragment>
    );
  }
}

export default TicketControl;


// render(){
//   let currentlyVisibleState = null;
//   let buttonText = null;
//   if (this.state.formVisibleOnPage) {    /// if the current visible state is that the form is visible 
//     currentlyVisibleState = <NewTicketForm /> // new ticket form is our current visible state
//     buttonText = "Return to Ticket List";  // and the button is this
//   } else if( this.state.formVisibleOnPage === false) {
//     currentlyVisibleState = <TicketList />  /// otherwise it should be ticketlist
//     buttonText = "Add Ticket";  // and this is our button
//   } else if(this.state.debugVisibleOnPage) {
//     currentlyVisibleState = <DebugLesson />
//     buttonText = "yes"
//   }
//   return (
//     <React.Fragment>
//       {currentlyVisibleState} {/*this pulls our current visible state*/}
//       <button onClick = {this.handleClick}>{buttonText}</button>  {/*handle click and whatever relevant buttontext*/}
//     </React.Fragment>
//   );
// }
