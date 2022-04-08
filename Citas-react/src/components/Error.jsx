const Error = ({children}) => {

    return(
        <div className="bg-red-800 text-center p-3 uppercase font-bold mb-3 rounded text-white">
          <p>{children}</p>
        </div>
      )
}

export default Error;