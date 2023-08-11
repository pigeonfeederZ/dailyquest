import reward10 from '../resources/reward-point-10.PNG';
import { useCallback, useState } from 'react'

//props: {dscrpt, progress, totalProgress, AddToMainScore, NotifyQuestComplete}
export const Quest = (props) => {
    const [progress, setProgress] = useState(props.progress);

    const isCompleted = () => {
        return progress >= props.totalProgress;
    }

    const handleQuestClick = () => {
        if (progress < props.totalProgress) setProgress(progress + 1)
        if (!isCompleted() && progress + 1 >= props.totalProgress) {
            props.AddToMainScore()
            props.NotifyQuestComplete(props.id,  progress)
        }
        // Main Progress feature
    }

    return (
        <div 
        className={`quest ${isCompleted() ? "completed" : ""}`} 
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
                    {isCompleted() ? "Completed" : "Go"}
                </a>
            </div>
      </div>

    )
}
