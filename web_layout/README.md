# Example websites
GitHub :  https://github.com/MattpLawrence
TKRP: https://thekittenproject.org/landing-page


## Why we are here

## Who I am

## What we will go over

## How I see basic design

## What we will do

### Workday Paint




## Things to have open

 TKRP website
 workday paint


    // <Router>
    //   <div id="bodyContainer">
    //     <Header />
    //     <Routes>
    //       <Route path="/" element={<LandingPage />} />
    //       <Route path="/" element={<LoginPage />} />
    //     </Routes>
    //   </div>
    //   <Footer />
    // </Router>

        <div id="bodyContainer">
      <div id="headerContainer"></div>
      <div id="mainContainer">
        <div id="banner"></div>
        <div id="pageContainer">
          <div className="startContainer">
            <h2>Good Evening</h2>
            <div className="startContainer"></div>
            <div className="centerContainer"></div>
            <div className="endContainer"></div>
          </div>
          <div className="endContainer"></div>
        </div>
      </div>
      <div id="footerContainer"></div>
    </div>


    

#bodyContainer{
    width: 100vw;
    height: 100%;
    background-color: blue;
    display: flex;
    flex-direction: column;
    justify-content: space-between;


    #headerContainer{
        background-color: yellow;
        min-height: 6rem;
    }

    #mainContainer{
        background-color: red;
        min-height: calc(100vh - 10rem);

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        #banner{
         background-color: blue;
         height: 10rem;
         width: 100%;
        }

        #pageContainer{
            background-color: rgb(212, 212, 212);
            height: 100%;
            width: 100%;
            max-width: 1200px;
            // min-height: calc(100vh - 20rem );
            display: flex;
            justify-content: center;
            align-items: center;

            .startContainer{
                width: 80%;
                height: 100%;
                background-color: rgb(235, 233, 233);
            }

            .endContainer{
                width: 20%;
                // height: 100%;
            }
        }


    }

    #footerContainer{
        background-color: green;
        min-height: 4rem;
    }
}