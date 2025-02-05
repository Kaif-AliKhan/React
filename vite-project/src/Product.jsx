import Title from "./Title";
import Description from "./Description";
import Price from "./Price";
export default function Product({idx})
{
    let styles={
        border:"2px solid black",
        borderRadius:"10px",
        height:"175px",
        width:"250px", 
        marginLeft:"10px",
        marginBottom:"10px"
    }
    let title=["Logitech MX Master","Apple Pencil(2nd Gen)","Zebronics Zeb-transformer","Petronics Toad 23"];
    let desc=[["8,000 dpi","5 Programmable buttons"],["intuitive surface","designed for iPad Pro"],["intuitive surface","designed for iPad Pro"],["wireless","optical orientation"]];
    let oldPrice=["12,495","11,900","1,599","599"];
    let newPrice=["8,999","9,199","899","278"]
    return (
        <div style={styles}>
        <Title title={title[idx]}/>
        <Description desc={desc[idx]}/>
        <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>
        </div>
    )
}