import { useQuery } from "@tanstack/react-query";
const User2 = () => {
  const { data: users, isPending } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(
        "https://coffe-store-server-cyan.vercel.app/user"
      );
      return res.json();
    },
  });

  if (isPending) {
    return <span className="loading loading-bars loading-lg"></span>;
  }
  // const [users, setUsers] = useState([])
  // useEffect(() => {
  //     fetch('https://coffe-store-server-cyan.vercel.app/user')
  //         .then(res => res.json())
  //         .then(data => {
  //             setUsers(data)
  //         })
  // }, [])

  // const handelDeleteBtn = (id) => {
  //     console.log(id);
  //     Swal.fire({
  //         title: "Are you sure?",
  //         text: "Are you sure that you want to delete it?",
  //         icon: "warning",
  //         showCancelButton: true,
  //         confirmButtonColor: "#3085d6",
  //         cancelButtonColor: "#d33",
  //         confirmButtonText: "Yes, delete it!"
  //     }).then((result) => {
  //         if (result.isConfirmed) {
  //             Swal.fire({
  //                 title: "Good Luck !!!",
  //                 text: "Your User has been deleted.",
  //                 icon: "success"
  //             });
  //             fetch(`https://coffe-store-server-cyan.vercel.app/user/${id}`, {
  //                 method: 'DELETE'
  //             })
  //                 .then(res => res.json())
  //                 .then(data => {
  //                     console.log(data);
  //                     if (data.deletedCount > 0) {
  //                         const deleteUser = users.filter(user => user._id !== id)
  //                         setUsers(deleteUser)
  //                     }
  //                 })
  //         }
  //     });

  // }
  return (
    <div className="max-w-[1170px] mx-auto">
      <h3>Manage Users</h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Id</th>
              <th>Email</th>
              <th>Last Login Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, idx) => (
              <tr key={idx}>
                <th>{idx + 1}</th>
                <td>{user.createdAt}</td>
                <td>{user.email}</td>
                <td>{user.lastSignInTime}</td>
                <td>
                  <button
                    onClick={() => handelDeleteBtn(user._id)}
                    className="btn bg-gree"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User2;
