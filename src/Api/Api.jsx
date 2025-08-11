import axios from "axios";

export const fetchProjects = async () => {
  try {
    const response = await axios.get("/projectsData.json");
    if (!Array.isArray(response.data)) {
      throw new Error("Invalid data format: expected array");
    }
    return response.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};
