import { ConvexHttpClient } from "convex/browser";
import { api } from "./convex/_generated/api.js";
import datetime from "node-datetime";
import {queryEmbeddings} from './convex/queryEmbeddings.js';
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import multer from "multer";
import path from "path";
import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";
import cors from "cors";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

const app = express();

app.use(cors());
app.use(express.json());

const httpClient = new ConvexHttpClient(
  "https://cheerful-mule-131.convex.cloud"
);

async function fetchData() {
  try {
    const d1 = await httpClient.query(api.myFunctions.fetchAllDataFromSensor);
    const data = d1[0];
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();

app.post('/chatbot', async (req, res) => {
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
  const prompt = req.body.prompt;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();
    const queryVector = await getVectorFromText(text);

    const vectorSearchResult = await queryEmbeddings(queryVector);

    console.log('Generated Text:', text);
    console.log('Vector Search Results:', vectorSearchResult);

    res.json({ text, vectorSearchResult });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred', error: error.message });
  }
});


app.post("/api/data22", async (req, res) => {
  const d1 = await httpClient.query(api.myFunctions.fetchAllDataFromSensor);
  const previous_data = d1[0];
  console.log(previous_data)
  const mutateSomething = async (
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
  ) => {
    try {
      await httpClient.mutation(api.myFunctions.upsertSensorData, {
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
      });
      console.log(`Mutation called with device_id: {device_id}`);
    } catch (err) {
      console.error(`Error in mutation: ${err.message}`);
      throw err;
    }
  };

  const data = req.body;
  const {
    device_id,
    temperature,
    humidity,
    light_intensity,
    soil_moisture,
    wind_speed,
    nitrogen,
    phosphorus,
    potassium,
    water_level,
    fire_status,
    gas_status,
    ph_value,
    irrigation,
    irrigation_time,
    latitude,
    longitude,
  } = data;

  const current_time = datetime.create().format("Y-m-d H:M:S");

  try {

    const convertToFloat = (value) => parseFloat(value) || 0.0;
    const convertToString = (value) => value || "";

    await mutateSomething({
      device_id: convertToString(device_id),
      latitude: convertToFloat(latitude),
      longitude: convertToFloat(longitude),
      current_temperature: convertToFloat(temperature),
      current_humidity: convertToFloat(humidity),
      current_light_intensity: convertToFloat(light_intensity),
      current_soil_moisture: convertToFloat(soil_moisture),
      current_wind_speed: convertToFloat(wind_speed),
      current_nitrogen: convertToFloat(nitrogen),
      current_phosphorus: convertToFloat(phosphorus),
      current_potassium: convertToFloat(potassium),
      current_water_level: convertToFloat(water_level),
      current_time: convertToString(current_time),
      fire_status: convertToString(fire_status),
      gas_status: convertToString(gas_status),
      ph_value: convertToString(ph_value),
      irrigation: convertToString(irrigation),
      irrigation_time: convertToString(irrigation_time),

      previous_temperature: convertToFloat(previous_data.current_temperature),
      previous_humidity: convertToFloat(previous_data.current_humidity),
      previous_light_intensity: convertToFloat(
        previous_data.current_light_intensity
      ),
      previous_soil_moisture: convertToFloat(
        previous_data.current_soil_moisture
      ),
      previous_wind_speed: convertToFloat(previous_data.current_wind_speed),
      previous_nitrogen: convertToFloat(previous_data.current_nitrogen),
      previous_phosphorus: convertToFloat(previous_data.current_phosphorus),
      previous_potassium: convertToFloat(previous_data.current_potassium),
      previous_water_level: convertToFloat(previous_data.current_water_level),
      previous_time: convertToString(previous_data.current_time),

      previous1_temperature: convertToFloat(previous_data.previous_temperature),
      previous1_humidity: convertToFloat(previous_data.previous_humidity),
      previous1_light_intensity: convertToFloat(
        previous_data.previous_light_intensity
      ),
      previous1_soil_moisture: convertToFloat(
        previous_data.previous_soil_moisture
      ),
      previous1_wind_speed: convertToFloat(previous_data.previous_wind_speed),
      previous1_nitrogen: convertToFloat(previous_data.previous_nitrogen),
      previous1_phosphorus: convertToFloat(previous_data.previous_phosphorus),
      previous1_potassium: convertToFloat(previous_data.previous_potassium),
      previous1_water_level: convertToFloat(previous_data.previous_water_level),
      previous1_time: convertToString(previous_data.previous_time),

      previous2_temperature: convertToFloat(
        previous_data.previous1_temperature
      ),
      previous2_humidity: convertToFloat(previous_data.previous1_humidity),
      previous2_light_intensity: convertToFloat(
        previous_data.previous1_light_intensity
      ),
      previous2_soil_moisture: convertToFloat(
        previous_data.previous1_soil_moisture
      ),
      previous2_wind_speed: convertToFloat(previous_data.previous1_wind_speed),
      previous2_nitrogen: convertToFloat(previous_data.previous1_nitrogen),
      previous2_phosphorus: convertToFloat(previous_data.previous1_phosphorus),
      previous2_potassium: convertToFloat(previous_data.previous1_potassium),
      previous2_water_level: convertToFloat(
        previous_data.previous1_water_level
      ),
      previous2_time: convertToString(previous_data.previous1_time),
      previous3_temperature: convertToFloat(
        previous_data.previous2_temperature
      ),
      previous3_humidity: convertToFloat(previous_data.previous2_humidity),
      previous3_light_intensity: convertToFloat(
        previous_data.previous2_light_intensity
      ),
      previous3_soil_moisture: convertToFloat(
        previous_data.previous2_soil_moisture
      ),
      previous3_wind_speed: convertToFloat(previous_data.previous2_wind_speed),
      previous3_nitrogen: convertToFloat(previous_data.previous2_nitrogen),
      previous3_phosphorus: convertToFloat(previous_data.previous2_phosphorus),
      previous3_potassium: convertToFloat(previous_data.previous2_potassium),
      previous3_water_level: convertToFloat(
        previous_data.previous2_water_level
      ),
      previous3_time: convertToString(previous_data.previous2_time),

      previous4_temperature: convertToFloat(
        previous_data.previous3_temperature
      ),
      previous4_humidity: convertToFloat(previous_data.previous3_humidity),
      previous4_light_intensity: convertToFloat(
        previous_data.previous3_light_intensity
      ),
      previous4_soil_moisture: convertToFloat(
        previous_data.previous3_soil_moisture
      ),
      previous4_wind_speed: convertToFloat(previous_data.previous3_wind_speed),
      previous4_nitrogen: convertToFloat(previous_data.previous3_nitrogen),
      previous4_phosphorus: convertToFloat(previous_data.previous3_phosphorus),
      previous4_potassium: convertToFloat(previous_data.previous3_potassium),
      previous4_water_level: convertToFloat(
        previous_data.previous3_water_level
      ),
      previous4_time: convertToString(previous_data.previous3_time),

      previous5_temperature: convertToFloat(
        previous_data.previous4_temperature
      ),
      previous5_humidity: convertToFloat(previous_data.previous4_humidity),
      previous5_light_intensity: convertToFloat(
        previous_data.previous4_light_intensity
      ),
      previous5_soil_moisture: convertToFloat(
        previous_data.previous4_soil_moisture
      ),
      previous5_wind_speed: convertToFloat(previous_data.previous4_wind_speed),
      previous5_nitrogen: convertToFloat(previous_data.previous4_nitrogen),
      previous5_phosphorus: convertToFloat(previous_data.previous4_phosphorus),
      previous5_potassium: convertToFloat(previous_data.previous4_potassium),
      previous5_water_level: convertToFloat(
        previous_data.previous4_water_level
      ),
      previous5_time: convertToString(previous_data.previous4_time),
    });

    res.status(200).send("Data saved successfully");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error saving data");
  }
});

app.post("/cropai", async (req, res) => {
  try {
    const d1 = await httpClient.query(api.myFunctions.fetchAllDataFromSensor);
    const data = d1[0];

    if (data) {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const prompt = `
        Temperature: ${data.current_temperature}
        Humidity: ${data.current_humidity}
        Light Intensity: ${data.current_light_intensity}
        Soil Moisture: ${data.current_soil_moisture}
        Wind Speed: ${data.current_wind_speed}
        Time: ${data.current_time}
        Nitrogen: ${data.current_nitrogen}
        Phosphorus: ${data.current_phosphorus}
        Potassium: ${data.current_potassium}
        Water Level: ${data.current_water_level}
        Based on these conditions, recommend suitable crops and mention how to grow the crop and the time period to grow the crop.
      `;

      try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = await response.text();

        const queryVector = await getVectorFromText(text);

        const vectorSearchResult = await queryEmbeddings(queryVector);
    
        console.log('Generated Text:', text);
        console.log('Vector Search Results:', vectorSearchResult);
    
        res.json({ text, vectorSearchResult });
      } catch (error) {
        res.status(500).json({
          message: "An error occurred while generating content",
          error: error.message,
        });
      }
    } else {
      res.status(404).json({ message: "Data not found for this device_id" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
});

app.post("/cropfertilizer", async (req, res) => {
  const device_id = "ab01";

  try {
    const data = await collection.findOne({ device_id: device_id });

    if (data) {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const prompt = `
        Temperature: ${data.current_temperature}
        Humidity: ${data.current_humidity}
        Light Intensity: ${data.current_light_intensity}
        Soil Moisture: ${data.current_soil_moisture}
        Nitrogen: ${data.current_nitrogen}
        Phosphorus: ${data.current_phosphorus}
        Potassium: ${data.current_potassium}
        ${req.body.prompt}
        Based on these conditions, recommend suitable crop fertilizer and tell how to use it.
      `;

      try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = await response.text();

        console.log(text);
        res.json({ text });
      } catch (error) {
        res.status(500).json({
          message: "An error occurred while generating content",
          error: error.message,
        });
      }
    } else {
      res.status(404).json({ message: "Data not found for this device_id" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
});

app.post('/pest', async (req, res) => {
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
  const prompt = 'Tell about pest control in detail in India in paragraph';

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();

    const queryVector = await getVectorFromText(text);

    const vectorSearchResult = await queryEmbeddings(queryVector);

    console.log('Generated Text:', text);
    console.log('Vector Search Results:', vectorSearchResult);

    res.json({ text, vectorSearchResult });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred', error: error.message });
  }
});

const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(null, "image1" + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 7000000 },
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb);
  },
}).single("image");

function checkFileType(file, cb) {
  const filetypes = /jpeg|jpg|png|gif/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb("Error: Images Only!");
  }
}

app.post("/api/upload", async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ message: err });
    }
    if (req.file == undefined) {
      return res.status(400).json({ message: "No file selected!" });
    }

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const prompt =
        "Analyze the image to determine if it contains a leaf. If it does, identify any diseases present on the leaf and provide steps to cure them. If the image does not contain a leaf, indicate that it is not a leaf image.";
      const image = {
        inlineData: {
          data: Buffer.from(
            fs.readFileSync(`./uploads/${req.file.filename}`)
          ).toString("base64"),
          mimeType: "image/jpeg",
        },
      };

      const result = await model.generateContent([prompt, image]);
      const text = await result.response.text();
      return res.json({ text });
    } catch (error) {
      console.error("Error processing image with AI model:", error);
      return res
        .status(500)
        .json({ message: "An error occurred while processing the image." });
    }
  });
});

app.use("/uploads", express.static("uploads"));

const PORT = process.env.PORT || 5100;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
