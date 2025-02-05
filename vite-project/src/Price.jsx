export default function Price({oldPrice,newPrice})
{
    let oldStyle={
        textDecorationLine:"line-through"
    }
    let newStyle={
        textWeight:"bold"
    }
    let priceStyle={
        backgroundColor:"gold",
        height:"38.9px",
        borderBottomLeftRadius:"5px",
        borderBottomRightRadius:"5px"
    }
    return(
        <div style={priceStyle}>
        <span style={oldStyle}>{oldPrice}</span>
        &nbsp; &nbsp; &nbsp; &nbsp; 
        <span style={newStyle}>{newPrice}</span> 
        </div>
    )
}