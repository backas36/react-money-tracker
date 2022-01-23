import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "./ExpenseItems.css";
const ExpenseItems = ({ expenses }) => {
  return (
    <Card className="expenses">
      {expenses.map((expense) => {
        return <ExpenseItem key={expense.id} expense={expense} />;
      })}
    </Card>
  );
};

export default ExpenseItems;
