import './App.css';
function App() {
 return (
<div className="page">
<div className="container">
<div className="lpart">
<img className="profile" src="/Image.jpg" alt="Profile" />
</div>
<div className="rpart">
<div className="name">Cadence Jael Alviar</div>
<div className="university">National University MOA</div>
<div className="desc">
           I'm a student of National University MOA who loves to play games, cats, ANDDDDD heavy on liking anything spider-man related.
           I'm currently on my 4th year in college taking up BSIT-MWA.
</div>
<div className="socials">
<a href="https://www.instagram.com/cadezalvr" target="_blank" rel="noreferrer" title="Instagram">
<i className="fab fa-instagram"></i>
</a>
<a href="https://www.facebook.com/ceejayalvr" target="_blank" rel="noreferrer" title="Facebook">
<i className="fab fa-facebook-f"></i>
</a>
<a href="mailto:cadencealviar@gmail.com" target="_blank" rel="noreferrer" title="Email">
<i className="fas fa-envelope"></i>
</a>
<a
             href="https://www.tiktok.com/@chocnutnut?is_from_webapp=1&sender_device=pc"
             target="_blank"
             rel="noreferrer"
             title="TikTok"
>
<i className="fab fa-tiktok"></i>
</a>
</div>
</div>
</div>
</div>
 );
}
export default App;