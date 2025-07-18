import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { baseApiURL } from "../../baseUrl";
import { FiSearch, FiLink, FiAward } from "react-icons/fi";
import Heading from "../../components/Heading";

const StudentsBySkill = () => {
  const [skill, setSkill] = useState("");
  const [students, setStudents] = useState([]);

  const searchBySkill = async (e) => {
    e.preventDefault();
    toast.loading("Searching students");
    
    try {
      const response = await axios.get(`${baseApiURL()}/student/details/by-skill?skill=${skill}`);
      toast.dismiss();
      
      if (response.data.success) {
        setStudents(response.data.students);
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.dismiss();
      toast.error(error.response?.data?.message || "Error searching students");
    }
  };

  return (
    <div className="w-full mx-auto mt-10 flex justify-center items-start flex-col mb-10">
      <div className="flex justify-between items-center w-full">
        <Heading title="Search Students by Skill" />
      </div>

      <div className="my-6 w-full">
        <form 
          className="flex justify-center items-center border-2 border-blue-500 rounded w-[40%] mx-auto"
          onSubmit={searchBySkill}
        >
          <input
            type="text"
            className="px-6 py-3 w-full outline-none"
            placeholder="Enter skill (e.g. JavaScript)"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
          />
          <button className="px-4 text-2xl hover:text-blue-500" type="submit">
            <FiSearch />
          </button>
        </form>

        <div className="mt-8">
          {students.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {students.map(({ studentInfo, projects }) => (
                <div key={studentInfo._id} className="bg-white p-6 rounded-lg shadow-md">
                  {/* Student Info */}
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={`${process.env.REACT_APP_MEDIA_LINK}/${studentInfo.profile}`}
                      alt={studentInfo.firstName}
                      className="h-16 w-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-semibold">
                        {studentInfo.firstName} {studentInfo.middleName} {studentInfo.lastName}
                      </h3>
                      <p className="text-gray-600">Enrollment: {studentInfo.enrollmentNo}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-gray-700">Branch: {studentInfo.branch}</p>
                    <p className="text-gray-700">Semester: {studentInfo.semester}</p>
                  </div>

                  {/* Projects Section */}
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold mb-3">Projects</h4>
                    <div className="space-y-4">
                      {projects.map((project, index) => (
                        <div key={index} className="bg-gray-50 p-4 rounded">
                          <h5 className="font-medium">{project.title}</h5>
                          <p className="text-sm text-gray-600 mb-2">Subject: {project.subject}</p>
                          
                          <div className="flex items-center mb-2">
                            <FiLink className="mr-2 text-blue-500" />
                            <a
                              href={project.projectUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-500 hover:text-blue-700 text-sm underline"
                            >
                              Project Link
                            </a>
                          </div>

                          <div className="flex flex-wrap gap-2 mb-2">
                            {project.skills.map((skill, idx) => (
                              <span
                                key={idx}
                                className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>

                          {project.certifications?.length > 0 && (
                            <div className="mt-2">
                              {project.certifications.map((cert, idx) => (
                                <div key={idx} className="flex items-center">
                                  <FiAward className="mr-2 text-green-500" />
                                  <a
                                    href={`${process.env.REACT_APP_MEDIA_LINK}/${cert.filename}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-green-600 hover:text-green-800 text-sm underline"
                                  >
                                    View Certificate {idx + 1}
                                  </a>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-10 bg-gray-50 rounded-lg">
              <p className="text-gray-600">
                {skill ? "No students found with this skill." : "Enter a skill to search students."}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentsBySkill;