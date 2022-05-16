interface InputProps {
  name: string;
  label: string;
}

export function Input({ name, label }: InputProps) {
  return (
    <>
      <label htmlFor={name} className="first:mt-0 my-3">
        {label}
      </label>
      <input name={name} type={name} id={name} className="home-input" />
    </>
  );
}
