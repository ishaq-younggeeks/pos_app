import React from 'react'
import ReactDOM from 'react-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class PromotionDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalActive: false
    }
    this.handleModalOpen = this.handleModalOpen.bind(this)
    this.handleModalClose = this.handleModalClose.bind(this)
  }
  handleModalOpen() {
    this.setState({modalActive: true});
  }
  handleModalClose() {
    this.setState({modalActive: false});
  }
  render() {
    
    const {modalActive} = this.state;
    return (
      <div>
        <h1>React Modal Portal Version</h1>
        <p>React modals can be challenging. This is a simple modal that can be expanded upon. The hard part is over. Now it's all up to you.</p>
        <button 
          onClick={this.handleModalOpen}
          className="btn btn-primary"
        >
          Open Modal
        </button>
        { modalActive &&
          <Modal>
            <button 
              onClick={this.handleModalClose}
              className="btn btn-sm btn-secondary btn-close"
            >
              x
            </button>
            <h2>A pretty cool modal using react</h2>
            <p>React modals can be challenging. This is a simple modal that can be expanded upon. The hard part is over. Now it's all up to you.</p>
          </Modal>
        }
      </div>
    );
  }
}

export default PromotionDescription
