import React, {Component, PropTypes} from "react"
import "./TodoFooter.css"
class TodoFooter extends  Component{
    deleteDone=() => {
         this.props.deleteDoneTodos()
    }
    handleChange=() => {
        const {changeAllChecked,isAllCheck}=this.props
         changeAllChecked(!isAllCheck)
    }
    render(){
        const {doneCount,totalCount,isAllCheck}=this.props
        return(
            <div className="todo-footer">
                <label>
                    <input type="checkbox" checked={isAllCheck} onChange={this.handleChange}/>
                </label>
                <span>
                    <span>已完成{doneCount}</span>/全部{totalCount}
                </span>
                <button className="btn" onClick={this.deleteDone}>清除选定留言</button>

            </div>
        )
    }
}
TodoFooter.property={
    totalCount:PropTypes.number.isRequired,
    doneCount:PropTypes.number.isRequired,
    deleteDoneTodos:PropTypes.func.isRequired,
    isAllCheck:PropTypes.bool.isRequired
}
export default TodoFooter