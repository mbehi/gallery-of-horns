import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class SelectedBeast extends React.Component {

  render() {
    return (
     <div id="beast-modal">
      <Modal 
        show={this.props.show} 
        onHide={this.props.hideBeastInModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >

        
        <Modal.Header closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={this.props.beast.image_url} alt={this.props.beast.title} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={this.props.hideBeast}>Close
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
     </div>
    )
  }
}


export default SelectedBeast;