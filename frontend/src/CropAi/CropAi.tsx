import { useEffect, useState, MouseEventHandler } from "react";
import axios from "axios";
import "../CropAi/CropAi.css";

interface DataItem {
  [key: string]: any;
}

interface ResponseData {
  text: string;
}

function CropAi() {
  const [data, setData] = useState<DataItem[]>([]);
  const  text = "";
  const [cleanedResponse, setCleanedResponse] = useState<string>("");

  const handleSubmit: MouseEventHandler<HTMLButtonElement> = async (e) => {
      e.preventDefault();

    try {
      const res = await axios.post<ResponseData>("https://final-04do.onrender.com/cropai", {
        prompt: text,
      });
      const responseText = res.data.text;

      console.log(text)

      const cleanedResponse = responseText.replace(/\*/g, '');

      setCleanedResponse(cleanedResponse);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetch("https://final-1-jkbd.onrender.com/api/data")
      .then((response) => response.json())
      .then((data: DataItem[]) => {
        setData(shuffleArray(data));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const shuffleArray = (array: DataItem[]): DataItem[] => {
    let shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  return (
    <div>
      <div className="crop6">
        <div className="crop7">
          <h1>Our Ai Recommendation</h1>
          <p>Click on the below button to get the recommendation.</p>
        </div>
      </div>

      <div className="crop21">
        <div className="crop22" style={{ whiteSpace: 'pre-line' }}>
          {cleanedResponse ? <p>{cleanedResponse}</p> : <p>Please Click the button below to get your crop recommendation</p>}
        </div>
        <button onClick={handleSubmit}>Get your Crop recommendation</button>
      </div>

      <div className="crop6">
        <div className="crop7">
          <h1>Crop Assistant</h1>
          <p>Empowering your farming decisions.</p>
        </div>
      </div>

      <div className="crop8">
        <div className="crop9">
          <div className="crop10">
            <a href="#">All</a>
            <a href="#">Vegetables</a>
            <a href="#">Fruits</a>
            <a href="#">Herbs</a>
            <a href="#">Flowers</a>
            <a href="#">Trees</a>
            <a href="#">Cacti</a>
            <a href="#">Succulents</a>
            <a href="#">Microgreens</a>
          </div>
        </div>
      </div>

      <div className="crop1">
        <div className="crop2">
          {data.map((item) => (
            <div className="crop3" key={item._id}>
              <h2>{item.plant}</h2>
              <div className="crop4">
                <span style={{ fontWeight: "600"}}>
                  Temperature:{" "}
                </span>
                <span style={{ marginLeft: "3%" , color: "#4F7D96" }}>{item.temprature} °C</span>
                <br />
                <span style={{ fontWeight: "600"}}>
                  Humidity:{" "}
                </span>
                <span style={{ marginLeft: "3%" , color: "#4F7D96"}}>{item.humidity} %</span>
                <br />
                <span style={{ fontWeight: "600"}}>
                  Soil Moisture:{" "}
                </span>
                <span style={{ marginLeft: "3%" , color: "#4F7D96"}}>{item.soilmoisture} %</span>
                <br />
                <span style={{ fontWeight: "600"}}>
                  Average Life Span:{" "}
                </span>
                <span style={{ marginLeft: "3%" , color: "#4F7D96"}}>
                  {item.avglifespan} Months
                </span>
                <br />
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CropAi;
