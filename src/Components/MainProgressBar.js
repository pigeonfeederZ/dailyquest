import reward10 from '../resources/reward-point-10.PNG';
import { useCallback, useState } from 'react'

// {progress, totalProgress， setMainScore}
export const MainProgressBar = (props) => {
    const [progress, setProgress] = useState(props.progress);
    const [completed, setCompleted] = useState(props.progress >= props.totalProgress);

    // const handleQuestClick = () => {
    //     if (progress < props.totalProgress) props.setMainScore(progress + 1)
    //     if (progress + 1 >= props.totalProgress) setCompleted(true)
    // }
    // const percentage = props.progress / props.totalProgress * 100;

    return (
        <div>
            {/* <img className="reward" src={reward10} alt="Reward Point"/> */}
            <div className="progress">
                <div className="progress-bar">
                    <div className="progress-bar-fill" style={{width: `${props.progress / props.totalProgress * 100}%` }}></div>
                    {/* <div className="progress-bar-fill" style={{width: "50%" }}></div> */}
                    {/* <p className="progress-bar-number">{progress}/{props.totalProgress}</p> */}
                </div>
            </div>
            <div 
                className="progress-bar-decor-nodes"
                style={{ whiteSpace:"pre"}}>
                {"⬜🗝️"+Array.from({ length:5}, (_, i) => "         💎🗝️").join("")}
                {/* 🌟 */}
            </div>
        </div>

    )
}

// export default Quest;