import "./ChatBlock.css"
const ChatBlock = (props) => {
    return (
        <div className="chatBlockWrap">
            <h2 className="ChatBlockH">Чат:</h2>
            
            {props.chatData.map((el, i) => {
                return (
                    <div key={i} >
                    {i + 1}. {el}
                    </div>
                )

            })}
        </div>
    )

}

export default ChatBlock;