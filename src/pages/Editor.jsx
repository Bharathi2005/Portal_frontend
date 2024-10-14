import Output from '../components/Output'
import Answer from '../components/answer'
import Question from '../components/Question'
import Language from '../components/Language'

const Editor = () => {
  return (
    <>
      <div className="flex w-full h-screen p-0">
       
        <div className="w-[30%] h-screen  p-5">
          <Question />
        </div>
        
        <div className="w-[70%] flex flex-col p-5">
          <div>
            <Language/>
          </div>
          <div className="h-[70%] p-2">
            <Answer />
          </div>
       
          <div className="h-[30%] p-2">
            <Output />
          </div>
        </div>
      </div>
    </>
  )
}

export default Editor
