import React, { Fragment } from 'react';
import { Api } from 'components';
import './search.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      teachers: [],
    };
    this.setData = this.setData.bind(this);
  }

  componentDidMount() {
    this.api.loadTeachers();
  }

  setData(teachers) {
    this.setState({ teachers: teachers.content });
  }

  render() {
    return (
      <div>
        <div className="row form">
          <div className="col-md-10 col-xs-10 form">
            <input type="text" className="form-control no-label" />
          </div>
          <div className="col-md-2 col-xs-2 form text-right">
            <button
              className="btn btn-primary no-label"
              onClick={() => this.api.loadTeachers()}
            >
              Buscar
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-3 form">
            <label htmlFor="#selectedState" className="title">
              <strong>Comunidad</strong>
            </label>
            <select className="form-control" name="selectedState" id="selectedState">
              <option value="town">Town</option>
            </select>
          </div>
          <div className="col-xs-12 col-md-9 form">
            <Api setData={this.setData} ref={(api) => { this.api = api; }}>
              <table className="table table-striped table-responsive">
                <thead>
                  <tr>
                    <th style={{ width: '20%' }}>Nombre</th>
                    <th style={{ width: '10%' }}>Idioma</th>
                    <th style={{ width: '15%' }}>Ø precio</th>
                    <th style={{ width: '5%' }}>Precio/hora</th>
                    <th style={{ width: '20%' }}>Niveles ofrecidos</th>
                    <th style={{ width: '20%' }}>Ø valoración</th>
                    <th style={{ width: '10%' }}>Puntos (logros)</th>
                  </tr>
                </thead>
                <tbody>
                  { this.state.teachers ?
                      this.state.teachers.map(teacher => (
                        <tr key={teacher.id}>
                          <th>{teacher.lastName} {teacher.lastName}</th>
                          <th>{teacher.language}</th>
                          <th>{teacher.averagePrice}</th>
                          <th>{teacher.price}</th>
                          <th>{teacher.level}</th>
                          <th>{teacher.averageValuation}</th>
                          <th>{teacher.achievementPoints}</th>
                        </tr>
                      )) :
                      <Fragment />
                  }
                </tbody>
              </table>
            </Api>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
