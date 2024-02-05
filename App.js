import React, { useState } from 'react';
import moment from 'moment';
import 'moment/locale/hu';

moment.locale('hu');  

const giveAwayDatas = [
  {Napi: {
    item: "skin here",
    drawTime: moment().hour(19).minute(0).format("LLL")
  }},
  {Heti: {
    item: "skin here",
    drawTime: moment().day(6).hour(20).minute(0).format("LLL")
  }},
  {Havi: {
    item: "skin here",
    drawTime: moment().date(28).hour(20).minute(30).format("LLL")
  }}
];

function GiveawayContainer() {

  const [userClicked, setUserClicked] = useState([]);
  const [joinSuccess, setJoinSuccess] = useState(false);

  const handleButtonClick = (index, type) => {
    setUserClicked([...userClicked, index]);
    setJoinSuccess(true);

  };

  return (
    <div>
      <h1>Futó nyereményjátékok</h1>
      <div>
        {giveAwayDatas.map((giveAwayData, index) => {
            const giveawayType = Object.keys(giveAwayData)[0];
            const { item, drawTime } = giveAwayData[giveawayType];
            return (
              <div>
                <h2>{giveawayType} nyereményjáték</h2>
                    <p> Skin: {item}</p>
                    <p> Sorsolás: {drawTime}</p>
                    {userClicked.includes(index) ? (
                      <h3>Már csatlakoztál ehhez a nyereményjátékhoz!</h3>
                        ) : (
                      <button onClick={() => handleButtonClick(index)}>Csatlakozás!</button>
                    )}
              </div>
            );
          })}
      </div>
      <h1>Korábbi nyertesek</h1>
    </div>
  );
}

export default GiveawayContainer;