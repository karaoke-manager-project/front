
type Props = {
  buttonsText: string[];
  activeButtonText?: string;
  onChange: (value: string) => void;
};

export function ButtonGroup({
  buttonsText,
  activeButtonText,
  onChange 
}: Props) {

  return (
      <div className="flex mx-20 gap-1">
        {buttonsText.map((button) => (
          <button
            key={button}
            onClick={() => onChange(button)}
            className={`
              px-6 py-2 rounded-t-lg transition-colors duration-200
              ${activeButtonText === button
                ? 'bg-gray-50 text-black font-bold'
                : 'bg-gray-300 text-gray-600 hover:bg-gray-400'
              }
            `}
          >{button}</button>
        ))
        }
      </div>
  );
};
