import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'
const ExpenseItem=(props)=> {
    const clickHandler=()=>{
        alert("button is clicked");
    }
  return (
    <div className="expense-item">
        <ExpenseDate date={props.date}/>
      <div className="expense-item__description ">
        <h2>{props.title}</h2>
        <div className="expense-item__price ">${props.amount}</div>
      </div>
      <button type='submit' onClick={clickHandler}>Delete Expenses</button>
    </div>
  );
}

export default ExpenseItem;
