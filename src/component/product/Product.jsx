
import "./product.css"

const Product = ({img,link})=> {
  return (
    <div className='p'>
   <div className="p-browser">
    <div className="p-circle"></div>
    <div className="p-circle"></div>
    <div className="p-circle"></div>
   </div>
    {/* your project in just realtime img or scrolling img 
    mens add you project ling hare to open the website or resume  */}

<a href={link} target="_blank" rel="noreferrer">
  <img src={img} alt="" className="p-img" />
</a>
  
    </div>
  )
}
export default Product;
