import React from "react";
//import "../../styles/index.css"; // Asegúrate de que la ruta a tu CSS sea correcta

export const Registro = () => {
    return (
        <div className="container d-flex justify-content-center align-items-center py-5" style={{ minHeight: "80vh" }}>
            <div className="card shadow-sm p-4" style={{ maxWidth: "450px", width: "100%", borderRadius: "20px", border: "none" }}>

                {/* Cabecera basada en el dibujo */}
                <div className="text-center mb-3">
                    <small className="text-muted d-block mb-1">Baby Zzzync</small>
                    <h3 className="fw-bold" style={{ color: "var(--purple-deep)", letterSpacing: "1px" }}>CREAR CUENTA</h3>
                </div>

                {/* Placeholder de Foto */}
                <div className="profile-circle mb-4">
                    <i className="fas fa-plus fa-lg"></i>
                    <span className="small fw-bold mt-1">FOTO</span>
                </div>

                <form>
                    {/* Input: Correo Electrónico */}
                    <div className="d-flex align-items-center mb-3">
                        <i className="fas fa-user me-3 text-secondary" style={{ width: "20px" }}></i>
                        <input type="email" className="form-control input-line" placeholder="CORREO ELECTRÓNICO" />
                    </div>
                    {/* Input: Contraseña */}
                    <div className="d-flex align-items-center mb-3">
                        <i className="fas fa-lock me-3 text-secondary" style={{ width: "20px" }}></i>
                        <input type="password" className="form-control input-line" placeholder="CONTRASEÑA" />
                        <i className="fas fa-eye ms-2" style={{ color: "var(--cyan-neon)", cursor: "pointer" }}></i>
                    </div>

                    {/* Input: Confirmar Contraseña */}
                    <div className="d-flex align-items-center mb-3">
                        <i className="fas fa-lock me-3 text-secondary" style={{ width: "20px" }}></i>
                        <input type="password" className="form-control input-line" placeholder="CONFIRMAR CONTRASEÑA" />
                        <i className="fas fa-eye ms-2" style={{ color: "var(--cyan-neon)", cursor: "pointer" }}></i>
                    </div>

                    {/* Input: Nombre */}
                    <div className="d-flex align-items-center mb-3">
                        <i className="fas fa-address-card me-3 text-secondary" style={{ width: "20px" }}></i>
                        <input type="text" className="form-control input-line" placeholder="NOMBRE" />
                    </div>

                    {/* Input: Apellidos */}
                    <div className="d-flex align-items-center mb-3">
                        <i className="fas fa-users me-3 text-secondary" style={{ width: "20px" }}></i>
                        <input type="text" className="form-control input-line" placeholder="APELLIDOS" />
                    </div>
                    {/* Input: Edad */}
                    <div className="d-flex align-items-center mb-3">
                        <i className="fas fa-calendar-alt me-3 text-secondary" style={{ width: "20px" }}></i>
                        <input type="number" className="form-control input-line" placeholder="EDAD" />
                    </div>

                    {/* Selector de Género (Radios) */}
                    <div className="d-flex justify-content-center gap-4 my-4">
                        <div className="form-check">
                            <input className="form-check-input shadow-none" type="radio" name="gender" id="m" />
                            <label className="form-check-label small fw-bold" htmlFor="m">MASCULINO</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input shadow-none" type="radio" name="gender" id="f" />
                            <label className="form-check-label small fw-bold" htmlFor="f">FEMENINO</label>
                        </div>
                    </div>

                    {/* Botón de Acción */}
                    <div className="text-center">
                        <button type="submit" className="btn btn-zzzync w-100 py-2 fw-bold text-uppercase shadow-sm">
                            Crear Cuenta
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};