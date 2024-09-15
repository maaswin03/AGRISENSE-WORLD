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
      device_id: v.string(), // Unique identifier for the device
      current_time: v.string(), // Time of the current data record
      current_humidity: v.float64(), // Current humidity level
      current_light_intensity: v.float64(), // Current light intensity level
      current_soil_moisture: v.float64(), // Current soil moisture level
      current_temperature: v.float64(), // Current temperature
      current_wind_speed: v.float64(), // Current wind speed
      current_nitrogen: v.float64(), // Current nitrogen level
      current_phosphorus: v.float64(), // Current phosphorus level
      current_potassium: v.float64(), // Current potassium level
      current_water_level: v.float64(), // Current water level
      latitude: v.float64(), // Latitude of the sensor location
      longitude: v.float64(), // Longitude of the sensor location
      fire_status: v.string(), // Fire detection status (string, e.g., "0" or "1")
      gas_status: v.string(), // Gas detection status (string, e.g., "0" or "1")
      ph_value: v.string(), // pH level as a string
      irrigation: v.string(), // Irrigation status as a string
      irrigation_time: v.string(), // Time when irrigation was triggered
      // Previous records
      previous_time: v.string(), // Time of the previous data record
      previous_humidity: v.float64(), // Humidity from the previous record
      previous_light_intensity: v.float64(), // Light intensity from the previous record
      previous_soil_moisture: v.float64(), // Soil moisture from the previous record
      previous_temperature: v.float64(), // Temperature from the previous record
      previous_wind_speed: v.float64(), // Wind speed from the previous record
      previous_nitrogen: v.float64(), // Nitrogen from the previous record
      previous_phosphorus: v.float64(), // Phosphorus from the previous record
      previous_potassium: v.float64(), // Potassium from the previous record
      previous_water_level: v.float64(), // Water level from the previous record
      // Previous records with different timestamps
      previous1_time: v.string(), // Time of the previous1 data record
      previous1_humidity: v.float64(), // Humidity from the previous1 record
      previous1_light_intensity: v.float64(), // Light intensity from the previous1 record
      previous1_soil_moisture: v.float64(), // Soil moisture from the previous1 record
      previous1_temperature: v.float64(), // Temperature from the previous1 record
      previous1_wind_speed: v.float64(), // Wind speed from the previous1 record
      previous1_nitrogen: v.float64(), // Nitrogen from the previous1 record
      previous1_phosphorus: v.float64(), // Phosphorus from the previous1 record
      previous1_potassium: v.float64(), // Potassium from the previous1 record
      previous1_water_level: v.float64(), // Water level from the previous1 record
      previous2_time: v.string(), // Time of the previous2 data record
      previous2_humidity: v.float64(), // Humidity from the previous2 record
      previous2_light_intensity: v.float64(), // Light intensity from the previous2 record
      previous2_soil_moisture: v.float64(), // Soil moisture from the previous2 record
      previous2_temperature: v.float64(), // Temperature from the previous2 record
      previous2_wind_speed: v.float64(), // Wind speed from the previous2 record
      previous2_nitrogen: v.float64(), // Nitrogen from the previous2 record
      previous2_phosphorus: v.float64(), // Phosphorus from the previous2 record
      previous2_potassium: v.float64(), // Potassium from the previous2 record
      previous2_water_level: v.float64(), // Water level from the previous2 record
      previous3_time: v.string(), // Time of the previous3 data record
      previous3_humidity: v.float64(), // Humidity from the previous3 record
      previous3_light_intensity: v.float64(), // Light intensity from the previous3 record
      previous3_soil_moisture: v.float64(), // Soil moisture from the previous3 record
      previous3_temperature: v.float64(), // Temperature from the previous3 record
      previous3_wind_speed: v.float64(), // Wind speed from the previous3 record
      previous3_nitrogen: v.float64(), // Nitrogen from the previous3 record
      previous3_phosphorus: v.float64(), // Phosphorus from the previous3 record
      previous3_potassium: v.float64(), // Potassium from the previous3 record
      previous3_water_level: v.float64(), // Water level from the previous3 record
      previous4_time: v.string(), // Time of the previous4 data record
      previous4_humidity: v.float64(), // Humidity from the previous4 record
      previous4_light_intensity: v.float64(), // Light intensity from the previous4 record
      previous4_soil_moisture: v.float64(), // Soil moisture from the previous4 record
      previous4_temperature: v.float64(), // Temperature from the previous4 record
      previous4_wind_speed: v.float64(), // Wind speed from the previous4 record
      previous4_nitrogen: v.float64(), // Nitrogen from the previous4 record
      previous4_phosphorus: v.float64(), // Phosphorus from the previous4 record
      previous4_potassium: v.float64(), // Potassium from the previous4 record
      previous4_water_level: v.float64(), // Water level from the previous4 record
      previous5_time: v.string(), // Time of the previous5 data record
      previous5_humidity: v.float64(), // Humidity from the previous5 record
      previous5_light_intensity: v.float64(), // Light intensity from the previous5 record
      previous5_soil_moisture: v.float64(), // Soil moisture from the previous5 record
      previous5_temperature: v.float64(), // Temperature from the previous5 record
      previous5_wind_speed: v.float64(), // Wind speed from the previous5 record
      previous5_nitrogen: v.float64(), // Nitrogen from the previous5 record
      previous5_phosphorus: v.float64(), // Phosphorus from the previous5 record
      previous5_potassium: v.float64(), // Potassium from the previous5 record
      previous5_water_level: v.float64(), // Water level from the previous5 record
    })
  },
  {
    schemaValidation: true,
  }
);
