/* eslint-disable react/prop-types */
const MemberList = ({ data, setData, deleteData, editData }) => {
  return (
    <div>
      <div className="container">
        <h2 className="my-4 text-center">My Developer Team</h2>
        {data.length > 0 ? (
          data.map((item) => {
            return (
              <div className="card mb-3" key={item.id}>
                <div className="card-body">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="img-fluid rounded-circle w-25 mb-3"
                  />
                  <h4 className="card-title">{item.name}</h4>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {item.position}
                  </h6>
                  <button
                    className="btn btn-warning mx-2"
                    onClick={() => editData(item.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteData(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <h4 className="text-center">No Data Found</h4>
        )}
        <button className="btn btn-primary mx-5" onClick={() => setData([])}>
          Clear
        </button>
      </div>
    </div>
  );
};
export default MemberList;
