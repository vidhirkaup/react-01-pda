import ProfileCard from "./components/ProfileCard";

import "bulma/css/bulma.css";
import "./styles.css";

import Alexa from "./images/alexa.png";
import Cortana from "./images/cortana.png";
import Siri from "./images/siri.png";

export default function App() {
  return (
    <div>
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-3">
              <ProfileCard
                title="Alexa"
                handle="@alexa99"
                description="Alexa makes your life easier, more meaningful, and more fun by letting you voice control your world. Alexa can help you get more out of the things you already love and discover new possibilities you've never imagined."
                alt="alexa"
                image={Alexa}
              />
            </div>
            <div className="column is-3">
              <ProfileCard
                title="Cortana"
                handle="@cortana12"
                description="Cortana is Microsoft’s personal productivity assistant that helps you save time and focus attention on what matters most."
                alt="cortana"
                image={Cortana}
              />
            </div>
            <div className="column is-3">
              <ProfileCard
                title="Siri"
                handle="@siri44"
                description="Siri is a voice recognition application introduced as part of Apple's iPhone 4S. The software can understand natural human language and complete requested tasks, such as answering questions, reading messages, making calendar appointments and setting reminders."
                alt="siri"
                image={Siri}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
