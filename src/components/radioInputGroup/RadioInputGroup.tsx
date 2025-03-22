interface RadioInputGroupProps {
  name: string;
  value: string;
  uniqueId: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RadioInputGroup = ({
  name,
  value,
  uniqueId,
  onChange,
}: RadioInputGroupProps) => {
  return <input type="radio" id={uniqueId} name={name} value={value} onChange={onChange}/>;
};
