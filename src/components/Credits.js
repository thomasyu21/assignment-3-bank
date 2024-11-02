/*==================================================
src/components/Credits.js

The Credits component contains information for Credits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import {Link} from 'react-router-dom';
import AccountBalance from './AccountBalance';

const Credits = (props) => {
  let creditsView = () => {
    const { credits } = props;
    return credits.map((credit) => {
      let date = credit.date.slice(0,10);
      return <li key={credit.id}>{credit.amount} {credit.description} {date}</li>
    });
  }

  return (
    <div>
      <h1>Credits</h1>
      <AccountBalance accountBalance={props.accountBalance} />
      <br/>

      {creditsView()}

      <h4>Add Credit</h4>
      <form onSubmit={props.addCredit}>
        Description:<input type="text" name="description" />
        <br/>
        Amount:<input type="number" step="0.01" name="amount" />
        <br/>
        <button type="submit">Add Credit</button>
      </form>
      <br/>
      <Link to="/">Return to Home</Link>
    </div>
  );
}

export default Credits;