

const languages = [
    "JavaScript",
    "TypeScript",
    "C#",
    "C++",
    "Python",
    "Java",
    "Kotlin",
    "Dart",
    "SQL",
    "Bash",
    "HTML/CSS",
]

export function Languages() {
    return(
        <div>
            <h1 className="font-bold flex items-center justify-center text-3xl">LANGUAGES</h1>
            <div className="flex flex-wrap justify-center gap-4 mt-4 font-mono">
                {languages.map((lang, index) => (
                <p key={index} className="w-[5%] min-w-[100px] text-center">
                    {lang}
                </p>
                ))}
            </div>
            <hr className="flex mx-auto max-w-[80%] my-6 border-t dark:border-white border-black" />
        </div>
    )
}