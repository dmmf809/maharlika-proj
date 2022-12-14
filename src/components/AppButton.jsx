const AppButton = (props) => {
  return (
    <div className="md:w-28 bg-yellow-200 p-2 px-3 rounded w-[26.5rem] text-zinc-900 hover:bg-yellow-400">
      <p className="text-center">{props.text}</p>
    </div>
  );
};

export default AppButton;
