import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema(
  {
    documents: defineTable({
      fieldOne: v.string(),
      fieldTwo: v.object({
        subFieldOne: v.array(v.number()),
      }),
    }),
    numbers: defineTable({
      value: v.number(),
    }),
    data_from_sensor: defineTable({
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
    }),
    plant_data: defineTable({ 
      avglifespan: v.string(),
      content: v.string(),
      humidity: v.float64(),
      plant: v.string(),
      soilmoisture: v.float64(),
      temprature: v.float64()
    }),
    plant_environmental_data: defineTable({
      Crop: v.string(),
      Disease: v.string(),
      Humidity: v.float64(),
      Nitrogen: v.float64(),
      Phosphorus: v.float64(),
      Potassium: v.float64(),
      Rainfall: v.float64(),
      Temperature: v.float64(),
      pH_Value: v.float64(),
    }),
    user_data: defineTable({
      name: v.string(),
      email: v.string(),
    }),
  },
  {
    schemaValidation: true,
  }
);
