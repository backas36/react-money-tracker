import ExpenseItem from "./ExpenseItem";
import "./ExpenseItems.css";
const ExpenseItems = ({ expenses }) => {
  return (
    <div className="expenses">
      {expenses.map((expense) => {
        return <ExpenseItem key={expense.id} expense={expense} />;
      })}
    </div>
  );
};

export default ExpenseItems;
