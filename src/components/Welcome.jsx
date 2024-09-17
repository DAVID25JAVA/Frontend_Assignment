 

function Welcome({onStart}) {
  return (
      <>
          <div className="flex justify-center gap-10 bg-gray-100 text-2xl h-screen font-serif items-center">
          <h1 className="text-center text-3xl text-purple-700">Welcome to Our Survey</h1>
          <button onClick={onStart} className=" hover:bg-purple-500 bg-purple-600 text-white outline-none px-4 py-2 border">Start Survey</button>
        </div>
      </>
  )
}

export default Welcome