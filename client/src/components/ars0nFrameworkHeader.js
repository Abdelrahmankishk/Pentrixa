import { Row, Col, Button } from 'react-bootstrap';

function Ars0nFrameworkHeader({ onSettingsClick, onExportClick, onImportClick, onToolsClick }) {
  return (
    <Row className="align-items-center mb-3">
      <Col xs="auto">
       <h1 class = "text-danger fs-1">Pentrixa</h1> 
      </Col>
      <Col xs="auto" className="ms-auto d-flex justify-content-end">
         
        {/*
        <Button 
          variant="link" 
          className="text-white p-1"
          onClick={onImportClick}
          title="Import Database"
        >
          <i className="bi bi-upload" style={{ fontSize: '1.5rem' }}></i>
        </Button> fa-rotate-270
        <Button 
          variant="link" 
          className="text-white p-1"
          onClick={onSettingsClick}
          title="Settings"
        >
          <i className="bi bi-gear" style={{ fontSize: '1.5rem' }}></i>
        </Button>
        */}
        
        <Button 
          variant="link" 
          className="text-white p-1"
          onClick={onExportClick}
          title="Export Data"
        >
          <i className="bi bi-download" style={{ fontSize: '1.5rem' }}></i>
        </Button>
        
      </Col>
    </Row>
  );
}

export default Ars0nFrameworkHeader;
