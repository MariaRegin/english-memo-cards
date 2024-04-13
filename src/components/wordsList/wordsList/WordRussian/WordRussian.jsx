export default function WordRussian({ value, onChange, disabled }) {
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </>
  );
}
