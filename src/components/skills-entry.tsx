import React from "react";
import { skillsData, SkillCategory } from "@/data/skills";

export const SkillsEntry: React.FC<{ skills?: SkillCategory[] }> = ({ skills = skillsData }) => {
  return (
    <div className="space-y-6">
      {skills.map((category) => (
        <div key={category.title}>
          <h3 className="text-sm font-semibold text-zinc-700 uppercase tracking-wide mb-2">
            {category.title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-sm text-zinc-800 bg-white rounded-md shadow-sm border border-zinc-100 hover:shadow-md transition-shadow duration-150"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
