import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import axios from 'axios';
import { host } from '../../helpers/constants/host';

class Session extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRoom: null,
      roomName: null
    };
  }

  componentWillMount() {
    if (!navigator.webkitGetUserMedia && !navigator.mozGetUserMedia) {
      alert('WebRTC is not available in your browser.');
    }

    window.addEventListener('beforeunload', this.leaveRoomIfJoined);
    this.getIdentity();
  }

  getIdentity() {
    this.props.updateIdentity()
    .then(() => {
      document.getElementById('room-controls').style.display = 'block';
    })
    .catch((err) => {
      console.log('Error in update identity action handler', err);
    });
  }

  preview() {
    if (!this.props.previewMedia) {
      this.props.updatePreviewMedia(new Twilio.Video.LocalMedia());

      Twilio.Video.getUserMedia()
      .then((mediaStream) => {
        this.props.previewMedia.addStream(mediaStream);
        this.props.previewMedia.attach('#local-media');
        this.log('Test');
      })
      .catch((err) => {
        console.error('Unable to access local media', err);
        this.log('Unable to access Camera and Microphone');
      });
    }
  }

  joinRoom() {
    this.props.updateRoomName(this.props.roomNameInput);
    setTimeout(() => {
      if (this.props.roomName) {
        this.log("Joining room '" + this.props.roomName + "'...");

        this.props.videoClient.connect({ to: this.props.roomName})
        .then((room) => {
          this.roomJoined(room);
        })
        .catch((err) => {
          this.log('Could not connect to Twilio: ' + err.message);
        });
      } else {
        alert('Please enter a room name.');
      }
    });
  }

  roomJoined(room) {
    this.props.updateActiveRoom(room);

    this.log("Joined as '" + this.props.identity + "'");

    document.getElementById('button-join').style.display = 'none';
    document.getElementById('button-leave').style.display = 'inline';

    if (!this.props.previewMedia) {
      room.localParticipant.media.attach('#local-media');
    }

    room.participants.forEach((participant) => {
      this.log("Already in Room: '" + participant.identity + "'");
      participant.media.attach('#remote-media');
    });

    // When a participant joins, draw their video on screen
    room.on('participantConnected', (participant) => {
      this.log("Joining: '" + participant.identity + "'");
      participant.media.attach('#remote-media');
    });

    // When a participant disconnects, note in log
    room.on('participantDisconnected', (participant) => {
      this.log("Participant '" + participant.identity + "' left the room");
      participant.media.detach();
    });

    // When we are disconnected, stop capturing local video
    // Also remove media for all remote participants
    room.on('disconnected', () => {
      this.log('Left');
      room.localParticipant.media.detach();
      room.participants.forEach((participant) => {
        participant.media.detach();
      });

      this.props.updateActiveRoom(null);

      document.getElementById('button-join').style.display = 'inline';
      document.getElementById('button-leave').style.display = 'none';

    });
  }

  leaveRoom() {
    this.log('Leaving room...');
    if (this.props && this.props.activeRoom) {
      this.props.activeRoom.disconnect();
    }
  }

  leaveRoomIfJoined() {
    if (this.props && this.props.activeRoom) {
      this.props.activeRoom.disconnect();
    }
  }

  log(message) {
    var logDiv = document.getElementById('log');
    logDiv.innerHTML += '<p>&gt;&nbsp;' + message + '</p>';
    logDiv.scrollTop = logDiv.scrollHeight;
  }

  render() {
    return (
      <div className='session-container'>
        <div id='remote-media'></div>
        <div id='controls'>
          <div id='preview'>
            <p className='instructions'>Session</p>
            <div id='local-media'></div>
            <button id='button-preview' onClick={ this.preview.bind(this) }>Preview My Camera</button>
          </div>
          <div id='room-controls'>
            <p className='instructions'>Room Name:</p>
            <input id='room-name' type='text' value={ this.props.roomNameInput } onChange={ this.props.updateRoomNameInput } placeholder='Enter a room name'/>
            <button id='button-join' onClick={ this.joinRoom.bind(this) }>Join Room</button>
            <button id='button-leave' onClick={ this.leaveRoom.bind(this) }>Leave Room</button>
          </div>
          <div id='log'></div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    videoClient: state.session_reducer.videoClient,
    activeRoom: state.session_reducer.activeRoom,
    previewMedia: state.session_reducer.previewMedia,
    identity: state.session_reducer.identity,
    roomName: state.session_reducer.roomName,
    roomNameInput: state.session_reducer.roomNameInput
  }
}

export default connect(mapStateToProps, actions)(Session);
