import React,{Component,PropTypes} from "react"
//import PubSub from "pubsub-js"
import "./TodoItem.css"

class TodoItem extends Component{
    //checkbox状态改变的监听回调函数
    handleChecked=() => {
        const {updateCheck,todo}=this.props
        todo.isDone=!todo.isDone        //点击取反
        updateCheck()                  //调用App中的方法（函数）
    }
    //点击删除相应，回调函数，不传参数
    handleDelete=() => {
        const {deleteTodo,todo,index}=this.props
        //const {todo,index}=this.props
        if(confirm(`确定删除${todo.title}吗?`)){
            deleteTodo(index)
            //PubSub.publish("delete",index)
        }
    }
    handleEnter=() => {
        this.refs.li.style.background="#91aa9d"
        this.refs.button.style.display="block"
    }
    handleLeave=() => {
        this.refs.li.style.background="#fffbdc"
        this.refs.button.style.display="none"
    }
    render(){
        const{title,isDone}=this.props.todo
        return(
            <li onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave} ref="li">
                <label>
                    <input type="checkbox" checked={isDone} onChange={this.handleChecked}/>
                    <span>{title}</span>
                </label>
                <button className="btn" style={{display:"none"}} onClick={this.handleDelete} ref="button">删除</button>
            </li>
        )
    }
}
TodoItem.propTypes={
    todo:PropTypes.object.isRequired,
    updateCheck:PropTypes.func.isRequired,
    //deleteTodo:PropTypes.func.isRequired
}
export default TodoItem