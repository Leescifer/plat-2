
export function Button(props) {

    return (
        <button
            className="
            border
            border-blue-600 
            px-10 
            py-4 
            bg-blue-600 
            rounded-full"
        >
            <span className="text-black text-xl font-semibold">{props.text}</span>
        </button>
    )
}


