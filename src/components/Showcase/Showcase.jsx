import './Showcase.scss'
import React, {useRef, useEffect} from 'react';
import gsap from 'gsap';


const Showcase = () => {

  const showcaseRef = useRef(null);

  useEffect(() => {
    const showcase = showcaseRef.current;
    const [title] = showcase.children;
    const [icon] = title.children;

    const timeline = gsap.timeline({defaults: { ease: 'power4.out'}});

    gsap.set([title, icon], {autoAlpha:0});
    timeline.fromTo(title, {x:'-=300'}, {delay: 0.5 ,duration: 2, x:0, autoAlpha: 1})
    .to(icon, {autoAlpha: 1, duration: 1, rotate:360}, '-=1')  
  },[])

  return ( 
    <div>
      <div ref={showcaseRef} className="showcase">
        <h1>Newspaper with articles from WordPress<i className="fab fa-wordpress ml-3"></i></h1>
      </div>
    </div>
   );
}
 
export default Showcase;