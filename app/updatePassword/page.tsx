import UpdatePassword from "../components/UpdatePassword";

export default function UpdatePasswordPage() {
  return (
    <div className="content-wrapper">
      <div className="container">
        <div className="form-container">
          <h2 style={{ marginBottom: "18px", textAlign: "center" }}>
            Actualizar contraseña
          </h2>

          <UpdatePassword />
        </div>
      </div>
    </div>
  );
}
