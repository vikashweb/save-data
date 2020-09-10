import Header from '../components/Header';
import HomeProfile from '../components/HomeProfile';
import Timeline from '../components/Timeline';


const Home=()=>{
  return (<>
     <div className="container-fluid ">
      <header>
         <Header/>
      </header>
      <section>
       <HomeProfile/>
       <Timeline/>
      </section>
      <footer>

      </footer>

     </div>
     <style jsx global>{
       `
       text-transform-capitalize;
       @media only screen and (max-width: 700px) {
            head{
                font-size:5px;
            }
       
       `
     }</style>

  </>)
}
export default Home ;