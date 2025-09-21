

const tools = [
    "AWS",
    "Docker",
    "Kubernetes",
    "Vercel",
    "Azure DevOps",
    "Git",
    "GitHub/Actions",
    "CI/CD Pipelines",
    "Cisco Packet Tracer",
]

export function Tools() {
    return(
        <div>
            <h1 className="font-bold flex items-center justify-center text-3xl">TOOLS & PLATFORMS</h1>
            <div className="flex flex-wrap justify-center gap-4 mt-4 font-mono">
                {tools.map((tool, index) => (
                <p key={index} className="w-[13%] min-w-[100px] text-center">
                    {tool}
                </p>
                ))}
            </div>
            <hr className="flex mx-auto max-w-[80%] my-6 border-t dark:border-white border-black" />
        </div>
    )
}