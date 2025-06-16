

const frameworks = [
    "Next.js (React + SSR/SSG)",
    "Vue.js",
    "Angular",
    "Express.js",
    "ASP.NET Core",
    "Flutter",
    "React Native",
    "Electron",
    "WPF",
    "Unity",
    "Pygame",
    "Monogame",
    "JUnit",
    "NUnit",
    "Clerk",
    "NextAuth.js",
    "Firebase Authentication"
]

export function Frameworks() {
    return(
        <div>
            <h1 className="font-bold flex items-center justify-center text-3xl">Frameworks & Libraries</h1>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
                {frameworks.map((framework, index) => (
                <p key={index} className="w-[15%] min-w-[100px] text-center">
                    {framework}
                </p>
                ))}
            </div>
            <hr className="flex mx-auto my-6 max-w-[80%] border-t dark:border-white border-black" />
        </div>
    )
}