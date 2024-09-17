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

export const fetchplantrecommendation = query({
  args: {email:v.string()},
  handler: async (ctx,{email}) => {
    try{
      const existingUser = await ctx.db.query("plant_recommendation")
      .filter((q) => q.eq(q.field("email"), email))
      .first();
  
      if (existingUser) {
        return existingUser.output;
      }
      else{
        return "Please Click the button below to get your crop recommendation";
      }
    }catch(error){
      console.error("Error fetching plant recommendation: ", error);
      throw new Error("Failed to fetch plant recommendation.");
    }
  },
});


export const fetchfertrecommendation = query({
  args: {email:v.string()},
  handler: async (ctx,{email}) => {
    try{
      const existingUser = await ctx.db.query("fertilizer_recommendation")
      .filter((q) => q.eq(q.field("email"), email))
      .first();
  
      if (existingUser) {
        return existingUser.output;
      }
      else{
        return "Please fill out the form above and click the button to get your fertilizer recommendation. All recommendations are based on collected real-time data.";
      }
    }catch(error){
      console.error("Error fetching fertilizer recommendation: ", error);
      throw new Error("Failed to fetch fertilizer recommendation.");
    }
  },
});

export const fetchpestrecommendation = query({
  args: {email:v.string()},
  handler: async (ctx,{email}) => {
    try{
      const existingUser = await ctx.db.query("pest_recommendation")
      .filter((q) => q.eq(q.field("email"), email))
      .first();
  
      if (existingUser) {
        return existingUser.output;
      }
      else{
        return "Please Click the button below to get your pest control recommendation";
      }
    }catch(error){
      console.error("Error fetching pest recommendation: ", error);
      throw new Error("Failed to fetch pest recommendation.");
    }
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

export const plantrecommendation = mutation({
  args: { name: v.string(), email: v.string(), output: v.string() },
  handler: async (ctx, { name, email, output }) => {
    try {
      const existingUser = await ctx.db.query("plant_recommendation")
        .filter((q) => q.eq(q.field("email"), email))
        .first();

      if (existingUser) {
        const updatedTaskId = await ctx.db.patch(existingUser._id, {
          output
        });
        console.log('User updated with new output');
        return updatedTaskId;
      } else {
        const newTaskId = await ctx.db.insert("plant_recommendation", {
          name,
          email,
          output,
        });
        console.log('New user added');
        return newTaskId;
      }
    } catch (error) {
      console.error("Error updating or inserting data into the database:", error);
      throw new Error("Failed to create or update recommendation");
    }
  },
});


export const fertlizerrecommendation = mutation({
  args: { name: v.string(), email: v.string(), cropname:v.string(), price:v.string() , type:v.string() , output: v.string() },
  handler: async (ctx, { name, email, cropname , price , type, output }) => {
    try {
      const existingUser = await ctx.db.query("fertilizer_recommendation")
        .filter((q) => q.eq(q.field("email"), email))
        .first();

      if (existingUser) {
        const updatedTaskId = await ctx.db.patch(existingUser._id, {
          output
        });
        console.log('User updated with new output');
        return updatedTaskId;
      } else {
        const newTaskId = await ctx.db.insert("fertilizer_recommendation", {
          name,
          email,
          cropname,
          price,
          type,
          output,
        });
        console.log('New user added');
        return newTaskId;
      }
    } catch (error) {
      console.error("Error updating or inserting data into the database:", error);
      throw new Error("Failed to create or update recommendation");
    }
  },
});


export const pestrecommendation = mutation({
  args: { name: v.string(), email: v.string(), output: v.string() },
  handler: async (ctx, { name, email, output }) => {
    try {
      const existingUser = await ctx.db.query("pest_recommendation")
        .filter((q) => q.eq(q.field("email"), email))
        .first();

      if (existingUser) {
        const updatedTaskId = await ctx.db.patch(existingUser._id, {
          output
        });
        console.log('User updated with new output');
        return updatedTaskId;
      } else {
        const newTaskId = await ctx.db.insert("pest_recommendation", {
          name,
          email,
          output,
        });
        console.log('New user added');
        return newTaskId;
      }
    } catch (error) {
      console.error("Error updating or inserting data into the database:", error);
      throw new Error("Failed to create or update recommendation");
    }
  },
});


