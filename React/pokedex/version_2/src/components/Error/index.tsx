

type Props = {}

const Error = (props: Props) => 
    <div className="flex justify-center items-center p-2
                    border-4 h-32 rounded-lg border-black bg-red-800">
        <p className="text-2xl text-white font-extrabold">Error fetching Pokemon data!</p>
    </div>
    

export default Error