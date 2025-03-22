interface RadioInputGroupProps {
  name: string | undefined;
  value: string | undefined;
  uniqueId: string;
  onChange: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
}

export const RadioInputGroup = ({
  name,
  value,
  uniqueId,
  onChange,
}: RadioInputGroupProps) => {
  return <input type="radio" id={uniqueId} name={name} value={value} onChange={onChange}/>;
};
