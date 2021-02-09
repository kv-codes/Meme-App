import React, { useState, useEffect } from "react";
import {Meme} from './components/Meme';
import Homie from './components/Homie';
import Text from './components/Text';



const objectToQueryParam = obj => {
  const params = Object.entries(obj).map(([key, value]) => `${key}=${value}`);
  return "?" + params.join("&");
};

function App() {
  const [templates, setTemplates] = useState([]);
  const [template, setTemplate] = useState(null);
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [homie, setHomie] = useState(null);
  const [text, setText] = useState(null);
  const [meme, setMeme] = useState(null);

  //hook use to fetch api
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes").then(x =>
      x.json().then(response => setTemplates(response.data.memes))
    );
  }, []);

  
  
  if (meme) {
    return (
      <div style={{ textAlign: "center" }}>
        <img src={meme} alt="custom meme" />
      </div>
    );
  }
  if (text) {
    return (
      <div style={{ text: "bold" }}>
    </div>
    );
  }

  if (homie) {
    return (
      <div style={{ text: "bold" }}>
    </div>
    );
  }

  return (
    <div style={{ textAlign: "center" }}>
      {template && (
        <form
          onSubmit={async e => {
            e.preventDefault();
            // add logic to create meme from api
            const params = {
              template_id: template.id,
              text0: topText,
              text1: bottomText,
              username: "lek26",
              password: "MemeBoi21"
            };
            const response = await fetch(
              `https://api.imgflip.com/caption_image${objectToQueryParam(
                params
              )}`
            );
            const json = await response.json();
            setMeme(json.data.url);
          }}
          //Second page
        >          
          <Text text={text}/>
          
          <Meme template={template} />
          <input
            placeholder="top text"
            value={topText}
            onChange={e => setTopText(e.target.value)}
          />
          <input
            placeholder="bottom text"
            value={bottomText}
            onChange={e => setBottomText(e.target.value)}
          />
          <button type="submit">Generate!</button>
        </form>
      )}
      {!template && (
        <>

          {templates.map(template => {
            return (


              <Meme
                template={template}
                onClick={() => {
                  setTemplate(template);
                }}
              />                          
            );
          })}


          <Homie homie={homie}/>
        </>
      )}
    </div>
  );
}

export default App;
