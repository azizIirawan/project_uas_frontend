/* eslint-disable react/prop-types */
export default function Team({ nama, npm, tugas,image}) {
    return (
      <div className="col">
        <div className="card">
          <div className="card-body text-center">
            <h5 className="card-title">{image}</h5>
            <h6>{nama}</h6>
            <h6>{npm}</h6>
            <h6>{tugas}</h6>
          </div>
        </div>
      </div>
    );
  }
  