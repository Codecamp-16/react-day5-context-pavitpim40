// Lv1 Component
function App() {
  const data = 42;
  return (
    <div className='flex justify-center mt-4'>
      <Parent data={data} />
    </div>
  );
}

// Lv2 Component
function Parent({ data }) {
  return <Child data={data} />;
}

// Lv3 Component
function Child({ data }) {
  return <GrandChild data={data} />;
}

// Lv4 Component
function GrandChild({ data }) {
  return <h1 className='text-2xl italic font-bold'>{data}</h1>;
}

export default App;
