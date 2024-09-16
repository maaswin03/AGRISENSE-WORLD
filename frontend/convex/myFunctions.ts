import { query} from "./_generated/server";
import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const fetchAllDataFromSensor = query({
  args: {},
  handler: async (ctx) => {
    const data = await ctx.db.query("data_from_sensor").filter((q) => q.eq(q.field("device_id"), "ab01")).collect();
    return data;
  },
});

export const fetchplantdata = query({
  args: {},
  handler: async (ctx) => {
    const data = await ctx.db.query("plant_data").collect();
    return data;
  },
});

export const createTask = mutation({
  args: { name: v.string(), email: v.string() },
  handler: async (ctx, { name, email }) => {
    try {
      const existingUser = await ctx.db.query("user_data")
        .filter((q) => q.eq(q.field("email"), email))
        .first();
      
      if (existingUser) {
        console.log('User with this email already exists');
        return null;
      }

      const taskId = await ctx.db.insert("user_data", {
        name,
        email,
      });
      return taskId;
    } catch (error) {
      console.error("Error inserting data into the database:", error);
      throw new Error("Failed to create task");
    }
  },
});



