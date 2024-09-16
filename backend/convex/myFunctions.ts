import { query } from "./_generated/server";
import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const fetchAllDataFromSensor = query({
  args: {},
  handler: async (ctx) => {
    const data = await ctx.db.query("data_from_sensor").filter((q) => q.eq(q.field("device_id"), "ab01")).collect();
    return data;
  },
});

export const upsertSensorData = mutation({
  args: {
    device_id: v.string(),
    current_time: v.string(),
    current_humidity: v.float64(),
    current_light_intensity: v.float64(),
    current_soil_moisture: v.float64(),
    current_temperature: v.float64(),
    current_wind_speed: v.float64(),
    current_nitrogen: v.float64(),
    current_phosphorus: v.float64(),
    current_potassium: v.float64(),
    current_water_level: v.float64(),
    latitude: v.float64(),
    longitude: v.float64(),
    fire_status: v.string(),
    gas_status: v.string(),
    ph_value: v.string(),
    irrigation: v.string(),
    irrigation_time: v.string(),
    previous_time: v.string(),
    previous_humidity: v.float64(),
    previous_light_intensity: v.float64(),
    previous_soil_moisture: v.float64(),
    previous_temperature: v.float64(),
    previous_wind_speed: v.float64(),
    previous_nitrogen: v.float64(),
    previous_phosphorus: v.float64(),
    previous_potassium: v.float64(),
    previous_water_level: v.float64(),
    previous1_time: v.string(),
    previous1_humidity: v.float64(),
    previous1_light_intensity: v.float64(),
    previous1_soil_moisture: v.float64(),
    previous1_temperature: v.float64(),
    previous1_wind_speed: v.float64(),
    previous1_nitrogen: v.float64(),
    previous1_phosphorus: v.float64(),
    previous1_potassium: v.float64(),
    previous1_water_level: v.float64(),
    previous2_time: v.string(),
    previous2_humidity: v.float64(),
    previous2_light_intensity: v.float64(),
    previous2_soil_moisture: v.float64(),
    previous2_temperature: v.float64(),
    previous2_wind_speed: v.float64(),
    previous2_nitrogen: v.float64(),
    previous2_phosphorus: v.float64(),
    previous2_potassium: v.float64(),
    previous2_water_level: v.float64(),
    previous3_time: v.string(),
    previous3_humidity: v.float64(),
    previous3_light_intensity: v.float64(),
    previous3_soil_moisture: v.float64(),
    previous3_temperature: v.float64(),
    previous3_wind_speed: v.float64(),
    previous3_nitrogen: v.float64(),
    previous3_phosphorus: v.float64(),
    previous3_potassium: v.float64(),
    previous3_water_level: v.float64(),
    previous4_time: v.string(),
    previous4_humidity: v.float64(),
    previous4_light_intensity: v.float64(),
    previous4_soil_moisture: v.float64(),
    previous4_temperature: v.float64(),
    previous4_wind_speed: v.float64(),
    previous4_nitrogen: v.float64(),
    previous4_phosphorus: v.float64(),
    previous4_potassium: v.float64(),
    previous4_water_level: v.float64(),
    previous5_time: v.string(),
    previous5_humidity: v.float64(),
    previous5_light_intensity: v.float64(),
    previous5_soil_moisture: v.float64(),
    previous5_temperature: v.float64(),
    previous5_wind_speed: v.float64(),
    previous5_nitrogen: v.float64(),
    previous5_phosphorus: v.float64(),
    previous5_potassium: v.float64(),
    previous5_water_level: v.float64(),
  },
  handler: async (ctx, {
    device_id,
    current_time,
    current_humidity,
    current_light_intensity,
    current_soil_moisture,
    current_temperature,
    current_wind_speed,
    current_nitrogen,
    current_phosphorus,
    current_potassium,
    current_water_level,
    latitude,
    longitude,
    fire_status,
    gas_status,
    ph_value,
    irrigation,
    irrigation_time,
    previous_time,
    previous_humidity,
    previous_light_intensity,
    previous_soil_moisture,
    previous_temperature,
    previous_wind_speed,
    previous_nitrogen,
    previous_phosphorus,
    previous_potassium,
    previous_water_level,
    previous1_time,
    previous1_humidity,
    previous1_light_intensity,
    previous1_soil_moisture,
    previous1_temperature,
    previous1_wind_speed,
    previous1_nitrogen,
    previous1_phosphorus,
    previous1_potassium,
    previous1_water_level,
    previous2_time,
    previous2_humidity,
    previous2_light_intensity,
    previous2_soil_moisture,
    previous2_temperature,
    previous2_wind_speed,
    previous2_nitrogen,
    previous2_phosphorus,
    previous2_potassium,
    previous2_water_level,
    previous3_time,
    previous3_humidity,
    previous3_light_intensity,
    previous3_soil_moisture,
    previous3_temperature,
    previous3_wind_speed,
    previous3_nitrogen,
    previous3_phosphorus,
    previous3_potassium,
    previous3_water_level,
    previous4_time,
    previous4_humidity,
    previous4_light_intensity,
    previous4_soil_moisture,
    previous4_temperature,
    previous4_wind_speed,
    previous4_nitrogen,
    previous4_phosphorus,
    previous4_potassium,
    previous4_water_level,
    previous5_time,
    previous5_humidity,
    previous5_light_intensity,
    previous5_soil_moisture,
    previous5_temperature,
    previous5_wind_speed,
    previous5_nitrogen,
    previous5_phosphorus,
    previous5_potassium,
    previous5_water_level,

  }) => {
    try {
      const existingUser = await ctx.db.query("data_from_sensor")
        .filter((q) => q.eq(q.field("device_id"), device_id))
        .first();

      if (existingUser) {
        const updatedTaskId = await ctx.db.patch(existingUser._id, {
          current_time,
          current_humidity,
          current_light_intensity,
          current_soil_moisture,
          current_temperature,
          current_wind_speed,
          current_nitrogen,
          current_phosphorus,
          current_potassium,
          current_water_level,
          latitude,
          longitude,
          fire_status,
          gas_status,
          ph_value,
          irrigation,
          irrigation_time,
          previous_time,
          previous_humidity,
          previous_light_intensity,
          previous_soil_moisture,
          previous_temperature,
          previous_wind_speed,
          previous_nitrogen,
          previous_phosphorus,
          previous_potassium,
          previous_water_level,
          previous1_time,
          previous1_humidity,
          previous1_light_intensity,
          previous1_soil_moisture,
          previous1_temperature,
          previous1_wind_speed,
          previous1_nitrogen,
          previous1_phosphorus,
          previous1_potassium,
          previous1_water_level,
          previous2_time,
          previous2_humidity,
          previous2_light_intensity,
          previous2_soil_moisture,
          previous2_temperature,
          previous2_wind_speed,
          previous2_nitrogen,
          previous2_phosphorus,
          previous2_potassium,
          previous2_water_level,
          previous3_time,
          previous3_humidity,
          previous3_light_intensity,
          previous3_soil_moisture,
          previous3_temperature,
          previous3_wind_speed,
          previous3_nitrogen,
          previous3_phosphorus,
          previous3_potassium,
          previous3_water_level,
          previous4_time,
          previous4_humidity,
          previous4_light_intensity,
          previous4_soil_moisture,
          previous4_temperature,
          previous4_wind_speed,
          previous4_nitrogen,
          previous4_phosphorus,
          previous4_potassium,
          previous4_water_level,
          previous5_time,
          previous5_humidity,
          previous5_light_intensity,
          previous5_soil_moisture,
          previous5_temperature,
          previous5_wind_speed,
          previous5_nitrogen,
          previous5_phosphorus,
          previous5_potassium,
          previous5_water_level,

        });
        console.log('User updated with new output');
        return updatedTaskId;
      } else {
        const newTaskId = await ctx.db.insert("data_from_sensor", {
          device_id,
          current_time,
          current_humidity,
          current_light_intensity,
          current_soil_moisture,
          current_temperature,
          current_wind_speed,
          current_nitrogen,
          current_phosphorus,
          current_potassium,
          current_water_level,
          latitude,
          longitude,
          fire_status,
          gas_status,
          ph_value,
          irrigation,
          irrigation_time,
          previous_time,
          previous_humidity,
          previous_light_intensity,
          previous_soil_moisture,
          previous_temperature,
          previous_wind_speed,
          previous_nitrogen,
          previous_phosphorus,
          previous_potassium,
          previous_water_level,
          previous1_time,
          previous1_humidity,
          previous1_light_intensity,
          previous1_soil_moisture,
          previous1_temperature,
          previous1_wind_speed,
          previous1_nitrogen,
          previous1_phosphorus,
          previous1_potassium,
          previous1_water_level,
          previous2_time,
          previous2_humidity,
          previous2_light_intensity,
          previous2_soil_moisture,
          previous2_temperature,
          previous2_wind_speed,
          previous2_nitrogen,
          previous2_phosphorus,
          previous2_potassium,
          previous2_water_level,
          previous3_time,
          previous3_humidity,
          previous3_light_intensity,
          previous3_soil_moisture,
          previous3_temperature,
          previous3_wind_speed,
          previous3_nitrogen,
          previous3_phosphorus,
          previous3_potassium,
          previous3_water_level,
          previous4_time,
          previous4_humidity,
          previous4_light_intensity,
          previous4_soil_moisture,
          previous4_temperature,
          previous4_wind_speed,
          previous4_nitrogen,
          previous4_phosphorus,
          previous4_potassium,
          previous4_water_level,
          previous5_time,
          previous5_humidity,
          previous5_light_intensity,
          previous5_soil_moisture,
          previous5_temperature,
          previous5_wind_speed,
          previous5_nitrogen,
          previous5_phosphorus,
          previous5_potassium,
          previous5_water_level
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


export const fetchAllData = query({
  args: { device_id: v.string() },
  handler: async (ctx, { device_id }) => {
    const data = await ctx.db.query("data_from_sensor")
      .filter((q) => q.eq(q.field("device_id"), device_id))
      .collect();
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
  args: { name: v.string(), email: v.string(), cropname: v.string(), price: v.string(), type: v.string(), output: v.string() },
  handler: async (ctx, { name, email, cropname, price, type, output }) => {
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

