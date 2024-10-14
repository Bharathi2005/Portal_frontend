const Answer = () => {
  return (
    <>
      <div className="w-full h-full">
        <form className="w-full h-full flex flex-col">
          <textarea className="w-full h-[90%] bg-slate-300 resize-none"></textarea>
          <div className="mt-auto flex justify-end">
            <button
              type="button"
              className="bg-green-500 p-1 rounded-md"
            >
              Compile
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Answer;
