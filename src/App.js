import './App.css';
import React, { useEffect, useState, useCallback } from "react";
import { Quest } from './Components/Quest.js';
import {TodayCountdownClock} from './Components/CountdownClock.js';
// import logo from './logo.svg';
import cutelink from './resources/sprite-cute-link.gif';
import { MainProgressBar } from './Components/MainProgressBar';
// import { v4 as uuidv4 } from 'uuid'; // Import uuid library to generate unique IDs
// import ReactDOM from 'react-dom';

function App() {
  const [mainScore, setMainScore] = useState(0);
  const mainTotalScore = 5; 
  const addToMainScore = () => {
    if (mainScore < mainTotalScore) setMainScore(mainScore + 1)
    console.log(mainScore)
  }

  const [quests, setQuests] = useState([

    // 写论文
    // 字数、段落、句子、时间、五分钟、三分钟、一分钟、
    // 


    // 总目标？（不推荐） 一天、一周、一月、一年、
    {
      id: 0,
      // dscrpt: 'Defeat 10 enemies',
      dscrpt: '在<写点子攻防>中扮演攻击方1次',
      progress: 0,
      totalProgress: 1,
    },
    {
      id: 99,
      dscrpt: '在<写点子攻防>中扮演防御方1次',
      progress: 0,
      totalProgress: 5,
    },
    {
      id: 1,
      dscrpt: '在<写点子攻防>中扮演攻击方3次',
      progress: 0,
      totalProgress: 3,
    },
    {
      id: 4,
      dscrpt: '在<写点子攻防>中投入1分钟攻击时间',
      progress: 0,
      totalProgress: 1,
    },
    {
      id: 5,
      dscrpt: '在<写点子攻防>中单次攻击时间达到1分钟',
      progress: 0,
      totalProgress: 1,
    },
    {
      id: 7,
      dscrpt: '在<写点子攻防>中投入3分钟攻击时间',
      progress: 0,
      totalProgress: 3,
    },
    {
      id: 7,
      dscrpt: '在<写点子攻防>中投入60分钟攻击时间',
      progress: 0,
      totalProgress: 60,
    },
    {
      id: 3,
      dscrpt: '找工作',
      // dscrpt: 'Defeat 10 enemies',
      progress: 0,
      totalProgress: 1,
    }
  ]);


  // const [currentConversation, setCurrentConversation] = useState(null);
  // const [inputValue, setInputValue] = useState('');
  // const [selectedMessages, setSelectedMessages] = useState([]);
  // const [showTextArea, setShowTextArea] = useState(false);
  // const [rewriteInputValue, setRewriteInputValue] = useState('');
  // const textareaRef = useRef(null); // Create a ref for the textarea
  // const [isEditable, setIsEditable] = useState(false);
  


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
              {quests.map((q,i) => (
                  <Quest
                    key={i}
                    id={q.id}
                    dscrpt={q.dscrpt}
                    progress={q.progress}
                    totalProgress={q.totalProgress}
                    addToMainScore={addToMainScore}
                    // className={`quest`}
                  />
              ))}
          </div>

          <div style={{display: 'flex', justifyContent:'end'}}>
            <img style={{maxWidth:"22%"}} src={cutelink} alt="link walking..." />
          </div>

        </div>      
      </div>
      
    );
  
}

export default App;
         {/* <div className="container">
          <div className="main-quest quest">
            <h2>Main Quest</h2>
            <p>Complete Daily Quests to progress</p>
            <div className="progress">
              <div className="progress-bar">
                <div className="progress-bar-fill" </div>
              </div>
            </div>
            <p className="reward">Reward:</p>
          </div>
        </div> */}
