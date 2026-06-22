
import Img from '../assets/e-commerce.jpg';  
import './Home.css';
function Home() {
  return (
    <div>
      <h1>أهلاً بك في المتجر</h1>
      <p>!تصفح منتجاتنا واستمتع بتجربة تسوق رائعة</p>

      <div>
      <img className="store-image" src={Img} alt="صورة المتجر" />
      </div>
      <button>تسوق الآن</button>

    </div>
  );
}

export default Home;
