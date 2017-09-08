import React, { Component } from 'react';
import './style.less'

class WordItem extends Component {
  render() {
    const extra = /(.*)(ue)(.*)/g.exec(this.props.word)
    return (
      <li>{extra[1]}<span>{extra[2]}</span></li>
    )
  }
}

class Head extends Component {
  render() {
    return (
      <header>
        <p className="header-title">
          <span className="header-name">我家 {this.props.name}</span> <br/>
          <span className="header-desc">在蛋糕英语100天训练营</span>
        </p>
        <div className="header-day">累计学习{this.props.day}天</div>
      </header>
    )
  }
}

class VideoModule extends Component {
  constructor() {
    super()
    this.state = {
      show: true
    }
  }
  componentDidMount() {
    console.log(this.refs.video)
    const vi = this.refs.video
    vi.addEventListener('ended', () => {
      console.log('end')
      this.setState({
        show: true
      })
    })
  }

  clickPlayIcon(){
    console.log('click play icon')
    console.log(this.refs.video)
    this.refs.video.play()
    this.setState({
      show: false
    })
  }

  render() {
    const cx = this.state.show ? 'video-screen' : 'video-screen hide'
    return (
      <div className="video">
        <div className={cx}>
          <div className="play-icon centering" onClick={this.clickPlayIcon.bind(this)}>
            <svg className="play-triangle" width="40px" height="40px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="小蛋糕新打卡页面" transform="translate(-307.000000, -368.000000)" fill="#FF6047">
                        <g id="播放按钮" transform="translate(256.000000, 323.000000)">
                            <g id="Group-7" transform="translate(11.807031, 10.842857)">
                                <path d="M62.0093797,36.0798683 L78.6444411,69.6884444 L78.6444411,69.6884444 C79.3794214,71.1733586 78.7714798,72.9729386 77.2865656,73.7079188 C76.872828,73.9127043 76.417411,74.0192438 75.9557662,74.0192438 L42.6856433,74.0192438 L42.6856433,74.0192438 C41.0287891,74.0192438 39.6856433,72.6760981 39.6856433,71.0192438 C39.6856433,70.5575991 39.7921829,70.102182 39.9969684,69.6884444 L56.6320298,36.0798683 L56.6320298,36.0798683 C57.36701,34.5949542 59.16659,33.9870126 60.6515042,34.7219928 C61.2406811,35.0136146 61.7177579,35.4906913 62.0093797,36.0798683 Z" id="Triangle" transform="translate(59.321038, 54.214623) rotate(90.000000) translate(-59.321038, -54.214623) "></path>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
          </div>
        </div>
        <video ref="video" src={this.props.src} poster={this.props.poster} playsInline>抱歉，您的浏览器不支持内嵌视频</video>
      </div>
    )
  }
}

class Desc extends Component {
  render() {
    return (
      <div className="desc">
        <p className="desc-content">今天我知道，字母ue在blue中的发音是这样的</p>
        <div className="new-word">
          <div className="new-word-title">今天新学会的单词</div>
          <ul className="new-word-group">
            {
              this.props.words.map((item,idx) =>
                <WordItem key={idx} word={item}/>
              )
            }
          </ul>
        </div>
      </div>
    )
  }
}

class Main extends Component {
  render() {
    return (
      <section className="main">
        <VideoModule {...this.props} />
        <Desc words={this.props.words}/>
      </section>
    )
  }
}

class Footer extends Component {
  render() {
    return (
      <section className="footer">
        <div className="footer-content">
          <p style={{lineHeight:1.81}}>
            长按识别二维码关注“蛋糕英语”<br />
            <strong>每天20分钟</strong><br />
            <strong>100天搞定小学6年英语</strong>
          </p>
        </div>
        <div className="footer-qr-code">
          <img className="qr-code" src={this.props.src} alt="此处应有二维码" />
        </div>
      </section>
    )
  }
}

class Share extends Component {
  constructor() {
    super();
    this.state = {
      childName: 'Heoo',
      day: 0,
      videoSrc: "//of8cwsho2.bkt.clouddn.com/video/blue.mp4",
      videoPoster: "../../assets/images/cake-boy.png",
      words: ['blue', 'rue', 'sue', 'glue', 'vue'],
      qrCodeSrc: ''
    }
  }

  getResource() {

  }

  render() {
    return (
      <div className="container">
        <Head name={this.state.childName} day={this.state.day}/>
        <Main src={this.state.videoSrc} poster={this.state.videoPoster} words={this.state.words} />
        <Footer src={this.state.qrCodeSrc}/>
      </div>
    )
  }
}


export default Share;
