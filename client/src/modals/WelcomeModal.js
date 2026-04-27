import { Modal, Button, Card, Row, Col } from 'react-bootstrap';
import { FaPlus, FaFileImport, FaRocket, FaFileUpload, FaPlug } from 'react-icons/fa';
import 'bootstrap-icons/font/bootstrap-icons.css';

function WelcomeModal({ show, handleClose, onAddScopeTarget, onImportData, onUploadConfig, onUseAPI }) {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      animation={true}
      size="lg"
      centered
      data-bs-theme="dark"
    >
      <Modal.Header className="flex-column align-items-center border-0 pb-0">
        <Modal.Title className="w-100 text-center text-danger mb-2">
          Welcome to Pentrixa!
        </Modal.Title>
      </Modal.Header>
      
      <Modal.Body className="px-4 pb-3">
        <div className="text-center mb-3">
          <h6 className="text-white mb-2">
            <FaRocket className="me-2 text-danger" />
            Ready to Get Started? 
            <FaRocket className="ms-2 text-danger" />
          </h6>
        </div>

        <Row className="g-3">
          <Col md={12}>
            <Card 
              className="h-100 border-2 border-danger hover-card"
              onClick={onAddScopeTarget}
              style={{ 
                cursor: 'pointer',
                transition: 'all 0.3s ease-in-out'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(220, 53, 69, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <Card.Body className="text-center p-3">
                <div className="mb-2">
                  <FaPlus size={32} className="text-danger" />
                </div>
                <h6 className="text-white mb-2">Add Scope Target</h6>
                <p className="text-white-50 mb-2" style={{ fontSize: '0.85rem' }}>
                  Create a new scope target
                </p>
                <div className="d-flex justify-content-center flex-wrap gap-2 mb-3">
                  <img src="/images/URL.png" alt="URL" style={{ width: '22px', height: '22px' }} />
                </div>
                <Button 
                  variant="danger" 
                  size="sm"
                  className="w-100"
                  onClick={(e) => {
                    e.stopPropagation();
                    onAddScopeTarget();
                  }}
                >
                  <FaPlus className="me-1" style={{ fontSize: '0.85rem' }} />
                  <span style={{ fontSize: '0.85rem' }}>Create Target</span>
                </Button>
              </Card.Body>
            </Card>
          </Col>



    
        </Row>


      </Modal.Body>
    </Modal>
  );
}

export default WelcomeModal; 