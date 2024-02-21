export default function FullButton(props) {
  const buttonStyle = {
    width: '100%',
    height: '3em',
  };
  return (
    <>
      <button
        type="button"
        style={buttonStyle}
        className="rounded-md bg-[#80BCBD] px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-[#4F6F52]"
      >
        {props.name}
      </button>
    </>
  );
}
