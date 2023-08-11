import './App.css';
import React, { useEffect, useState, useCallback } from "react";
import { Quest } from './Components/Quest.js';
import {TodayCountdownClock} from './Components/CountdownClock.js';
// import logo from './logo.svg';
import cutelink from './resources/sprite-cute-link.gif';
import { MainProgressBar } from './Components/MainProgressBar';
// import { v4 as uuidv4 } from 'uuid'; // Import uuid library to generate unique IDs
// import ReactDOM from 'react-dom';
import {questListSample_NSents} from './Components/Util';

function App() {
  const [mainScore, setMainScore] = useState(0);
  const mainTotalScore = 5; 
  const AddToMainScore = () => {
    if (mainScore < mainTotalScore) setMainScore(mainScore + 1)
  }

  const [quests, setQuests] = useState(questListSample_NSents);

  const [currentQuestIds, setCurrentQuestIds] = useState([107]);

  const GetQuestById = (questId) => {
    return quests.find(q => q.id === questId)
  }    

  const NotifyQuestComplete = (questId, progress) => {
    const quest = GetQuestById(questId)
    // If nothing special, do nothing
    // Specifal situation:
    // - linked quest
    if (quest.config && quest.config.linkedNextId) {
      const nextQuestId = quest.config.linkedNextId
      const newCurrentQuestIds = currentQuestIds.toSpliced(currentQuestIds.indexOf(questId), 1, nextQuestId);
      setCurrentQuestIds(newCurrentQuestIds)
    }
  }  


// document.addEventListener("DOMContentLoaded", function() {
      //   var claimButtons = document.getElementsByClassName("claim-button");
      //   var mainProgressBarFill = document.querySelector(".main-quest .progress-bar-fill");
      //   var mainQuestReward = document.querySelector(".main-quest .reward");
  
      //   for (var i = 0; i < claimButtons.length; i++) {
      //     var button = claimButtons[i];
      //     button.addEventListener("click", function() {
      //         event.preventDefault();
      //       var progressBarFill = this.parentElement.parentElement.querySelector(".progress-bar-fill");
      //       var currentWidth = parseFloat(progressBarFill.style.width) || 0;
      //       var newWidth = Math.min(currentWidth + 10, 100); // Increase progress by 10%
      //       progressBarFill.style.width = newWidth + "%";
  
      //         var mainProgressBarFill = document.querySelector(".main-quest .progress-bar-fill");
  
  
  
      //     });
      //   }
      // });
  


//   useEffect(() => {
//     // Load conversations from local storage
//     const storedConversations = JSON.parse(localStorage.getItem('conversations'));
//     if (storedConversations) {
//       console.log("UseEffect!")
//       console.log(localStorage.getItem('conversations'))

//       setConversations(storedConversations);
//       // Retrieve the ID of the last opened conversation from local storage
//       const lastOpenedConversationId = parseInt(localStorage.getItem('lastOpenedConversation'));

//       // Find the last opened conversation and set it as the current conversation
//       const lastOpenedConversationIndex = storedConversations.findIndex(
//         (conversation) => conversation.id === lastOpenedConversationId
//       );
//       if (lastOpenedConversationIndex > -1) {
//         setCurrentConversation(storedConversations[lastOpenedConversationIndex]);
//       } else {
//         setCurrentConversation(storedConversations[storedConversations.length - 1]);
//       }
//       // Auto focus on the textarea when selectedMessages state changes
//       if (selectedMessages.length > 0) {
//         textareaRef.current.focus();
//       }
//       // // if ()
//       // // textareaRef.current.focus(); // Focus the textarea when a message is ctrl+clicked
//     }
//           // // Step 1: Get the array from local storage
//           // const conversationsJSON = localStorage.getItem('conversations');

//           // // Step 2: Parse the JSON string into a JavaScript array
//           // const conversationsArray = []

//           // // Step 3: Remove the last item from the array
//           // saveConversations(conversationsArray);
// }, []);
  

    return (
        // <title>Daily Quests</title>
      <div>
        <div className="kanban-container">
          <div className="quest-title">
            <h1>Daily Quests</h1>
          </div>
      
          <div className="main-progress-container">

            <TodayCountdownClock/>
            <MainProgressBar
              progress = {mainScore}
              totalProgress = {mainTotalScore}
            />

          </div>
      
          <div className="container">
          {currentQuestIds.map((qid,i) => {
            const q = GetQuestById(qid)
            return (
                  <Quest
                    key={i}
                    id={q.id}
                    dscrpt={q.dscrpt}
                    progress={q.progress}
                    totalProgress={q.totalProgress}
                    NotifyQuestComplete={NotifyQuestComplete}

                    AddToMainScore={AddToMainScore}
                  />
              )
            })}


              {/* {quests.map((q,i) => (
                  <Quest
                    key={i}
                    id={q.id}
                    dscrpt={q.dscrpt}
                    progress={q.progress}
                    totalProgress={q.totalProgress}
                    NotifyQuestComplete={NotifyQuestComplete}

                    AddToMainScore={AddToMainScore}
                  />
              ))} */}
          </div>

          <div style={{display: 'flex', justifyContent:'end'}}>
            <img style={{maxWidth:"22%"}} src={cutelink} alt="link walking..." />
          </div>

        </div>      
      </div>
      
    );
  
}

export default App;
