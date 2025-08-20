
const Admin = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Admin Portal</h1>
      <section>
        <h2>Manage Products</h2>
        <button>Add Product</button>
        <button>Edit Product</button>
        <button>Delete Product</button>
      </section>
      <section>
        <h2>Manage Languages</h2>
        <button>Add Language</button>
        <button>Edit Language</button>
        <button>Delete Language</button>
      </section>
      <section>
        <h2>Manage Admin Users</h2>
        <button>Add Admin</button>
        <button>Edit Admin</button>
        <button>Delete Admin</button>
      </section>
    </div>
  );
};

export default Admin;