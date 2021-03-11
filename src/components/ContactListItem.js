export default function ContactListItem({ name, number, onClickRemove }) {
  return (
    <li>
      <p>
        {name}: {number}
      </p>
      <button
        type="button"
        className="ContactList__btn"
        onClick={onClickRemove}
      >
        Delete
      </button>
    </li>
  );
}
