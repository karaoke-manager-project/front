
type Props = {
  label: string;
  onClick?: () => void;
}

export function Button({
  label,
  onClick,
}: Props) {

  return (
    <>
      <button 
        className="border-2 border-gray-300 rounded-lg py-1 px-2 hover:bg-gray-100" 
        onClick={onClick}
      >
        {label}
      </button>
    </>
  );
}
