import React from 'react';
import Input from '../../UI/Input';

//get player Item..... after submit....   
//hide input form... display name..  and items... prices....net worth. 

const submitHandler = () => {

}

const Player = (props) => {
  return (
    <form onSubmit={submitHandler}>
      <Input type="text" title="Player UUID"/>
      <Input type="text" title="API Key"/>
      <button type="button" onClick={props.submit}>
      Show my Networth!
    </button>
    </form>
  );
}

export default Player;