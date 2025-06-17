

const database = [
    "Amazon DynamoDB",
    "MongoDB",
    "MySQL",
    "PostreSQL",
    "Microsoft SQL Server",
    "SQLite",
]

export function Databases() {
    return(
        <div>
            <h1 className="font-bold flex items-center justify-center text-4xl">Databases</h1>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
                {database.map((db, index) => (
                <p key={index} className="w-[15%] min-w-[100px] text-center">
                    {db}
                </p>
                ))}
            </div>
            <hr className="flex mx-auto my-6 max-w-[80%] border-t dark:border-white border-black" />
        </div>
    )
}