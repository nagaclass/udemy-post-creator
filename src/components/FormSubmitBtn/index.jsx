const FormSubmitBtn = ({ text }) => {
  return (
    <input
      type="submit"
      value={text}
      className="bg-slate-800 w-full mt-3 p-3 text-white rounded-lg cursor-pointer font-bold"
    />
  );
};

export default FormSubmitBtn;
