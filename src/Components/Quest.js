import reward10 from '../resources/reward-point-10.PNG';
import { useCallback, useState } from 'react'

// {dscrpt, progress, totalProgress}
export const Quest = (props) => {
    const [progress, setProgress] = useState(props.progress);
    const [completed, setCompleted] = useState(props.progress >= props.totalProgress);

    const handleQuestClick = () => {
        if (progress < props.totalProgress) setProgress(progress + 1)
        if (!completed && progress + 1 >= props.totalProgress) {
            setCompleted(true)
            props.addToMainScore()
        }
        // Main Progress feature
    }

//       button.addEventListener("click", () => {
//         const progressBarFill = button.previousElementSibling.querySelector(".progress-bar-fill") as HTMLElement;
//         const currentWidth = parseFloat(progressBarFill.style.width) || 0;
//         const newWidth = Math.min(currentWidth + 10, 100); // Increase progress by 10%

//         progressBarFill.style.width = `${newWidth}%`;


      //       // Update progress number
      //       var quest = this.parentElement;
      //       var progressNumber = quest.querySelector(".progress-number");
      //       var currentProgress = parseFloat(progressNumber.textContent.split("/")[0]);
      //       var totalProgress = parseFloat(progressNumber.textContent.split("/")[1]);
      //       var incrementNumber = 1 / totalProgress;
      //       currentProgress += incrementNumber;
      //       progressNumber.textContent = currentProgress.toFixed(0) + "/" + totalProgress;
  
      //         if (newWidth >= 100) {
      //         var questReward = this.parentElement.querySelector(".reward");
      //         questReward.textContent = "Reward: Completed!";
      //         var mainCurrentWidth = parseFloat(mainProgressBarFill.style.width) || 0;
      //         var mainNewWidth = Math.min(mainCurrentWidth + 10, 100); // Increase progress by 10%
      //         mainProgressBarFill.style.width = mainNewWidth + "%";
      //         if (mainNewWidth >= 100) {
      //           mainQuestReward.textContent = "Reward: Main Quest Completed!";
      //         }
  
      //         // Disable the button after quest completion
      //         this.classList.add("disabled");
      //         this.removeEventListener("click", arguments.callee);
      //         this.addEventListener("click", function() {
      //             event.preventDefault();
      //         });
      //             // this.setAttribute("href", "#");
      //       }


    return (
        <div 
        className={`quest ${completed ? "completed" : ""}`} 
        >
            <img className="reward" src={reward10} alt="Reward Point"/>
            <div className="progress">
            <p>
                {props.dscrpt}
            </p>
            <div className="progress-bar">
                <div className="progress-bar-fill" style={{width: `${progress / props.totalProgress * 100}%` }}></div>
                {/* style="width: 70%;" */}
                {/* {Array.from({ length: props.totalProgress-1 }, (_, i) => "         ").join("✦")} */}
                {/* 💎 */}
                <p className="progress-bar-decor-number progress-bar-number">{progress}/{props.totalProgress}</p>
            </div>
            </div>
                <div 
                    className="claim-button-container"
                    onClick={handleQuestClick}
                >
                <a href="#" className="claim-button">
                    {completed ? "Completed" : "Go"}
                </a>
            </div>
      </div>

    )
}

// export default Quest;