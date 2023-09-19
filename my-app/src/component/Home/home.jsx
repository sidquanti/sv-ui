import React from "react";
import Footer from "../Footer/footer";
import LibraryList from "../LibraryList/libraryLists";

function Home(props) {

  const {userProfile={},userEnrollmentList=[],selectedCityId}=props;
  
  return (
    <div className="content" style={{
      // backgroundImage: 'url("https://content.jdmagicbox.com/comp/ghaziabad/v6/011pxx11.xx11.230614181449.u4v6/catalogue/techouse-coaching-and-library-ghaziabad-public-libraries-ttt9xhbc5l.jpg")',
      backgroundSize: 'cover', // Adjust as needed
      backgroundPosition: 'center', // Adjust as needed
      backgroundRepeat: 'no-repeat', // Adjust as needed
    }}>
      {/* <PrimarySearchAppBar handleMenuClose={handleMenuClose} anchorEl={anchorEl} setAnchorEl={setAnchorEl} setMobileMoreAnchorEl={setMobileMoreAnchorEl} handleMobileMenuClose={handleMobileMenuClose} onSelectCity={handleSelectCity} handleLibrary={handleLibrary} handleEnrollment={handleEnrollment} handleProfile={handleProfile}/> */}
      {userProfile && userProfile.email && (
        <div style={{ marginBottom: '10px' }}>
          <div>
            <span>Name: {userProfile.name}</span>
          </div>
          <div>
            <span>Email: {userProfile.email}</span>
          </div>
          <div>
            <span>Mobile: {userProfile.mobile}</span>
          </div>
        </div>
      )}
      {userEnrollmentList.length>0&&userEnrollmentList.map((ele)=>(
             <div style={{ marginBottom: '10px' }}>
                <span style={{ marginRight: '10px' }}>{ele.libraryId}</span>
                <span style={{ marginRight: '10px' }}>{ele.status}</span>
                <span style={{ marginRight: '10px' }}>{ele.startDate.toString()}</span>
                <span style={{ marginRight: '10px' }}>{ele.endDate.toString()}</span>
            </div>
        ))}     
      {selectedCityId && <LibraryList selectedCityId={selectedCityId} />}
      <div><br /></div>
    <div><br /></div>
    <div><br /></div>
    <div><br /></div>
    <div><br /></div>
    <div><br /></div>
    <div><br /></div>
    <div><br /></div>
    <div><br /></div>
    <div><br /></div>
    <div><br /></div>
      <Footer />
    </div>
  );
}
export default Home;
