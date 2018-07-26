import React,{Component,PropTypes} from "react"
import "./TodoHeader.css"

class TodoHeader extends Component{
    handleKeyUp=(e)=>{
        //判断回车键
        if(e.keyCode===13){
            //判断是否为空
            let title=e.target.value.trim()
            if(title===""){
                return
            }
            //根据输入的数据，生成一个todo对象
            const todo={
                title:title,
                isDone:false
            }
            //调用addTodo方法，把todo添加到todos
            this.props.addTodo(todo)
            //清除输入
            e.target.value=""
        }

    }
    render(){
        return(
            <div className="todo-header">
                <input type="text" placeholder="请留言，并按回车确定" onKeyUp={this.handleKeyUp}/>
            </div>
        )
    }
}
TodoHeader.propTypes={
    addTodo:PropTypes.func.isRequired
}
export default TodoHeader