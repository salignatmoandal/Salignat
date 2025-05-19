import Navbar from '../components/ui/NavBar'
import Clock from '../components/Clock'
import React from 'react'

interface Crafted {
    title: string
    description: string
    date: string
    slug: string
    content: string
    status: string
    githubUrl?: string
}

const crafted: Crafted[] = [
    {
        title: "Noodl",
        description: "Platform for AI-augmented mind-mapping",
        content: "NOODL is an AI-augmented mind-mapping platform designed to boost creativity and organize ideas visually. It offers a fluid, collaborative interface where each node can generate intelligent suggestions. Inspired by tools like Miro and XMindMap, NOODL helps designers, creators, and teams brainstorm, build visual identities, and structure complex ideas effortlessly.",
        date: "2025-05-12",
        slug: "noodl",
        status: "active",
        githubUrl: "https://www.noodl.world/"
    },
    {
        title: "Gomon",
        description: "Cloud Project",
        content: "Gomon is a lightweight, self-hosted monitoring solution for Go applications. It provides essential metrics collection and exposure through HTTP endpoints, with built-in Prometheus compatibility and pprof profiling.",
        date: "2025-03-01",
        slug: "gomon",
        status: "active",
        githubUrl: "https://github.com/salignatmoandal/gomon"
    },
    {
        title: "TerraLambda",
        description: " Cloud Project",
        content: "TerraLambda is a cloud-based platform for deploying and managing Lambda functions. It provides a scalable and cost-effective solution for running serverless code in the cloud.",
        date: "2025-02-11",
        slug: "terralambda",
        status: "inactive",
        githubUrl: "https://github.com/salignatmoandal/terraLambda"
    },
    {
        title: "MailGo",
        description: "Extension for Gmail",
        content: "MailGo is an AI-powered Extension  designed to automate email replies, boost productivity, and provide intelligent email management. It integrates seamlessly with Gmail, drafts smart responses, and schedules emails.",
        date: "2025-04-05",
        slug: "mailgo",
        status: "inactive",
        githubUrl: "https://github.com/salignatmoandal/MailGo"
    },
    {
        title: "Rayon",
        description: "Research Speech Recognition",
        content: "Rayon is a comprehensive solution for audio processing, speech recognition, text analysis, and location-based services. By integrating functionalities such as audio recording, speech-to-text conversion, natural language processing, geocoding, and AI-powered suggestions, the system aims to deliver a seamless user experience",
        date: "2025-01-09",
        slug: "rayon",
        status: "inactive",
        githubUrl: "https://github.com/votre-username/rayon"
    },
    {
        title: "Healytics",
        description: "App for health",
        content: "Healytics is a mobile health application designed to simplify the medical consultation process by leveraging artificial intelligence and conversational technology. Built with React Native, Healytics helps users easily track and document health symptoms, enabling efficient communication with healthcare professionals.",
        date: "2025-01-09",
        slug: "healytics",
        status: "inactive",
        githubUrl: "https://github.com/votre-username/rayon"
    }   
]

export default function CraftedPage() {
    // Trier les projets par date (du plus récent au plus ancien)
    const sortedCrafted = [...crafted].sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
    })

    return (
        <main className="flex min-h-screen items-center justify-center bg-[var(--background)] px-6">
            <div className="max-w-2xl w-full flex flex-col gap-6">
                <Navbar className="mb-5 self-center rounded-b-md" />
                <div className="text-base flex flex-col gap-8">
                    {sortedCrafted.map((craft, index) => (
                        <React.Fragment key={craft.slug}>
                            <article className="group">
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-4">
                                        <span className="text-lg text-gray-500 font-mono">
                                            {new Date(craft.date).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </span>
                                        <span className="text-[#0B23FF]">→</span>
                                    </div>
                                    
                                    <div className="flex items-center gap-2">
                                        <h2 className="text-lg italic font-medium text-[#0B23FF] group-hover:underline">
                                            {craft.title}
                                        </h2>
                                        {craft.githubUrl && (
                                            <a 
                                                href={craft.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-500 hover:text-[#0B23FF] transition-colors"
                                            >
                                                <svg 
                                                    className="w-5 h-5" 
                                                    fill="currentColor" 
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                    
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {craft.description}
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            {craft.content}
                                        </p>
                                    </p>
                                </div>
                            </article>
                            
                            {index < sortedCrafted.length - 1 && (
                                <div className="h-[1px] bg-gray-200 w-full" />
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </main>
    )
}