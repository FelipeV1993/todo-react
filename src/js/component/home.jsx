import React, { useState, useEffect , useRef} from "react";
import Task from "./Task.jsx";

//create your first component
const Home = () => {
	const [tasks,setTasks] = useState([])
	const taskNumber = useRef(0)
	const [text,setText] = useState("")

	const Sendinfo = () => {
		if(text !== ""){
			console.log("submitted")
			console.log(text)
			var new_tasks = tasks
			new_tasks.push(text)
			setText("")
			setTasks(new_tasks)
			taskNumber.current = taskNumber.current + 1;
		}else {
			console.log("Error! Add a task first!")
		}
	}

	const handleClick = (index) => {
		tasks.splice(index,1);
		setTasks([...tasks])
		taskNumber.current = taskNumber.current - 1
	}


	return (
		<div className="body">
			<div className="paper">
				<div className="inputBox">
					<input id="inputTask" type="text" value={text}  onChange={(e) => {setText(e.target.value)}} placeholder="Add a task here..."></input>
				</div>
				<div className="col-auto">
            <button
              type="submit"
              className="btn btn-primary mb-3 mt-2"
              onClick={Sendinfo}
            >
              Send Task
            </button>
          </div>
				{(tasks.length !== 0) ? tasks.map((item,index) => <Task text={item} key={index} onClick={() => {handleClick(index)}}/>) : <div className="emptyTask">No tasks!</div>}
				{(tasks.length !== 0) ? <div className="footer">{taskNumber.current} tasks left...</div> : null}
			</div>
		</div>
	);
};

export default Home;