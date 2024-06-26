import { formatDate } from '@/services/date'
import { Project as ProjectType } from '@/types/project'

type ProjectProps = {
  project: ProjectType
}
export default function Project({ project }: ProjectProps) {
  return (
    <div className="flex flex-col justify-center items-center gap-1 border border-2 border-primaryGreen p-2 rounded mb-2 overflow-hidden p-2 lg:px-2">
      <p className="font-bold underline">{project.name}</p>
      <p className="text-primaryGreen font-bold">
        {project.description}
      </p>
      <p>Language: {project.language}</p>
      <p>Last updated: {formatDate(project.updated_at)}</p>
      <p>Stars: {project.stargazers_count}</p>
      <div className="flex flex-col gap-1">

        {project.topics.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-1">
            {project.topics.map((topic: string) => (
              <div
                key={topic}
                className="inline-block bg-primaryGreen hover:bg-green-600 text-white font-bold py-1 px-2 rounded"
              >
                {topic}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-primaryGreen font-bold">
            Technologies are not specified
          </p>
        )}
      </div>
      <div>
        {project.homepage ? (
          <a href={project.homepage} target="_blank">
            <button className="border border-primaryGreen font-bold py-1 px-2 rounded mb-2">
              See deployment
            </button>
          </a>
        ) : (
          'Not deployed'
        )}
      </div>
      <a href={project.html_url} target="_blank">
        <button className="inline-block bg-primaryGreen hover:bg-green-600 text-white font-bold py-1 px-2 rounded mb-2">
          See project on Github
        </button>
      </a>
    </div>
  )
}
