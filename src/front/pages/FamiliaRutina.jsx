import React, { useState } from "react";

export const FamiliaRutina = () => {
    const [task, setTask] = useState("");
    const [list, setList] = useState([]);

    const handleAddTask = (e) => {
        if (e.key === "Enter" && task.trim() !== "") {
            setList([...list, task]);
            setTask("");
        }
    };

    const deleteTask = (index) => {
        setList(list.filter((_, i) => i !== index));
    };

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="card shadow-sm border-0" style={{ maxWidth: "500px", width: "100%", borderRadius: "20px" }}>
                
                
                <div className="p-4 text-white text-center" style={{ backgroundColor: "var(--color-primario)", borderRadius: "20px 20px 0 0" }}>
                    <i className="fas fa-clock mb-2" style={{ fontSize: "2rem" }}></i>
                    <h3 className="fw-bold m-0">Rutina Diaria</h3>
                    <p className="small m-0 opacity-75">Organiza el día de tu bebé</p>
                </div>

                <div className="card-body p-4">
                    {/* Input */}
                    <div className="mb-4">
                        <label className="form-label fw-bold text-muted">Añadir actividad</label>
                        <input
                            type="text"
                            className="form-control form-control-lg border-0 bg-light"
                            placeholder="Ej: Baño, Siesta, Cena..."
                            style={{ borderRadius: "12px", fontSize: "1rem" }}
                            value={task}
                            onChange={(e) => setTask(e.target.value)}
                            onKeyDown={handleAddTask}
                        />
                        <small className="text-muted mt-2 d-block">Pulsa Enter para añadir</small>
                    </div>

                    {/* Lista de tareas */}
                    <ul className="list-group list-group-flush">
                        {list.length === 0 ? (
                            <div className="text-center py-4">
                                <i className="fas fa-clipboard-list text-light mb-2" style={{ fontSize: "3rem" }}></i>
                                <p className="text-muted">No hay actividades programadas</p>
                            </div>
                        ) : (
                            list.map((item, index) => (
                                <li key={index} className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-2 bg-white shadow-sm" 
                                    style={{ borderRadius: "10px", padding: "15px" }}>
                                    <div className="d-flex align-items-center">
                                        <div className="rounded-circle me-3" style={{ width: "10px", height: "10px", backgroundColor: "var(--color-primario)" }}></div>
                                        <span className="fw-semibold text-dark">{item}</span>
                                    </div>
                                    <button 
                                        className="btn btn-link text-danger p-0" 
                                        onClick={() => deleteTask(index)}
                                    >
                                        <i className="fas fa-times-circle fa-lg"></i>
                                    </button>
                                </li>
                            ))
                        )}
                    </ul>

                    {/* Contador */}
                    {list.length > 0 && (
                        <div className="mt-4 pt-3 border-top text-center text-muted small">
                            Tienes <strong>{list.length}</strong> {list.length === 1 ? 'actividad' : 'actividades'} para hoy
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};