import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import TagIcon from '@mui/icons-material/Tag';
import './Design.css'
import HomeIcon from '@mui/icons-material/Home';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import KitchenIcon from '@mui/icons-material/Kitchen';
import ChairIcon from '@mui/icons-material/Chair';


export const Homepage=()=>{
    return(
        <>
        <div id="bc1">
            <Navbar expand="lg" variant="dark" >
                <Container>
                    <Navbar.Brand href="/" className="text-dark"><TagIcon></TagIcon>Hashtag-Super-Sale</Navbar.Brand>
                    <Navbar.Toggle aria-controls="manoj" />
                    <Navbar.Collapse id="manoj">
                        <Nav className="ms-3">   
                        <span>
                        <NavDropdown title="Home"  id="basic-nav-dropdown" className="ms-3 mt-start">
                        <NavDropdown.Item href="createbikedetails"><HomeIcon></HomeIcon>Living-Room</NavDropdown.Item>
                        <NavDropdown.Item href="listallbikedetails"><ChairIcon></ChairIcon>Home Decore</NavDropdown.Item>
                        <NavDropdown.Item href="listallbikedetails"><HomeRepairServiceIcon></HomeRepairServiceIcon>Tools&Utility</NavDropdown.Item>
                        <NavDropdown.Item href="listallbikedetails"><KitchenIcon></KitchenIcon>Kitchen&Dining</NavDropdown.Item>
                        </NavDropdown>
                        </span>
                        <NavDropdown title="Electronics" id="basic-nav-dropdown" className="ms-3">
                        <NavDropdown.Item href="createbikedetails">Laptop</NavDropdown.Item>
                        <NavDropdown.Item href="listallbikedetails">Home theatres</NavDropdown.Item>
                        <NavDropdown.Item href="listallbikedetails">Power-Bank</NavDropdown.Item>
                        <NavDropdown.Item href="listallbikedetails">Headset</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Fashion" id="basic-nav-dropdown" className="ms-3">
                        <NavDropdown.Item href="createbikedetails">Men's dress</NavDropdown.Item>
                        <NavDropdown.Item href="listallbikedetails">Women dress</NavDropdown.Item>
                        <NavDropdown.Item href="listallbikedetails">Kids</NavDropdown.Item>
                        <NavDropdown.Item href="listallbikedetails">Bags</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Mobile" id="basic-nav-dropdown" className="ms-3">
                        <NavDropdown.Item href="listallbikedetails">Apple</NavDropdown.Item>
                        <NavDropdown.Item href="listallbikedetails">One-plus</NavDropdown.Item>
                        <NavDropdown.Item href="listallbikedetails">Red-Mi</NavDropdown.Item>
                        <NavDropdown.Item href="listallbikedetails">Samsung</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                        <Nav className="ms-5">
                        <button className="btn btn-outline-dark me-5 " onClick={()=>
                        {
                            sessionStorage.removeItem("auth");
                            window.location.assign("/")
                        }}>
                                Logout
                        </button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </div>
            <>
            <div className="bg-dark">
                <div className="d-flex">
                    <marquee>
                        <h4 className="text-warning">15% to 30 % Offer to going on Now Hurry Up..</h4>
                    </marquee>
                </div>
                <div className="row justify-content-center">
                    <div className="card bg-dark">
                        <div className="card-body">
                            <div className="col-12c">
                            <h4 className="card-tittle text-light">Welcome to the Our Website</h4>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
           
        </>
            </>
    )
}