import styles from "./radioInputGroup.module.scss";

interface RadioInputGroupProps {
  name: string | undefined;
  value: string | undefined;
  uniqueId: string;
  onChange: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
  label: string | undefined;
}

export const RadioInputGroup = ({
  name,
  value,
  uniqueId,
  onChange,
  label,
}: RadioInputGroupProps) => {
  return (
    <div className={styles.form_group}>
      <label htmlFor={uniqueId}>{label}</label>
      <input
        type="radio"
        id={uniqueId}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
