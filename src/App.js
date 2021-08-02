import logo from './logo.svg';
import './App.css';
import img from './assets/9.jpg'

function App() {
  return (
    <>
     <div className="container con">

      <h1 className="text-dark">Create Workouts</h1>
      <hr></hr>
      <h3 className="text-dark">Add Exercises</h3><br></br>

      <div className="box">
          <div className="box-text">Reverse Lunge</div>
          <div className="box-arrow"><a href="#"><i class="fas fa-chevron-down"></i></a></div>
      </div><br></br>

      <div className="box">
          <div className="box-text">Reps/Weight/Sets/Rest</div>
          <div className="box-arrow"><a href="#"><i class="fas fa-chevron-down"></i></a></div>
      </div><br></br>

      <div className="box-img">
          <div className="img-text">
            <div className="img-box">
              <img src={img} width="200px" height="200px"/>
            </div>
            <div className="text-box">
              <table cellSpacing="4px" cellPadding="4px">
                <tr>
                  <th colSpan="2">Reverse Lungs</th>
                </tr>
                <tr>
                  <th>Reps</th>
                  <td>12-12</td>
                </tr>
                <tr>
                  <th>Weights</th>
                  <td>0-12</td>
                </tr>
                <tr>
                  <th>Rest</th>
                  <td>30-12</td>
                </tr>
              </table>
            </div>
          </div>

          <div className="box-edit">
            <a data-toggle="collapse" href="#collapse" role="button" aria-expanded="false" aria-controls="collapseExample">Edit <i class="fas fa-times"></i></a>
          </div>
      </div><br></br>

      <div className="collapse" id="collapse">
      <div className="box-bottom">
          <table cellSpacing="5" cellPadding="10">
            <tr>
              <th><a href="#"><i class="fas fa-times"></i> SET 1</a></th>
              <td> reps <br></br><button className="btn">12</button></td>
              <td> weights <br></br><button className="btn">0</button></td>
              <td> rest <br></br><button className="btn">30</button></td>
            </tr>
            <tr>
              <th><a href="#"><i class="fas fa-times"></i> SET 2</a></th>
              <td> reps <br></br><button className="btn">12</button></td>
              <td> weights <br></br><button className="btn">12</button></td>
              <td> rest <br></br><button className="btn">12</button></td>
            </tr>
          </table>
            <button className="btn btn-outline-warning" style={{color:'black'}}>Add New Set</button>
      </div>
    </div>
     </div>
    </>
  );
}

export default App;
