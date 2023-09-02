import React from 'react'

import { Helmet } from 'react-helmet'

import Service from '../components/service'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Agency (Template 4)</title>
        <meta property="og:title" content="Agency (Template 4)" />
      </Helmet>
      <div className="home-navbar">
        <header data-thq="thq-navbar" className="home-navbar-interactive">
          <div className="home-branding">
            <img
              alt="pastedImage"
              src="/external/pastedimage-wpsl-300h.png"
              className="home-pasted-image"
            />
          </div>
          <div className="home-items">
            <div className="home-links">
              <span className="nav-link">
                <span>Index</span>
                <br></br>
              </span>
              <span className="nav-link">Services</span>
              <span className="nav-link">About</span>
            </div>
            <button className="start-button button home-button">
              <span className="home-text05">Contact us</span>
            </button>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <button className="home-button1 button">
              <img alt="image" src="/hamburger.svg" className="home-image" />
              <span className="home-text06">Start a project</span>
            </button>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home-nav"
            >
              <div className="home-top">
                <div className="home-branding1">
                  <img alt="image" src="/logo.svg" className="home-logo" />
                  <span className="home-company">SPYRL</span>
                </div>
                <div data-thq="thq-close-menu" className="home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-icon">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="home-items1">
                <div className="home-links1">
                  <span className="nav-link">Work</span>
                  <span className="nav-link">Services</span>
                  <span className="nav-link">About</span>
                  <span className="nav-link">Contact</span>
                </div>
                <button className="start-button button home-button2">
                  <span className="home-text11">Start a project</span>
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>
      <header className="home-hero">
        <div className="home-header">
          <h1 className="home-title">
            <span>
              We&apos;ve Got
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text13">IT</span>
            <span> Covered</span>
            <br></br>
          </h1>
          <p className="home-description">
            <span>At Excalibur</span>
            <span className="home-text17">SEC</span>
            <span>
              , we&apos;ve got IT covered, but our mission goes beyond just
              technology. We&apos;re here to guide parents and adults through
              the cyber maze, helping you build the confidence needed to bridge
              the gap between the digital and real world.
            </span>
            <br className="home-text19"></br>
            <br></br>
            <br></br>
            <br></br>
            <span>
              In today&apos;s fast-paced, interconnected world, understanding IT
              and cyber security isn&apos;t just an option – it&apos;s a
              necessity. We&apos;re dedicated to simplifying the complex and
              making it accessible to everyone. Our goal is to empower you with
              the knowledge and tools to navigate the digital landscape safely
              and confidently.
            </span>
            <br className="home-text24"></br>
            <br className="home-text25"></br>
            <br className="home-text26"></br>
            <br></br>
            <span>
              With our expert services, friendly approach, and affordable
              solutions, we&apos;re your partner in ensuring a seamless and
              secure digital journey. Let&apos;s close the gap between the
              digital and real world
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text29">together</span>
            <span>
              .
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
          </p>
        </div>
      </header>
      <div className="home-video">
        <video
          src
          poster="https://images.unsplash.com/photo-1624969862644-791f3dc98927?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE5fHxjeWJlciUyMHNlY3VyaXR5fGVufDB8fHx8MTY5MzY2OTAyMHww&amp;ixlib=rb-4.0.3&amp;w=1500"
          className="home-video1"
        ></video>
      </div>
      <div className="home-description1">
        <div className="home-content">
          <div className="home-text32">
            <p className="home-paragraph">
              Struggling with IT or cyber security? Feeling confused,
              frustrated, or worried about your online safety? If you&apos;re
              nodding along, we&apos;re the solution you&apos;ve been searching
              for.
            </p>
            <p className="home-paragraph1">
              <span className="home-text33">
                We offer a wide array of services tailored to your needs:
              </span>
              <br className="home-text34"></br>
              <br className="home-text35"></br>
              <br className="home-text36"></br>
              <br className="home-text37"></br>
              <span className="home-text38">
                Cybersecurity awareness training
              </span>
              <br className="home-text39"></br>
              <br className="home-text40"></br>
              <span className="home-text41">
                Computer repair and optimization
              </span>
              <br className="home-text42"></br>
              <br className="home-text43"></br>
              <span className="home-text44">
                Network installation and support
              </span>
              <br className="home-text45"></br>
              <br className="home-text46"></br>
              <span className="home-text47">Post-hack recovery</span>
              <br className="home-text48"></br>
              <br className="home-text49"></br>
              <span className="home-text50">
                Our team is not just professional and friendly but also
                committed to making IT and cyber security accessible and
                affordable for everyone. We collaborate closely with you to
                understand your unique requirements and objectives, delivering
                customized, effective, and satisfying solutions.
              </span>
              <br className="home-text51"></br>
              <br className="home-text52"></br>
              <span className="home-text53">
                No matter what IT or cyber service you require, we&apos;re here
                to simplify your digital life. Contact us today, and let&apos;s
                tackle your IT and cyber security challenges
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text54">together</span>
              <span className="home-text55">.</span>
            </p>
          </div>
          <button className="start-button button home-button3">
            <span className="home-text56">Contact Us</span>
          </button>
        </div>
      </div>
      <div className="home-featured"></div>
      <div className="home-services">
        <div className="home-header1">
          <h2 className="heading">SERVICES</h2>
        </div>
        <div className="home-grid">
          <Service rootClassName="service-root-class-name"></Service>
          <Service
            Title="Workshops"
            Description="We offer interactive and engaging workshops on various cyber and IT topics, such as cyber security awareness, data protection, cloud computing, and more. "
            rootClassName="service-root-class-name1"
          ></Service>
          <Service
            Title="Network Assessments"
            Description="We conduct comprehensive network assessments to evaluate the performance, security, and reliability of your network infrastructure. We use advanced tools and techniques to identify and resolve any network vulnerabilities, bottlenecks, or inefficiencies."
            rootClassName="service-root-class-name5"
          ></Service>
          <Service
            Title="Hacking Victim Support"
            Description="We offer hacking victim support to help you recover from a cyber attack and prevent further damage. We can help you restore your data, systems, and reputation, as well as assist you with legal and regulatory compliance. We also provide guidance and advice on how to enhance your cyber security posture and reduce the risk of future attacks"
            rootClassName="service-root-class-name2"
          ></Service>
          <Service
            Title="Device Installation and Review"
            Description="We offer network device assessment and installations to help you select, install, and configure the best network devices for your needs. We can help you with routers, switches, firewalls, access points, and more. We can also assess your existing network devices and upgrade or replace them if needed. We ensure that your network devices are compatible, secure, and efficient"
            rootClassName="service-root-class-name4"
          ></Service>
        </div>
      </div>
      <div className="home-about"></div>
    </div>
  )
}

export default Home
