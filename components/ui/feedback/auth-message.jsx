export default function AuthMessage({ message, variant }) {
  let messageColor;

  if (variant === "error") {
    messageColor = "bg-red-500";
  }

  if (variant === "success") {
    messageColor = "bg-lime-500";
  }
  return (
    <div className={`${messageColor} w-2/4 mx-auto p-2 rounded text-white`}>
      <p>{message}</p>
    </div>
  );
}
