import { v4 as uuidv4 } from "uuid";
import styles from "./input.module.scss";
import { RadioInputGroup } from "../radioInputGroup/RadioInputGroup";

type InputProps = {
  type?: string;
  variant?: string;
  size?: string;
  radius?: string;
  label?: string;
  withAsterisk?: boolean;
  description?: string;
  error?: string;
  placeholder?: string;
  disabled?: boolean;
  properties?: boolean;
  name?: string;
  value?: string;
  legend?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = (props: InputProps) => {
  const {
    type = "text",
    variant = "default",
    size = "sm",
    radius = "sm",
    label,
    withAsterisk,
    description,
    error,
    placeholder,
    disabled = false,
    name,
    onChange,
    value
  } = props;

  const typeRadio = type === "radio";

  const generateId = (prefix?: string) => {
    if (prefix) {
      return `${prefix}_${uuidv4()}`;
    }
    return uuidv4();
  };

  const uniqueId = generateId("input");

  return (
    <>
      <div className={styles.container}>
        <div
          className={styles.wrapper}
          data-variant={variant}
          data-size={size}
          data-radius={radius}
          data-error={!!error}
        >
          {label && (
            <label htmlFor={uniqueId}>
              {label}
              {withAsterisk && <span> *</span>}
            </label>
          )}
          {description && (
            <div className={styles.description}>{description}</div>
          )}
          {typeRadio ? (
            <RadioInputGroup
              name={name}
              uniqueId={uniqueId}
              label={label}
              onChange={onChange}
              value={value}
            />
          ) : (
            <input
              name={name}
              id={uniqueId}
              type={type}
              disabled={disabled}
              placeholder={placeholder}
              className={error && styles.error}
              required={withAsterisk}
              onChange={onChange}
            />
          )}

          {error && <div className={styles.error_message}>{error}</div>}
        </div>
      </div>
    </>
  );
};
