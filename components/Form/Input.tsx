interface InputProps {
  name: string;
  label: string;
  type?: string;
}

export function Input({ name, label }: InputProps) {
  return (
    <>
      <label htmlFor={name}>
        {label}
      </label>
      <input name={name} type={name} id={name} className="home-input" />
    </>
  );
}
