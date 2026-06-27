import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "./cartSlice";
import { AppDispatch } from "../../store";

function DeleteItem({ pizzaId }: { pizzaId: number }) {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
      Delete
    </Button>
  );
}

export default DeleteItem;
