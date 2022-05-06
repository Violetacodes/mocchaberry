function Buttons ({filtered}) {
    return(
        <div>
        <div className="phrase">
        <h1>Shop coffee</h1>
        </div>
        <div className="cont">
       
        <button className="change re " onClick={() => filtered("regular")}>Regular</button>
        <button className="change ex " onClick={() => filtered("exotic")}>Exotic</button>
        <button className="change fl" onClick={() => filtered("flavoured")}>Flavoured</button>
      
        </div>
        </div>
    )
}

export default Buttons;