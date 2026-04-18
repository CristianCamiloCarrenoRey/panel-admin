import React from 'react'

const Usuarios = () => {
    const usuarios = [
        { id: 1, nombre: 'admin', rol: 'Administrador', estado: 'Activo' },
        { id: 2, nombre: 'jose123', rol: 'Editor', estado: 'Activo' },
        { id: 3, nombre: 'lauraM', rol: 'Lector', estado: 'Inactivo' },
    ]

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Usuarios del Sistema</h1>
            <table className="table table-striped table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Nombre de Usuario</th>
                        <th>Rol</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map(u => (
                        <tr key={u.id}>
                            <td>{u.id}</td>
                            <td>{u.nombre}</td>
                            <td>{u.rol}</td>
                            <td>{u.estado}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Usuarios