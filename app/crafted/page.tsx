import Navbar from '../components/ui/NavBar'
import Clock from '../components/Clock'
import React from 'react'
import AnimatedArticleSection from '../components/animations/ArticleSectionAnimation'
import Dock from '../components/ui/Dock'


interface Crafted {
    title: string
    description: string
    date: string
    slug: string
    content: string[]
    status: string
    githubUrl?: string
    tags?: string[]
}

const crafted: Crafted[] = [
    {
        title: "Noodl",
        description: "Started with curiosity. Became a tool for thinking out loud.",
        content: [
            "NOODL started as a playful experiment — a personal dive into React Flow, Supabase, and Next.js to explore the creative power of graphs and visual thinking.",
            "I didn't plan to build a full platform. I just wanted to see what would happen if I mixed mind-mapping, AI, and a bit of flow-based design — no pressure, just curiosity.",
            "It quickly turned into NOODL: an AI-augmented mind-mapping tool where ideas grow visually, nodes think with you, and collaboration feels natural.",
            "Inspired by tools like Miro and XMind, it's built for creatives, designers, and teams who love structure without rigidity.",
            "Still Evolving. Still learning. Still Noodling."
        ],
        date: "2025-05-12",
        slug: "noodl",
        status: "active",
        githubUrl: "https://www.noodl.world/",
        tags: [ "Mind-Mapping", "Node-based Thinking", "Context-Aware", "Visual Thinking", "Collaboration" , "React Flow" , "Supabase", "Design Engineering" , "LLM" , "OpenAI"]
    },
    {
        title: "Gomon",
        description: "Gomon started as a simple experiment :",
        content: [
            "I wanted to understand how to monitor Go applications in a clean, efficient, and self-hosted way — without relying on heavy external services.",
            "So I built Gomon, a lightweight monitoring tool that exposes key metrics (latency, memory, goroutines, error rates) through HTTP endpoints, with native Prometheus support and built-in pprof profiling."
        ],
        date: "2025-03-01",
        slug: "gomon",
        status: "active",
        githubUrl: "https://github.com/salignatmoandal/gomon",
        tags: ["Monitoring", "Go", "Prometheus", "pprof" , "Self-hosted" , "Lightweight" , "Observability" , "Metrics" ]
    },
    {
        title: "TerraLambda",
        description: "TerraLambda started as a hands-on project to explore the world of cloud infrastructure :",
        content: [
            "I wanted to learn how to work with AWS, write real-world tools in Go, and understand how Terraform and the Cobra CLI could power developer workflows.",
            "What began as a technical curiosity turned into TerraLambda : a lightweight tool to deploy and manage AWS Lambda functions using Go + Terraform, designed to make serverless deployments smoother, more consistent, and easier to automate",
            "It's minimal, self-contained, and made to help developers gain visibility into their Go apps — fast.",
            "No dashboards. No fluff. Just observability where it matters."
        ],
        date: "2025-02-11",
        slug: "terralambda",
        status: "active",
        githubUrl: "https://github.com/salignatmoandal/terraLambda",
        tags: ["Cloud", "Lambda", "Serverless", "AWS", "IAM", "Terraform", "Orchestration" , "Deployment"]
    },
    {
        title: "MailGo",
        description: "MailGo started as a playground to explore how AI could help reduce email overload.",
        content: [
            "I wanted to experiment with Python, NLP, task queues (Celery), and Redis — and see how it all could come together in a real-world use case.",
            "So I built MailGo, an AI-powered Gmail extension that drafts smart replies, manages threads contextually, and suggests actions — all directly inside the inbox.",
            "Behind the scenes, it uses natural language processing, background workers, and a fast API layer to deliver quick and relevant suggestions, powered by OpenAI and deployed on GCP",
            "It's part productivity boost, part personal lab — where I learned to orchestrate AI services, handle async processing, and build something useful.",
            "Still rough, but it works. And that's the best part."
        ],
        date: "2025-04-05",
        slug: "mailgo",
        status: "inactive",
        githubUrl: "https://github.com/salignatmoandal/MailGo",
        tags: [ "NLP","SMTP", "Async Tasks", "Productivity", "Gmail Extension", "Thread Analysis", "Broker" ,"Worker" , "Celery" , "Redis" , "OpenAI"]
    },
    {
        title: "Rayon",
        description: "Rayon began as the final-year project of a designer friend —a way for me to dive into speech recognition, audio processing, and natural language understanding through a unified system.",
        content: [
            "I wanted to understand how to capture voice, transcribe it, analyze the text, and enrich the context with location-based services.",
            "So I built Rayon: a modular platform that records audio, performs speech-to-text, applies NLP for meaning extraction, and uses geocoding to ground interactions in the real world.",
            "It's still experimental, but through it I learned a lot — about voice pipelines, context-aware systems, and what it takes to craft intuitive, voice-first experiences"
        ],
        date: "2025-01-09",
        slug: "rayon",
        status: "active",
        githubUrl: "https://github.com/salignatmoandal/rayon",
        tags: ["Speech Recognition", "Audio Processing", "Noise reduction", "Text Analysis", "Location-Based Services" , "Whisper", "NER-ds", "dslim/bert-base-NER"]
    },
  
]

export default function CraftedPage() {
    const sortedCrafted = [...crafted].sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
    })

    return (
        <main className="flex min-h-screen items-center justify-center bg-[var(--background)] px-6  mt-10 mb-10">
            <div className="max-w-2xl w-full flex flex-col gap-6">
                <Navbar className="mb-5 self-center rounded-b-md" />
                <Dock />
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
                                        <h2 className="text-xl italic font-medium text-[#0B23FF] group-hover:underline">
                                            {craft.title}
                                        </h2>
                                        <div 
                                            className={`w-2 h-2 rounded-full ${
                                                craft.status === 'active' 
                                                    ? 'bg-green-500' 
                                                    : 'bg-red-500'
                                            }`}
                                            title={craft.status === 'active' ? 'Projet actif' : 'Projet inactif'}
                                        />
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
                                    
                                    <div className="flex flex-col gap-4">
                                        <p className="text-gray-400 text-base leading-relaxed">
                                            {craft.description}
                                        </p>
                                        {craft.content.map((paragraph, index) => (
                                            <p key={index} className="text-gray-400 text-base leading-relaxed">
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {craft.tags?.map(tag => (
                                            <span 
                                                key={tag} 
                                                className="px-3 py-1 text-sm border border-[#0B23FF] rounded-full text-[#0B23FF]"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
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