// import { v } from "convex/values"; // Uncomment if needed
import { query } from "./_generated/server";
// import { api } from "./_generated/api"; // Uncomment if needed

export const fetchAllDataFromSensor = query({
  args: {},
  handler: async (ctx) => {
    try {
      // Ensure "data_from_sensor" is the correct collection name
      const data = await ctx.db.query("data_from_sensor").collect();
      return data;
    } catch (error) {
      // Handle any errors that occur during the query
      console.error("Error fetching data from sensor:", error);
      throw new Error("Failed to fetch data from sensor");
    }
  },
});
