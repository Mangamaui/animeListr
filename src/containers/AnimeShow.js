import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addShow } from '../actions/userCollection';


class AnimeShow extends React.Component {
    constructor(props) {
        super(props);
        this.handleBTN = this.handleBTN.bind(this);
    }

    handleBTN(e) {
        e.preventDefault();
        this.props.addShow(this.props.id);
    }

 setup() {
     const BTNICON = (this.props.inCollection) ? "tick" : "plus";
     const CLASSES = `icon icon-${BTNICON}`;
     const DISABLED = (this.props.inCollection);
     const ADDBTN = (<button className="action-btn add-btn "
        onClick={this.handleBTN} 
        disabled={DISABLED}
        name="addShow"><i className={CLASSES}></i>
     </button>);

     const AUTHENTICATED = this.props.authentication != null;

     return {
         img: "/images/" + this.props.cover,
         printBtn: AUTHENTICATED ? ADDBTN : ""

     }
 }

  render() {
      const settings = this.setup();

    return(
      <li className="show-card animeShow">
        <div className="show-card__image-wrap">
          <img className="show-card__image" src={settings.img} alt={this.props.title}/>
          {settings.printBtn}
        </div>
        <span className="show-card__info">
          <p className="show-card_title">{this.props.title}</p>
          <span className="show-card__episode-counter">{this.props.episodes} episodes</span>
        </span>
      </li>
    )
  }

}

const mapDispatchToProps = (dispatch) => {
    return {
        addShow: bindActionCreators(addShow, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(AnimeShow);
