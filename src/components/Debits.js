/*==================================================
src/components/Debits.js

The Debits component contains information for Debits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import {Link} from 'react-router-dom';
import AccountBalance from './AccountBalance';

const Debits = (props) => {
  //console.log("DEBITS")
  //console.log(props.debits)
  //console.log(props.accountBalance)
  // Create the list of Debit items
  let debitsView = () => {
    const { debits } = props;
    return debits.map((debit) => {  // Extract "id", "amount", "description" and "date" properties of each debits JSON array element
      let date = debit.date.slice(0,10);
      return <li key={debit.id}>{Number(debit.amount).toFixed(2)} {debit.description} {date}</li>
    });
  }
  // Render the list of Debit items and a form to input new Debit item
  return (
    <div>
      <h1>Debits</h1>
      <AccountBalance accountBalance={props.accountBalance}/>
      <br/>

      {debitsView()}

      <h4>Add Debit</h4>
      <form onSubmit={props.addDebit}>
        Description:<input type="text" name="description" />
        <br/>
        Amount:<input type="number" step="0.01" name="amount" />
        <br/>
        <button type="submit">Add Debit</button>
      </form>
      <br/>
      <Link to="/">Return to Home</Link>
    </div>
  );
}

export default Debits;