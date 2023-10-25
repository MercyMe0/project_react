import {Link} from "react-router-dom";
import "./Comments.css"

const Comment = (props) => {
    return (
        <div className="CommentsWrap">
            {/* <label className="labelChat"> Напиши что-нибудь</label> */}
            <input 
            value={props.inputValue}
            onChange={(e) => props.setInputValue(e.target.value)}
            />
            <button onClick={props.sendChat} className="buttonC">Отправить</button>
            <button onClick={() => props.setChatData([])} className="buttonC">Отчистить всё</button>
            {props.showDialog && (
                <div>
                    Вы не авторизовались, перейдите по <Link to='/authorization'>ссылке</Link>
                </div>
            )}
        </div>
    )
}
export default Comment;
