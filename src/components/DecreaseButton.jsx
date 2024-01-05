function DecreaseButton({ decrement }) {
  return (
    <button
      className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'
      onClick={decrement}
    >
      Decrement
    </button>
  );
}

export default DecreaseButton;
