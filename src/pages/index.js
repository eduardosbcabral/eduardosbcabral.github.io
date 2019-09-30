import React from 'react'

import styles from './index.module.css'

import GithubLogo from '../../static/github.svg'
import GithubInverseLogo from '../../static/github-inverse.svg'

import LinkedinLogo from '../../static/linkedin.svg'
import LinkedinInverseLogo from '../../static/linkedin-inverse.svg'

import TwitterLogo from '../../static/twitter.svg'
import TwitterInverseLogo from '../../static/twitter-inverse.svg'

import SEO from '../components/SEO'

export default class Index extends React.Component {
  
  constructor() {
    super();
    this.state = {
      mensagem: '',
      theme: {
        backgroundColor: '#FFF',
        color: '#000000',
        dark: false
      }
    }
  }

  inverterCores = () => {
    if(this.state.theme.color === '#000000') {
      this.setState({
        theme: {
          backgroundColor: '#000000',
          color: '#FFF',
          dark: true
        }
      })
    } else if(this.state.theme.color === '#FFF') {
      this.setState({
        theme: {
          backgroundColor: '#FFF',
          color: '#000000',
          dark: false
        }
      })
    }
  }

  renderGithubImage = () => {
    if(!this.state.theme.dark) {
      return <img 
      src={GithubLogo}
      onClick={() => window.open("https://github.com/eduardosbcabral", "_blank")}
      onMouseOver={e => {
        e.currentTarget.src = GithubInverseLogo
        this.setState({ mensagem: 'github.com/eduardosbcabral' })
      }}
      onMouseOut={e => {
        e.currentTarget.src = GithubLogo
        this.setState({ mensagem: '' })
      }}
      className={styles.icon}
      alt='GitHub' />
    }

    return <img 
    src={GithubInverseLogo}
    style={{backgroundColor: '#fff', borderRadius: '50%', padding: '3px'}}
    onClick={() => window.open("https://github.com/eduardosbcabral", "_blank")}
    onMouseOver={e => {
      e.currentTarget.src = GithubLogo
      this.setState({ mensagem: 'github.com/eduardosbcabral' })
    }}
    onMouseOut={e => {
      e.currentTarget.src = GithubInverseLogo
      this.setState({ mensagem: '' })
    }}
    className={styles.icon}
    alt='GitHub' />
  }

  renderTwitterImage = () => {
    if(!this.state.theme.dark) {
      return <img
      src={TwitterLogo}
      onClick={() => window.open("https://twitter.com/Theduardds", "_blank")}
      onMouseOver={e => {
        e.currentTarget.src = TwitterInverseLogo
        this.setState({ mensagem: 'twitter.com/Theduardds' })
      }}
      onMouseOut={e => {
        e.currentTarget.src = TwitterLogo
        this.setState({ mensagem: '' })
      }}
      className={styles.icon}
      alt='Twitter' />
    }

    return <img
      src={TwitterInverseLogo}
      style={{backgroundColor: '#fff', borderRadius: '30px', padding: '3px'}}
      onClick={() => window.open("https://twitter.com/Theduardds", "_blank")}
      onMouseOver={e => {
        e.currentTarget.src = TwitterLogo
        this.setState({ mensagem: 'twitter.com/Theduardds' })
      }}
      onMouseOut={e => {
        e.currentTarget.src = TwitterInverseLogo
        this.setState({ mensagem: '' })
      }}
      className={styles.icon}
      alt='Twitter' />
  }

  renderLinkedinImage = () => {
    if(!this.state.theme.dark) {
      return <img
      src={LinkedinLogo}
      onClick={() => window.open("https://linkedin.com/in/eduardosbcabral", "_blank")}
      onMouseOver={e => {
        e.currentTarget.src = LinkedinInverseLogo
        this.setState({ mensagem: 'linkedin.com/in/eduardosbcabral' })
      }}
      onMouseOut={e => {
        e.currentTarget.src = LinkedinLogo
        this.setState({ mensagem: '' })
      }}
      className={styles.icon}
      alt='LinkedIn' />
    }

    return <img
    src={LinkedinInverseLogo}
    style={{backgroundColor: '#fff', borderRadius: '30px', padding: '3px'}}
    onClick={() => window.open("https://linkedin.com/in/eduardosbcabral", "_blank")}
    onMouseOver={e => {
      e.currentTarget.src = LinkedinLogo
      this.setState({ mensagem: 'linkedin.com/in/eduardosbcabral' })
    }}
    onMouseOut={e => {
      e.currentTarget.src = LinkedinInverseLogo
      this.setState({ mensagem: '' })
    }}
    className={styles.icon}
    alt='LinkedIn' />
  }

  render() {
    return (
      <>
        <SEO />
        <div 
        className={styles.container}
        style={this.state.theme} 
        onClick={() => this.inverterCores()}>
          <span className={styles.smallestText}>
          Click anywhere
          </span>
          <div className={styles.textContainer}>
            <div className={[styles.text, styles.textMajor].join(' ')}>
              { this.state.mensagem !== '' ?
                this.state.mensagem : 
                (
                  <div>
                    <p className={styles.textMajor}>
                      Hi, i'm Eduardo Cabral, full stack web developer.
                    </p>
                    <p className={styles.textMinor}>
                      I work mainly with Microsoft back-end technologies like .NET and some front-end frameworks such as Angular and React.
                    </p>
                  </div>
                )
              }
            </div>
          </div>
          <div className={styles.iconContainer}>
            <div className={styles.iconBox}>
              { this.renderGithubImage() }
            </div>
            <div className={styles.iconBox}>
              {
              this.renderLinkedinImage()
              }
            </div>
            <div className={styles.iconBox}>
              { this.renderTwitterImage() }
            </div>
            {/* <div className={styles.iconBox}>
            <img
              src={ICONS[3]}
              onMouseOver={e => (e.currentTarget.src = ICONS_INVERSE[3])}
              onMouseOut={e => (e.currentTarget.src = ICONS[3])}
              className={styles.icon}
              alt='Me' />
            </div> */}
          </div>
        </div>
      </>
    )
  }
}