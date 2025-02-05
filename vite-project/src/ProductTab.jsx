import Product from "./Product";

export default function ProductTab()
{
    let styles={
        display:"flex",
        flexWrap:"wrap",
    }
    return(
        <div style={styles}>
        <Product idx={0}/>
        <Product idx={1}/>
        <Product idx={2}/>
        <Product idx={3}/>
        </div>

    )
}