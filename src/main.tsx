import React from 'react';
import { createRoot } from 'react-dom/client';
import { ShieldCheck, Sparkles, Paintbrush, WandSparkles, MessageCircle, ChevronDown, Instagram, MapPin } from 'lucide-react';
import './styles.css';
import hero from './assets/hero-mustang.jpg';
import gold from './assets/gold-bmw.jpg';
import white from './assets/white-ppf.jpg';
import aqua from './assets/aqua-wrap.jpg';
import black from './assets/black-detail.jpg';
import ppf from './assets/ppf-process.jpg';
import shop from './assets/shop-cover.jpg';

const services = [
  {icon: ShieldCheck, title:'PPF', text:'שכבת הגנה שקופה לצבע הרכב מפני שריטות, אבנים ופגעי הדרך.'},
  {icon: Paintbrush, title:'עיטוף ושינוי צבע', text:'שינוי נוכחות לרכב עם גימורים וצבעים שמייצרים מראה ייחודי.'},
  {icon: Sparkles, title:'ציפוי קרמי', text:'ברק עמוק, תחזוקה קלה יותר ושכבת הגנה נוספת למעטפת הרכב.'},
  {icon: WandSparkles, title:'פוליש ודיטיילינג', text:'טיפול קפדני שמחזיר לצבע עומק, ברק וגימור נקי.'},
];
const gallery = [
  [gold,'עיטוף בגימור בולט'],
  [white,'PPF והגנת צבע'],
  [aqua,'שינוי צבע ועיצוב'],
  [black,'פוליש וציפוי קרמי'],
  [ppf,'התקנת PPF'],
  [shop,'עבודה בסדנה'],
];

function App(){
 return <main>
   <nav className="nav">
     <a className="brand" href="#top"><span>SHON</span> DETAILING</a>
     <div className="navlinks"><a href="#services">שירותים</a><a href="#work">עבודות</a><a href="#contact">יצירת קשר</a></div>
     <a className="navcta" href="#contact">הצעת מחיר</a>
   </nav>

   <section className="hero" id="top" style={{backgroundImage:`linear-gradient(90deg,rgba(5,5,5,.94) 0%,rgba(5,5,5,.72) 42%,rgba(5,5,5,.16) 78%), url(${hero})`}}>
     <div className="heroContent">
       <div className="eyebrow">PPF · WRAPS · CERAMIC · DETAILING</div>
       <h1>הרכב שלך.<br/><em>ברמה אחרת.</em></h1>
       <p>הגנה, גימור ונוכחות — עם תשומת לב לפרטים שעושה את ההבדל.</p>
       <div className="actions"><a className="primary" href="#contact"><MessageCircle size={19}/> לקבלת הצעת מחיר</a><a className="secondary" href="#work">לצפייה בעבודות</a></div>
     </div>
     <a href="#services" className="scroll"><ChevronDown/></a>
   </section>

   <section className="statement">
     <span>SHON DETAILING</span>
     <h2>לא רק לנקות את הרכב.<br/>לתת לו <b>נוכחות.</b></h2>
     <p>פתרונות לשמירה על הצבע, שינוי המראה וגימור מדויק — בהתאמה לרכב ולתוצאה שאתם מחפשים.</p>
   </section>

   <section className="services" id="services">
     <div className="sectionHead"><div><span>WHAT WE DO</span><h2>השירותים שלנו</h2></div><p>מהגנה שקופה ועד שינוי מראה מלא.</p></div>
     <div className="serviceGrid">
       {services.map(({icon:Icon,title,text},i)=><article className="service" key={title}><div className="num">0{i+1}</div><Icon/><h3>{title}</h3><p>{text}</p></article>)}
     </div>
   </section>

   <section className="feature" style={{backgroundImage:`linear-gradient(90deg,rgba(0,0,0,.86),rgba(0,0,0,.15)),url(${gold})`}}>
      <div><span>MAKE IT YOURS</span><h2>שינוי קטן.<br/>אפקט <b>ענק.</b></h2><p>עיטוף ושינוי צבע שמעניקים לרכב אופי שאי אפשר לפספס.</p></div>
   </section>

   <section className="work" id="work">
     <div className="sectionHead"><div><span>SELECTED WORK</span><h2>עבודות נבחרות</h2></div><p>העבודה מדברת בעד עצמה.</p></div>
     <div className="gallery">{gallery.map(([img,label],i)=><figure className={i===0||i===3?'wide':''} key={String(label)}><img src={String(img)} alt={String(label)}/><figcaption><span>0{i+1}</span>{String(label)}</figcaption></figure>)}</div>
   </section>

   <section className="process">
     <div className="processImg"><img src={ppf} alt="התקנת PPF"/></div>
     <div className="processCopy"><span>PAINT PROTECTION FILM</span><h2>הגנה שכמעט<br/>לא רואים.</h2><p>PPF מיועד לשמור על צבע הרכב מפני פגיעות יומיומיות תוך שמירה על המראה המקורי.</p><a href="#contact">רוצה לשמוע עוד? ←</a></div>
   </section>

   <section className="contact" id="contact">
     <div className="contactInner">
       <span>READY WHEN YOU ARE</span>
       <h2>רוצה לשדרג<br/>את <b>הרכב?</b></h2>
       <p>ספר לנו מה אתה רוצה לעשות ונחזור אליך עם הכיוון המתאים.</p>
       <div className="contactBtns">
         <a className="primary" href="https://wa.me/972532795661" target="_blank" rel="noreferrer"><MessageCircle/> שליחת הודעה ב-WhatsApp</a>
         <a className="secondary" href="tel:+972532795661">053-279-5661</a>
       </div>
       <div className="meta"><span><MapPin size={17}/> אשדוד</span><span><Instagram size={17}/> Shon Detailing</span></div>
     </div>
   </section>

   <footer><div className="brand"><span>SHON</span> DETAILING</div><p>PPF · WRAPS · CERAMIC · DETAILING</p><small>Demo concept</small></footer>
   <a className="mobileWhats" href="https://wa.me/972532795661" target="_blank" rel="noreferrer"><MessageCircle/> לקבלת הצעת מחיר</a>
 </main>
}
createRoot(document.getElementById('root')!).render(<App/>);
