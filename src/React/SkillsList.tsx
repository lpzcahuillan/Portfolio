import React, { useState } from "react";

const CategoryIcons = {
  "Backend Development": (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#a476ff" d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm1 2v14h16V5H4Zm16 7l-3.535 3.536l-1.415-1.415L17.172 12L15.05 9.879l1.415-1.415L20 12ZM6.828 12l2.122 2.121l-1.414 1.415L4 12l3.536-3.536L8.95 9.88L6.828 12Zm4.416 5H9.116l3.64-10h2.128l-3.64 10Z" /></svg>
  ),
  "Data Engineering": (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#a476ff" d="M20 6c0-2.168-3.663-4-8-4S4 3.832 4 6v2c0 2.168 3.663 4 8 4s8-1.832 8-4V6zm-8 13c-4.337 0-8-1.832-8-4v3c0 2.168 3.663 4 8 4s8-1.832 8-4v-3c0 2.168-3.663 4-8 4z" /><path fill="#a476ff" d="M20 10c0 2.168-3.663 4-8 4s-8-1.832-8-4v3c0 2.168 3.663 4 8 4s8-1.832 8-4v-3z" /></svg>
  ),
  "Cloud & Infrastructure": (
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#a476ff" d="M23.505 17.503h-2v2h2zm-5.001 4.001h-2v2h2zm2-4v1h-2v-1h-1v-3.001h1v2h1v1zm-4.001 2v1h-2v-1h-1v-5.001h1v4h1v1.001zm-5.001-5.001v5.001h-1v1h-2v-1h1v-1h1v-4.001zm-3 7.001h-2v2h2zm-1.001-7.001v3h-1v1h-2v-1h1v-1h1v-2zm15.004-7.002v-1h-1v-1h-2v-2h-1.001v-1h-1V1.5h-5.002v1h-1v1h-1v1h-1v-1h-3v1H5.5v1h-1v2.001h-2v1h-1v3.001h1v1h1v1h18.005v-1h1v-1h1v-4zm-8.002 3.001v-1h-1v-2h1v1h1V5.5h1v3h1v-1h1v2h-1v1.001h-1v1h-1v-1zm-4.001-4v1h1v2h-1v-1h-1v3h-1v-3h-1v1h-1v-2h1v-1h1V5.5h1v1zM3.5 17.503h-2v2h2z" /></svg>
  ),
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const skills = {
    "Backend Development": [
      "RESTful APIs and microservices",
      "Database design and optimization",
      "Server-side application development",
    ],
    "Data Engineering": [
      "ETL/ELT pipelines and data workflows",
      "Data warehousing and lake architecture",
      "Big data processing and analytics",
    ],
    "Cloud & Infrastructure": [
      "Cloud deployment (AWS, GCP, Azure)",
      "DevOps and CI/CD pipelines",
      "Containerization with Docker & Kubernetes",
    ],
  };

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="text-left pt-3 md:pt-9">
      <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6">
        What I do?
      </h3>
      <ul className="space-y-4 mt-4 text-lg">
        {Object.entries(skills).map(([category, items]) => (
          <li key={category} className="w-full">
            <div
              onClick={() => toggleItem(category)}
              className="md:w-[400px] w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden"
            >
              <div className="flex items-center gap-3 p-4">
                {CategoryIcons[category]}
                <div className="flex items-center gap-2 flex-grow justify-between">
                  <div className="min-w-0 max-w-[200px] md:max-w-none overflow-hidden">
                    <span className="block truncate text-[var(--white)] text-lg">
                      {category}
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-6 h-6 text-[var(--white)] transform transition-transform flex-shrink-0 ${openItem === category ? "rotate-180" : ""
                      }`}
                  >
                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                  </svg>
                </div>
              </div>

              <div
                className={`transition-all duration-300 px-4 ${openItem === category
                  ? "max-h-[500px] pb-4 opacity-100"
                  : "max-h-0 opacity-0"
                  }`}
              >
                <ul className="space-y-2 text-[var(--white-icon)] text-sm">
                  {items.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <span className="pl-1">•</span>
                      <li className="pl-3">{item}</li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
