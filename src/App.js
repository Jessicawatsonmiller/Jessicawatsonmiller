import React, { Component } from 'react';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <div className="navbar">
            <p> Resum&eacute; </p>
            <a href="mailto:jessicawatsonmiller@gmail.com">Contact</a>
          </div>
        </header>
        <div className="backgroundBanner">
          <div className="backgroundOverlayBox">
            <div className="backgroundOverlay">
              <h1 className="backgroundTitle">JESSICA <span>WATSON</span> MILLER</h1>
            </div>
          </div>
        </div>
        <div className="socialLinks">
          <p>
            <a href="https://twitter.com/jesswatmiller">Twitter</a> | <a href="https://www.linkedin.com/in/jessica-watson-miller-0082aa60/">Linkedin</a> | <a href="https://www.instagram.com/art_kinetica/">Instagram</a>
          </p>
        </div>
        <div className="mainHeading">
          <p>
            WHO ARE YOU <br />AND WHAT DO YOU WANT?
            </p>
        </div>
        <div className="mainTextBox">
          <div className="mainText">
            <p>
              I&#39;m Jess.
                </p>
            <p>
              I want to help humans coordinate better, and foster humanity’s transition to a metasystematic paradigm.
                </p>
            <p>
              What even is a metasystematic paradigm, you ask? <br />
              A way of being that recognises that meaning is both <a href="https://vividness.live/2015/10/12/developing-ethical-social-and-cognitive-competence/">nebulous and patterned</a>. <br />
              That&#39;s probably still confusing. <a href="https://www.lesswrong.com/posts/6if3cGi3gEiaDg5Bo/metarationality-repository">Sorry about that</a>.
                </p>
            <p>
              I like cryptoeconomics, software and scalable social technologies. <br />
              I’m technique-agnostic, I learn fast and love to work with people who are truly alive.
                </p>
            <p>
              I&#39;m a pretty multi-faceted human, as far as humans go: <br />
              I&#39;ve written things, with varying degrees of professionalism, on <a href="https://medium.com/@jessicawatsonmiller">Medium</a>. <br />
              I created the world&#39;s first <a href="https://laureneisingerproductions.com/luminous/">blacklight circus show</a>. <br />
              I once competed on a <a href="https://en.wikipedia.org/wiki/Skin_Wars#Season_3">reality TV show</a> about bodypainting. <br />
              (Yes, it&#39;s on <a href="https://www.netflix.com/title/80109536">Netflix</a>.) <br />
              Oh yeah, I&#39;m also a <a href="http://artkinetica.com.au/">bodypainter</a>. <br />
            </p>
          </div>
        </div>
        <div className="contactDetails">
          <p>
            Want to reach me? <br />
            Send me a message on <a href="https://www.facebook.com/jessicawatsonmiller">Facebook</a>, or schedule a <a href="https://calendly.com/jessicawatsonmiller">hangout</a> with me. <br />
            Or, if it isn&#39;t urgent, send me an <a href="mailto:jessicawatsonmiller@gmail.com">email</a>. <br />
          </p>
        </div>
        <div className="salutation">
          <p>
            It&#39;s nice to meet you.
          </p>
        </div>
        <div className="bottomImage">
          <div className="imgContainer">
            <img src="Vesod-5.1.png" alt="Vesod"></img>
          </div>
        </div>
          <div className="footer">
            <div className="footerImage">
              <p>
                Website by me. Artwork by Vesod Brero.
              </p>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
