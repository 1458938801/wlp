import React,{Component,PropTypes} from "react"
import "./TodoMain.css"
import TodoItem from "../TodoItem/TodoItem"

class TodoMain extends Component{
    render(){
        const todos=this.props.todos
        return(
            <ul className="todo-main">
                {
                    todos.map((todo,index) => {
                        return(
                            //组件嵌套,{...this.props}相当于是updateCheck=this.props.updateCheck，
                            // 同一个组件向里层传再向里层传，可以用{...}
                             <TodoItem key={index}todo={todo} index={index}{...this.props}/>
                        )
                    })
                }

            </ul>
        )
    }
}
TodoMain.propTypes={
    todos:PropTypes.array.isRequired

}
export default TodoMain