import { fetchingData } from "../store/action/actionItem";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const item = useSelector((state) => {
    return state.item;
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchingData());
  }, []);
  if (!item) {
    return <h2>Loading ..</h2>;
  }
  return (
    <div className="container mt-5">
      <div class="table-responsive">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Gender</th>
              <th scope="col">Address</th>
              <th scope="col">Edit</th>
            </tr>
          </thead>
          <tbody>
            {item?.map((el, idx) => {
              return (
                <tr key={idx}>
                  <td>
                    {el.firstName} {el.lastName}
                  </td>
                  <td>{el.gender}</td>

                  <td>
                    {el.addr?.map((ele, ix) => (
                      <>
                        {ele.street} {ele.house} , {ele.city}
                      </>
                    ))}
                  </td>

                  <td>
                    <button
                      type="submit "
                      class="btn btn-primary"
                      onClick={() => {
                        navigate(`/edit/${el._id}`);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
